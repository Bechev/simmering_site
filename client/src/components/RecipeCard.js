import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import { connect } from 'react-redux'
import Calories from '../assets/calories-icon.png'
import Delete from '../assets/delete-icon.png'
import Edit from '../assets/edit-icon.png'
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
        }
        this.changeFeedCount = this.changeFeedCount.bind(this);
        this.removeRecipeFromMeal = this.removeRecipeFromMeal.bind(this)
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

    removeRecipeFromMeal(){
        fetch("http://localhost:3000/api/v1/meals/" + this.props.mealID,{
            method: 'PUT',
            headers:{
                "uid": this.props.user.uid,
                "client":  this.props.user.client,
                "access-token":  this.props.user['access-token'],
                "recipe-id": this.props.recipe.id,
            }
        })
        .then(response => response.json())
        .then(response =>{})
        .catch(error =>{
            alert(error.message)
        })
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
                    "No Name"
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
                <div className="add_to_meal_plan_button">
                    Add to MealPlan
                </div>
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
    }
  }


export default withRouter(connect(mapStateToProps, null)(RecipeCard));