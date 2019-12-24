import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import { connect } from 'react-redux'
import {addOrRemoveRecipeToMealplan} from '../services/actions/mealplan.js'
import AddToMealPlan from './AddToMealPlan.js'
import Calories from '../assets/calories-icon.png'
import Delete from '../assets/delete-icon.png'
// import Edit from '../assets/edit-icon.png'
import Minus from '../assets/minus-icon.png'
import Person from '../assets/person-icon.png'
import Plus from '../assets/plus-icon.png'
import Stopwatch from '../assets/stopwatch-icon.png'
import './components.css';

class RecipeCard extends Component {

    constructor(props){
        super(props);
        this.state = {
            recipe_feed_count: 0,
            displayQuickAddToMealPlan: false,
        }
        this.changeFeedCount = this.changeFeedCount.bind(this);
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
                    <div className="recipe_card_information">
                        <div className="recipe_card_information_element">
                            <img src={Person} className="person icon" alt='person_icon'></img>
                                {this.renderRecipeFeedCout()}
                                <div className="recipe_feed_count">{this.state.recipe_feed_count}</div>
                        </div>
                        <div className="cooking_time recipe_card_information_element">
                            <img src={Stopwatch} className="stopwatch icon" alt='stopwatch_icon'></img>
                            {this.recipeTotalTime()}
                        </div>
                        <div className="calories_count recipe_card_information_element">
                            <img src={Calories} className="calories icon" alt='calories_icon'></img>
                            {this.renderRecipeCalories()}
                        </div>
                    </div>
                </React.Fragment>
            )
        }
    }

    renderAddToMealPlanButton(){
        if(!this.props.isMealPlan){
            return(
                <React.Fragment>
                    <div className="alt_button recipe_card_button" onClick={this.props.user ? this.displayQuickAddToMealPlan : this.redirectToLoginPage}>
                        Add to MealPlan
                    </div>
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
                    {/* <div className="edit_recipe">
                        <img  src={Edit} className="edit icon" alt='edit_button'></img>
                    </div> */}
                    <div className="remove_recipe" onClick={this.removeRecipeFromMeal}>
                        <img src={Delete} className="edit icon" alt='delete_button'></img>
                    </div>
                </div>
            )
        }
    }

    removeRecipeFromMeal(){
        this.props.addOrRemoveRecipeToMealplan("Remove", this.props.user, this.props.mealplan_id, this.props.day.date ,this.props.meal.name, this.props.recipe.id)
    }

    renderRecipeName(){
        if(this.props.recipe){
            return(
                <React.Fragment>
                    {this.props.recipe.name}
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

    renderRecipeCalories(){
        if(this.props.recipe){
            return(
                <React.Fragment>
                    {this.props.recipe.calories}
                </React.Fragment>
            )
        }
    }

    recipeTotalTime(){
        if(this.props.recipe){
            return(
                <React.Fragment>
                    {this.props.recipe.total_recipe_time}
                </React.Fragment>
            )
        }
    }

    renderRecipeFeedCout(){
        // if(this.props.isMealPlan){
            return(
                <div className="feed_count_controls">
                    <div className="recipe_feed_count recipe_feed_count_change" onClick={this.changeFeedCount.bind(this, "increment")}>
                        <img src={Plus} className="plus icon" alt='plus_button'></img>
                    </div>
                    <div className="recipe_feed_count recipe_feed_count_change" onClick={this.changeFeedCount.bind(this, "decrement")}>
                        <img src={Minus} className="minus icon" alt='minus_button'></img>
                    </div>
                </div>
            )
        // }
    }

    changeFeedCount(action){
        var increment = 0
        if(action === "increment"){
            increment = 1
        }else if (action === "decrement" && this.state.recipe_feed_count > 0){
            increment = -1
        }
        this.setState({
            recipe_feed_count: this.state.recipe_feed_count + increment
        })
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
        addOrRemoveRecipeToMealplan: (action, user, mealplan_id, day_date, meal_name, recipe_id) => dispatch(addOrRemoveRecipeToMealplan(action, user, mealplan_id, day_date, meal_name, recipe_id)),
    }
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(RecipeCard));