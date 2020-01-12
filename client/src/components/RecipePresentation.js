import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import { connect } from 'react-redux'
import RecipeInformations from './RecipeInformations.js'
import RecipeIngredients from './RecipePresentation/RecipeIngredients.js'
import RecipeInstructions from './RecipePresentation/RecipeInstructions.js'
import './components.css'
import AddToMealPlan from './AddToMealPlan.js';


class RecipePresentation extends Component {

    constructor(props){
        super(props);
        this.state = {
            displayQuickAddToMealPlan: false,
        }
        this.displayQuickAddToMealPlan = this.displayQuickAddToMealPlan.bind(this)
        this.redirectToLoginPage = this.redirectToLoginPage.bind(this)
        this.changeFeedCount = this.changeFeedCount.bind(this)
        this.defineNumberOfGuests = this.defineNumberOfGuests.bind(this)
    }

    // component did update allows to fecth and render the quantities multiplicator for the meal/recipe combination
    componentDidMount(){
        this.defineNumberOfGuests()
    }
    
    // component did update allows to fecth and render the userparams settings default number of guests
    componentDidUpdate(prevProps){
        if(prevProps.userSettings.default_number_of_guests !== this.props.userSettings.default_number_of_guests)
        this.defineNumberOfGuests()
    }
  
    defineNumberOfGuests(){
        this.setState({
            recipe_feed_count: this.props.userSettings.default_number_of_guests
        })

    }

    changeFeedCount(action) {
        var increment = 0
        if(action === "decrement" && this.state.recipe_feed_count <= 1){
        }else{
            if (action === "increment") {
                increment = 1
            } else if (action === "decrement" && this.state.recipe_feed_count > 0) {
                increment = -1
            }
            this.setState({
                recipe_feed_count: this.state.recipe_feed_count + increment
            })
        }
    }

    displayQuickAddToMealPlan(){
        this.setState({
            displayQuickAddToMealPlan: !this.state.displayQuickAddToMealPlan
        })
    }

    redirectToLoginPage(){
        this.props.history.push('/login')
    }

    renderAddToMealPlan(){
        if(this.state.displayQuickAddToMealPlan){
            return (
                <AddToMealPlan recipe={this.props.recipe} 
                                displayQuickAddToMealPlan={this.displayQuickAddToMealPlan}
                                recipe_feed_count= {this.state.recipe_feed_count}/>
            )
        }
    }

    render() {

        return(
            <div className="recipe_presentation" >
                {this.renderAddToMealPlan()}
                <div className="recipe_presentation_header">
                    <div className="recipe_title">
                        <div>
                        {this.props.recipe.name}
                        
                        </div>
                        <button className="alt_button recipe_card_button" onClick={this.props.user ? this.displayQuickAddToMealPlan : this.redirectToLoginPage}>
                            Add to MealPlan
                        </button>
                    </div>
                    <RecipeInformations recipe={this.props.recipe} recipe_feed_count= {this.state.recipe_feed_count} changeFeedCount={this.changeFeedCount}/>
                </div>

                <div className="recipe_presentation_body">
                    <React.Fragment>
                        <RecipeIngredients ingredients={this.props.recipe.ingredients} quantities={this.props.recipe.quantities} multiplicator={this.state.recipe_feed_count}/>
                        {/* <RecipeIngredients ingredients={this.state.ingredients}/> */}
                    </React.Fragment>

                    <React.Fragment>
                        <RecipeInstructions instructions={this.props.recipe.instructions}/>
                        {/* <RecipeInstructions ingredients={this.state.instructions}/> */}
                    </React.Fragment>
                </div>
            </div>
        )
    }

}

const mapStateToProps = (state, ownProps) => {
    return {
      user: state.auth.user,
      recipe: state.recipe.recipe,
      userSettings: state.userParameters.userSettings,
    }
  }

export default withRouter(connect(mapStateToProps, null)(RecipePresentation));