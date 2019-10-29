import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import './components.css';

class RecipeCard extends Component {

    constructor(props){
        super(props);
        this.state = {
            recipe_feed_count: 0,
        }
        this.changeFeedCount = this.changeFeedCount.bind(this);
    }

    changeFeedCount(action){
        var increment = 0
        if(action == "increment"){
            increment = 1
        }else if (action == "decrement"){
            increment = -1
        }
        this.setState({
            recipe_feed_count: this.state.recipe_feed_count + increment
        })
        console.log(this.state.recipe_feed_count)
        console.log("executed")
    }

    renderRecipeMealPlanControls(){
        if(this.props.isMealPlan){
            return(
                <div className="meal_plan_controls">
                    <div className="edit_recipe">Edit</div>
                    <div className="remove_recipe">Remove</div>
                </div>
            )
        }
    }

    renderRecipeFeedCout(){
        if(this.props.isMealPlan){
            return(
                <React.Fragment>
                    <div className="recipe_feed_count_decrease" onClick={this.changeFeedCount.bind(this, "decrement")}>-</div>
                    <div className="recipe_feed_count">{this.state.recipe_feed_count}</div>
                    <div className="recipe_feed_count_decrease" onClick={this.changeFeedCount.bind(this, "increment")}>+</div>
                </React.Fragment>
            )
        }else{
            return(
                <div className="recipe_feed_count">{this.state.recipe_feed_count}</div>
            )
        }
    }

  render() {

    return(
        <div className="recipe_card">
            <div className="recipe_card_header">
                <div className="recipe_card_title">
                    This is my delicious recipe that's a tiddy bit long  
                </div>
                {this.renderRecipeMealPlanControls()}
            </div>
            <div className="recipe_card_information">
                <div className="recipe_feed_count_control_panel recipe_card_information_element">
                    {this.renderRecipeFeedCout()}
                </div>
                <div className="cooking_time recipe_card_information_element">10</div>
                <div className="calories_count recipe_card_information_element">350pp</div>
            </div>
        </div>
        )
    }

}
  
export default withRouter(RecipeCard);