import React, { Component } from 'react';
import {withRouter, Link} from 'react-router-dom';
import { connect } from 'react-redux'
import {addOrRemoveRecipeToMealplan, updateMealMultiplicator} from '../services/actions/mealplan.js'
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
            recipe_feed_count: null,
            quantities_multiplicator_id: null
        }
        this.removeRecipeFromMeal = this.removeRecipeFromMeal.bind(this)
        this.displayQuickAddToMealPlan = this.displayQuickAddToMealPlan.bind(this)
        this.redirectToLoginPage = this.redirectToLoginPage.bind(this)
        this.changeFeedCount = this.changeFeedCount.bind(this);
        this.defineNumberOfGuests = this.defineNumberOfGuests.bind(this)
    }

    // component did update allows to fecth and render the quantities multiplicator for the meal/recipe combination
    componentDidMount(){
        document.addEventListener("keydown", this.hideAddRecipeToWeekWindow, false);
        this.defineNumberOfGuests()
    }
    
    // component did update allows to fecth and render the userparams settings default number of guests
    componentDidUpdate(prevProps){
        if(prevProps.userSettings.default_number_of_guests !== this.props.userSettings.default_number_of_guests)
        this.defineNumberOfGuests()
    }
  
    componentWillUnmount(){
    document.removeEventListener("keydown", this.hideAddRecipeToWeekWindow, false);
    }

    defineNumberOfGuests(){
        if(this.props.quantities_multiplicators){
            this.props.quantities_multiplicators.map((quantities_multiplicator)=>{
                if(quantities_multiplicator.recipe_id === this.props.recipe.id){    
                    this.setState({
                        recipe_feed_count: quantities_multiplicator.multiplicator,
                        quantities_multiplicator_id: quantities_multiplicator.id
                    })
                }
            })
        }else{
            this.setState({
                recipe_feed_count: this.props.userSettings.default_number_of_guests
            })
        }

    }

    changeFeedCount(action) {
        var increment = 0
        // If the recipeCar is rendered in a Mealplan (in opposition to a suggestion or while browsing recipes), 
        // when we increase the number of guests, we update the associated quantities multiplicator 
        if(this.props.isMealPlan){
            this.props.updateMealMultiplicator(action, this.props.user, this.state.quantities_multiplicator_id)
        }
        if (action === "increment") {
            increment = 1
        } else if (action === "decrement" && this.state.recipe_feed_count > 0) {
            increment = -1
        }
        this.setState({
            recipe_feed_count: this.state.recipe_feed_count + increment
        })
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
                    <RecipeInformations quantities_multiplicators= {this.props.quantities_multiplicators} 
                                        recipe={this.props.recipe} 
                                        recipe_feed_count= {this.state.recipe_feed_count}
                                        changeFeedCount= {this.changeFeedCount.bind(this)}
                                        isRecipeCard={true}
                                        isMealPlan={this.props.isMealPlan} />
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
                <AddToMealPlan 
                    recipe={this.props.recipe} 
                    displayQuickAddToMealPlan={this.displayQuickAddToMealPlan}
                    recipe_feed_count= {this.state.recipe_feed_count}/>
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
      userSettings: state.userParameters.userSettings,
    }
  }

const mapDispatchToProps = dispatch => {
    return {
        addOrRemoveRecipeToMealplan: (action, user, mealplan_id, day_name, meal_name, recipe_id) => dispatch(addOrRemoveRecipeToMealplan(action, user, mealplan_id, day_name, meal_name, recipe_id)),
        updateMealMultiplicator: (action, user, multiplicator_id) => dispatch(updateMealMultiplicator(action, user, multiplicator_id)),
    }
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(RecipeCard));