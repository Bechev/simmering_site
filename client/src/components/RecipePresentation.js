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
                <AddToMealPlan recipe={this.props.recipe} displayQuickAddToMealPlan={this.displayQuickAddToMealPlan}/>
            )
        }
    }

    render() {

        return(
            <div className="recipe_presentation" >
                {this.renderAddToMealPlan()}
                <div className="recipe_presentation_header">
                    <div className="recipe_title">
                        {this.props.recipe.name}
                        <button className="alt_button recipe_card_button" onClick={this.props.user ? this.displayQuickAddToMealPlan : this.redirectToLoginPage}>
                            Add to MealPlan
                        </button>
                    </div>
                    <RecipeInformations recipe={this.props.recipe}/>
                </div>

                <div className="recipe_presentation_body">
                    <React.Fragment>
                        <RecipeIngredients ingredients={this.props.recipe.ingredients}/>
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
      recipe: state.recipe.recipe
    }
  }

export default withRouter(connect(mapStateToProps, null)(RecipePresentation));