import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux'
import {createNewMealplan} from '../../services/actions/mealplan.js'
import {fetchGroceriesList} from '../../services/actions/groceriesList.js'
import {fetchUserIngredients} from '../../services/actions/userIngredients.js'
import '../components.css'


class CreateNewMealPlan extends Component {

    constructor(props) {
        super(props);

        this.state = {
            mealplan_name: ""
        }
        this.handleMealPlanNameChange = this.handleMealPlanNameChange.bind(this)
        this.createNewMealPlan = this.createNewMealPlan.bind(this)
    }

    async createNewMealPlan() {
        this.props.displayQuickAddToMealPlan()
        await this.props.createNewMealplan( this.state.mealplan_name)
        this.props.fetchGroceriesList()
        this.props.fetchUserIngredients()
    }

    // Stop the propagation to allow removing the AddToMealPlan window when cliking on the parent but not when clicking on the child.
    stopPropagation(e) {
        e.stopPropagation();
    }

    handleMealPlanNameChange(event) {
        if (event.target.value === ""){
            alert("MealPlan name cannot be blank")
        }else{
            this.setState({
                mealplan_name: event.target.value,
            });
        }
    }


    render() {

        return (
            <div className="add_to_mealplan_blackground" onClick={this.props.displayQuickAddToMealPlan} >
                <div className="add_to_mealplan_window" onClick={this.stopPropagation}>
                    <div className="recipe_card_title">
                        Create a new Mealplan
                    </div>
                    <br></br><br></br>
                    <form className="add_to_mealplan_form">
                        <br></br>
                        <div className="meal_selection add_to_mealplan_input">
                            <label className='mealplan_name'> Name: </label>
                            <br></br>
                            <input className='input_field meal_selection_input_field add_to_mealplan_input_field' type="text" name="mealplan_value" value={this.state.mealplan_name} onChange={this.handleMealPlanNameChange} placeholder="Mealplan Name" />
                        </div>
                        <br></br><br></br>
                        <div className="add_to_mealplan_buttons">
                            <input className='alt_button add_to_mealplan_button add_button' type="button" value="Add" onClick={this.createNewMealPlan} />
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
    }
}

const mapDispatchToProps = dispatch => {
    return {
        createNewMealplan: (mealplan_name) => dispatch(createNewMealplan(mealplan_name)),
        fetchGroceriesList: () => dispatch(fetchGroceriesList()),
        fetchUserIngredients: () => dispatch(fetchUserIngredients()),
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CreateNewMealPlan));