import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Calories from '../assets/calories-icon.png'
import Minus from '../assets/minus-icon.png'
import Person from '../assets/person-icon.png'
import Plus from '../assets/plus-icon.png'
import PreparationTime from '../assets/preparation-time-icon.png'
import CookingTime from '../assets/cooking-time-icon.png'
import TotalCookingTime from '../assets/total-cooking-time-icon.png'
// import { connect } from 'react-redux'
import './components.css'


class RecipeInformations extends Component {

    constructor(props) {
        super(props);
        this.state={
            recipe_feed_count: null,
        }
        this.renderInformations = this.renderInformations.bind(this)
        
    }


    renderRecipeFeedCount() {
        return (
            <div className="recipe_card_information_element">
                <img src={Person} className="person icon" alt='person_icon'></img>
                <div className="feed_count_controls">
                    <div className="recipe_feed_count recipe_feed_count_change" onClick={this.props.changeFeedCount.bind(this, "increment")}>
                        <img src={Plus} className="plus icon" alt='plus_button'></img>
                    </div>
                    <div className="recipe_feed_count recipe_feed_count_change" onClick={this.props.changeFeedCount.bind(this, "decrement")}>
                        <img src={Minus} className="minus icon" alt='minus_button'></img>
                    </div>
                </div>
                <div className="recipe_feed_count">
                    {this.props.recipe_feed_count}
                </div>
            </div>
        )
    }

    renderPrepAndCookingTime() {
        return (
            <React.Fragment>
                <div className="preparation_time recipe_card_information_element">
                    <img src={PreparationTime} className="preparation_time icon" alt='stopwatch_icon'></img>
                    {this.props.recipe.preparation_time}
                </div>
                <div className="cooking_time recipe_card_information_element">
                    <img src={CookingTime} className="cooking_time icon" alt='stopwatch_icon'></img>
                    {this.props.recipe.cooking_time}
                </div>
            </React.Fragment>
        )
    }

    renderTotalRecipeTimeAndCalories() {
        return (
            <React.Fragment>
                <div className="total_time recipe_card_information_element">
                    <img src={TotalCookingTime} className="total_cooking_time icon" alt='stopwatch_icon'></img>
                    {this.props.recipe.total_recipe_time}
                </div>
                <div className="calories_count recipe_card_information_element">
                    <img src={Calories} className="calories icon" alt='calories_icon'></img>
                    {this.props.recipe.calories}
                </div>
            </React.Fragment>
        )
    }

    renderInformations() {
        return (
            <div className={`${this.props.isRecipeCard ? "recipe_card_information" : "recipe_information"} information`}>
                {this.renderRecipeFeedCount()}
                {this.props.isRecipeCard ? null : this.renderPrepAndCookingTime()}
                {this.renderTotalRecipeTimeAndCalories()}
            </div>
        )
    }

    render() {
        if (this.props.recipe) {
            return (
                this.renderInformations()
            )
        }
        else {
            return (
                <h1>Loading</h1>
            )
        }
    }

}

// const mapStateToProps = (state, ownProps) => {
//     return {
//         userSettings: state.userParameters.userSettings,
//     }
// } 

// const mapDispatchToProps = dispatch => {
//     return {
//         // changeQuantitiesMultplicator: (action, user, quantities_multiplicator_id) => dispatch(changeQuantitiesMultplicator(action, user, quantities_multiplicator_id)),
//         // addOrRemoveRecipeToMealplan: (action, user, mealplan_id, day_name, meal_name, recipe_id) => dispatch(addOrRemoveRecipeToMealplan(action, user, mealplan_id, day_name, meal_name, recipe_id)),
//     }
// }

//   export default withRouter(connect(mapStateToProps, mapDispatchToProps)(RecipeInformations));
export default withRouter(RecipeInformations);