import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import Edit from '../assets/edit-icon.png'
import Delete from '../assets/delete-icon.png'
import Minus from '../assets/minus-icon.png'
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
        console.log(this.state.recipe_feed_count)
        console.log("executed")
    }

    renderRecipeMealPlanControls(){
        if(this.props.isMealPlan){
            return(
                <div className="meal_plan_controls">
                    <div className="edit_recipe">
                        <img  src={Edit} className="edit icon" alt='edit_button'></img>
                    </div>
                    <div className="remove_recipe">
                        <img src={Delete} className="edit icon" alt='delete_button'></img>
                    </div>
                </div>
            )
        }
    }

    renderRecipeFeedCout(){
        if(this.props.isMealPlan){
            return(
                <React.Fragment>
                    <div className="recipe_feed_count_decrease recipe_feed_count_change" onClick={this.changeFeedCount.bind(this, "decrement")}>
                        <img src={Minus} className="minus icon" alt='minus_button'></img>
                    </div>
                    <div className="recipe_feed_count">{this.state.recipe_feed_count}</div>
                    <div className="recipe_feed_count_increase recipe_feed_count_change" onClick={this.changeFeedCount.bind(this, "increment")}>
                        <img src={Plus} className="plus icon" alt='plus_button'></img>
                    </div>
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
                <div className="cooking_time recipe_card_information_element">
                    <img src={Stopwatch} className="stopwatch icon" alt='plus_button'></img>
                    10
                </div>
                <div className="calories_count recipe_card_information_element">350pp</div>
            </div>
        </div>
        )
    }

}
  
export default withRouter(RecipeCard);