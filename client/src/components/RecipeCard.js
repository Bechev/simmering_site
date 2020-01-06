import React, { Component } from 'react';
import {withRouter, Link} from 'react-router-dom';
import { connect } from 'react-redux'
import {addOrRemoveRecipeToMealplan} from '../services/actions/mealplan.js'
import AddToMealPlan from './AddToMealPlan.js'
import Delete from '../assets/delete-icon.png'
// import Edit from '../assets/edit-icon.png'

import RecipeInformations from './RecipeInformations.js'
import './components.css';

class RecipeCard extends Component {

    constructor(props){
        super(props);
        this.state = {
            displayQuickAddToMealPlan: false,
        }
        this.removeRecipeFromMeal = this.removeRecipeFromMeal.bind(this)
        this.displayQuickAddToMealPlan = this.displayQuickAddToMealPlan.bind(this)
        this.redirectToLoginPage = this.redirectToLoginPage.bind(this)
    }

    componentDidMount(){
        document.addEventListener("keydown", this.hideAddRecipeToWeekWindow, false);
      }
  
      componentWillUnmount(){
        document.removeEventListener("keydown", this.hideAddRecipeToWeekWindow, false);
      }

    hideAddRecipeToWeekWindow = (event) => {
        if(event.keyCode === 27){
            this.setState({
                displayQuickAddToMealPlan: false
            })
        }
    }

    renderRecipeCard(){
        if(this.props.recipe || !this.props.isMealPlan){
            return(
                <React.Fragment>
                    <div className="recipe_card_header">
                        <div className="recipe_card_title">
                            {this.renderRecipeName()}
                        </div>
                        {this.renderAddToMealPlanButton()}
                        {this.renderRecipeMealPlanControls()}
                    </div>
                    <RecipeInformations isRecipeCard={true} recipe={this.props.recipe}/>
                </React.Fragment>
            )
        }
    }

    renderAddToMealPlanButton(){
        if(!this.props.isMealPlan){
            return(
                <React.Fragment>
                    <button className="alt_button recipe_card_button" onClick={this.props.user ? this.displayQuickAddToMealPlan : this.redirectToLoginPage}>
                        Add to MealPlan
                    </button>
                    {this.renderAddToMealPlan()}
                </React.Fragment>
            )
        }
    }

    redirectToLoginPage(){
        this.props.history.push('/login')
    }

    displayQuickAddToMealPlan(){
        this.setState({
            displayQuickAddToMealPlan: !this.state.displayQuickAddToMealPlan
        })
    }

    renderAddToMealPlan(){
        if(this.state.displayQuickAddToMealPlan){
            return (
                <AddToMealPlan recipe={this.props.recipe} displayQuickAddToMealPlan={this.displayQuickAddToMealPlan}/>
            )
        }
    }

    renderRecipeMealPlanControls(){
        if(this.props.isMealPlan){
            return(
                <div className="meal_plan_controls">
                    <div className="remove_recipe" onClick={this.removeRecipeFromMeal}>
                        <img src={Delete} className="edit icon" alt='delete_button'></img>
                    </div>
                </div>
            )
        }
    }

    removeRecipeFromMeal(){
        this.props.addOrRemoveRecipeToMealplan("Remove", this.props.user, this.props.mealplan_id, this.props.day.name ,this.props.meal.name, this.props.recipe.id)
    }

    renderRecipeName(){
        if(this.props.recipe){
            return(
                <React.Fragment>
                    <Link style={{ textDecoration: 'none', color: `rgb(85, 105, 47)`}} to={`recipe/${this.props.recipe.id}`}>{this.props.recipe.name}</Link>
                </React.Fragment>
            )
        }else{
            return(
                <React.Fragment>
                    "Loading..."
                </React.Fragment>
            )
        }
    }





  render() {

    return(
        <div className="recipe_card">
            {this.renderRecipeCard()}
        </div>
        )
    }

}


const mapStateToProps = (state, ownProps) => {
    return {
      user: state.auth.user,
      mealplan_id: state.mealplan.id,
    }
  }

const mapDispatchToProps = dispatch => {
    return {
        addOrRemoveRecipeToMealplan: (action, user, mealplan_id, day_name, meal_name, recipe_id) => dispatch(addOrRemoveRecipeToMealplan(action, user, mealplan_id, day_name, meal_name, recipe_id)),
    }
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(RecipeCard));