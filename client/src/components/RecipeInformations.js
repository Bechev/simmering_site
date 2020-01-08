import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Calories from '../assets/calories-icon.png'
import Minus from '../assets/minus-icon.png'
import Person from '../assets/person-icon.png'
import Plus from '../assets/plus-icon.png'
import PreparationTime from '../assets/preparation-time-icon.png'
import CookingTime from '../assets/cooking-time-icon.png'
import TotalCookingTime from '../assets/total-cooking-time-icon.png'
import { connect } from 'react-redux'
import './components.css'


class RecipeInformations extends Component {

    constructor(props) {
        super(props);
        this.state = {
            recipe_feed_count: null,
            quantities_multiplicator_id: null
        }
        this.changeFeedCount = this.changeFeedCount.bind(this);
        this.renderInformations = this.renderInformations.bind(this)
        this.defineNumberOfGuests = this.defineNumberOfGuests.bind(this)
    }

    componentDidMount(){
        this.defineNumberOfGuests()
    }

    // component did update allows to fecth and render the userparams settings default number of guests
    componentDidUpdate(prevProps){
        if(prevProps.userSettings.default_number_of_guests !== this.props.userSettings.default_number_of_guests)
        this.defineNumberOfGuests()
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
        if (action === "increment") {
            increment = 1
        } else if (action === "decrement" && this.state.recipe_feed_count > 0) {
            increment = -1
        }
        this.setState({
            recipe_feed_count: this.state.recipe_feed_count + increment
        })
    }

    renderRecipeFeedCount() {
        return (
            <div className="recipe_card_information_element">
                <img src={Person} className="person icon" alt='person_icon'></img>
                <div className="feed_count_controls">
                    <div className="recipe_feed_count recipe_feed_count_change" onClick={this.changeFeedCount.bind(this, "increment")}>
                        <img src={Plus} className="plus icon" alt='plus_button'></img>
                    </div>
                    <div className="recipe_feed_count recipe_feed_count_change" onClick={this.changeFeedCount.bind(this, "decrement")}>
                        <img src={Minus} className="minus icon" alt='minus_button'></img>
                    </div>
                </div>
                <div className="recipe_feed_count">
                    {this.state.recipe_feed_count}
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

const mapStateToProps = (state, ownProps) => {
    return {
        userSettings: state.userParameters.userSettings,
    }
} 

const mapDispatchToProps = dispatch => {
    return {
        // changeQuantitiesMultplicator: (action, user, quantities_multiplicator_id) => dispatch(changeQuantitiesMultplicator(action, user, quantities_multiplicator_id)),
        // addOrRemoveRecipeToMealplan: (action, user, mealplan_id, day_name, meal_name, recipe_id) => dispatch(addOrRemoveRecipeToMealplan(action, user, mealplan_id, day_name, meal_name, recipe_id)),
    }
}

  export default withRouter(connect(mapStateToProps, mapDispatchToProps)(RecipeInformations));