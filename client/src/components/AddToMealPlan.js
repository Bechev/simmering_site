import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux'
import {addOrRemoveRecipeToMealplan} from '../services/actions/mealplan.js'
import {fetchGroceriesList} from '../services/actions/groceriesList.js'
import {fetchUserIngredients} from '../services/actions/userIngredients.js'
// import "react-datepicker/dist/react-datepicker.css";
// import {fetchMealPlan} from '../services/actions/mealplan.js'

import './components.css'


class AddToMealPlan extends Component {

    constructor(props) {
        super(props);

        this.state = {
            day_name: "Select a day",
            meal_name: "",
        }
        this.handleDayNameChange = this.handleDayNameChange.bind(this)
        this.handleMealChange = this.handleMealChange.bind(this)
        this.addRecipeToMealPlan = this.addRecipeToMealPlan.bind(this)
    }

    async addRecipeToMealPlan() {
        if(this.state.day_name === "Select a day"){
            alert("The day cannot be empty")
        }else{
            await this.props.addOrRemoveRecipeToMealplan("Add", this.props.user, this.props.mealplan_id, this.state.day_name, this.state.meal_name, this.props.recipe.id, this.props.recipe_feed_count)
            await this.props.displayQuickAddToMealPlan()
            this.props.fetchGroceriesList(this.props.user)
            this.props.fetchUserIngredients(this.props.user)
        }
    }

    // Stop the propagation to allow removing the AddToMealPlan window when cliking on the parent but not when clicking on the child.
    stopPropagation(e) {
        e.stopPropagation();
    }

    handleDayNameChange(event) {
        this.setState({
            day_name: event.target.value,
        });
    }

    handleMealChange(event) {
        if (event.target.value === ""){
            alert("Meal name cannot be blank")
        }else{
            this.setState({
                meal_name: event.target.value,
            });
        }
    }

    define_days_order(){
        const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
        const USER_SETTINGS_PREFERED_DAY = this.props.week_starting_day

        let beginning_of_week = days.slice(days.indexOf(USER_SETTINGS_PREFERED_DAY))
        let end_of_week = days.slice(0, days.indexOf(USER_SETTINGS_PREFERED_DAY))
        let user_week = beginning_of_week.concat(end_of_week)
        user_week =  ["Select a day"].concat(user_week)
        return user_week
    }

    renderDayNameDropdown(){
        let days = this.define_days_order()
        return(
            days.map((day)=>{
            return(
                <option value={day}>{day}</option>
                )
            }) 

        )
    }

    render() {

        return (
            <div className="add_to_mealplan_blackground" onClick={this.props.displayQuickAddToMealPlan} >
                <div className="add_to_mealplan_window" onClick={this.stopPropagation}>
                    <div className="recipe_card_title">
                        Add {this.props.recipe ? this.props.recipe.name : "Loading..."} to your mealplan?
                    </div>
                    <br></br><br></br>
                    <form className="add_to_mealplan_form">
                        <div className="date_picker add_to_mealplan_input">
                            <label className='recipe_day_selection'> Day: </label>
                            <br></br>
                            <select className='input_field day_selection_input_field add_to_mealplan_input_field' value={this.state.day_name} onChange={this.handleDayNameChange}>
                                {this.renderDayNameDropdown()}
                            </select>
                            {/* <DatePicker className='input_field day_selection_input_field add_to_mealplan_input_field' dateFormat="yyyy/MM/dd" selected={this.state.day_date} onChange={this.handleDateChange} placeholder={this.state.day_date} /> */}
                        </div>
                        <br></br>
                        <div className="meal_selection add_to_mealplan_input">
                            <label className='meal_selection'> Meal: </label>
                            <br></br>
                            <input className='input_field meal_selection_input_field add_to_mealplan_input_field' type="text" name="meal_value" value={this.state.recipe_meal} onChange={this.handleMealChange} placeholder="Meal" />
                        </div>
                        <br></br><br></br>
                        <div className="add_to_mealplan_buttons">
                            <input className='alt_button add_to_mealplan_button add_button' type="button" value="Add" onClick={this.addRecipeToMealPlan} />
                            <input className='alt_button add_to_mealplan_button' type="button" value="Cancel" onClick={this.props.displayQuickAddToMealPlan} />
                        </div>
                    </form>
                </div>
            </div>
        )
    }

}

const mapStateToProps = (state, ownProps) => {
    return {
        user: state.auth.user,
        mealplan_id: state.mealplan.id,
        userParameters: state.userParameters,
        week_starting_day: state.userParameters.userSettings.week_starting_day
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addOrRemoveRecipeToMealplan: (action, user, mealplan_id, day_date, meal_name, recipe_id, multiplicator) => dispatch(addOrRemoveRecipeToMealplan(action, user, mealplan_id, day_date, meal_name, recipe_id, multiplicator)),
        fetchGroceriesList: (user) => dispatch(fetchGroceriesList(user)),
        fetchUserIngredients: (user) => dispatch(fetchUserIngredients(user)),
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AddToMealPlan));