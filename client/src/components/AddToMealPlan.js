import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// import {fetchMealPlan} from '../services/actions/mealplan.js'

import './components.css'


class AddToMealPlan extends Component {

    constructor(props) {
        super(props);

        this.state = {
            recipe_day: new Date(),
            recipe_meal: ""
        }
        this.handleDateChange = this.handleDateChange.bind(this)
        this.handleMealChange = this.handleMealChange.bind(this)
        this.addRecipeToMealPlan = this.addRecipeToMealPlan.bind(this)
    }

    addRecipeToMealPlan() {
        alert("day:" + this.state.recipe_day + "meal:" + this.state.recipe_meal)
    }

    // Stop the propagation to allow removing the AddToMealPlan window when cliking on the parent but not when clicking on the child.
    stopPropagation(e) {
        e.stopPropagation();
    }

    handleDateChange = date => {
        this.setState({
            startDate: date
        });
    };

    handleMealChange(event) {
        this.setState({
            recipe_meal: event.target.value,
        });

    }

    render() {

        return (
            <div className="add_to_mealplan_blackground" onClick={this.props.displayQuickAddToMealPlan} >
                <div className="add_to_mealplan_window" onClick={this.stopPropagation}>
                    {/* <div className="add_to_mealplan_form"> */}
                        <form className="add_to_mealplan_form">
                            <div className="date_picker add_to_mealplan_input">
                                <label className='recipe_day_selection'> Day: </label>
                                <br></br>
                                <DatePicker className='input_field day_selection_input_field add_to_mealplan_input_field' dateFormat="yyyy/MM/dd" selected={this.state.recipe_day} onChange={this.handleDateChange} placeholder={this.state.recipe_day} />
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
                    {/* </div> */}
                </div>
            </div>
        )
    }

}

const mapStateToProps = (state, ownProps) => {
    return {
        user: state.auth.user,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        // fetchMealPlan: (user, mealplan_id) => dispatch(fetchMealPlan(user, mealplan_id)),
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AddToMealPlan));