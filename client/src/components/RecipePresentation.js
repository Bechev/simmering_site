import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import RecipeInformations from './RecipePresentation/RecipeInformations.js'
import RecipeIngredients from './RecipePresentation/RecipeIngredients.js'
import RecipeInstructions from './RecipePresentation/RecipeInstructions.js'
import './components.css'


class RecipePresentation extends Component {

    constructor(props){
        super(props);  
        this.state = {
            name: "Random recipe",
            informations: {cooking_time: 54, total_recipe_time: 100, calories:200},
            ingredients: ["eggs", "tomatoes", "cheese", "zucchini", "peppers", "ingredient", "ingredient2", "ingredient3", "ingredient4"],
            instructions: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        }
    }
    
    render() {

        return(
            <div className="recipe_presentation" >
                <div className="recipe_presentation_header">
                    <div className="recipe_title">
                        {/* {this.props.recipe.name} */}
                        {/* <h1> */}
                            {this.state.name}
                        {/* </h1> */}
                    </div>

                    <React.Fragment>
                        <RecipeInformations informations={this.state.informations}/>
                    </React.Fragment>
                </div>

                <div className="recipe_presentation_body">
                    <React.Fragment>
                        {/* <RecipeIngredients ingredients={this.props.recipe.ingredients}/> */}
                        <RecipeIngredients ingredients={this.state.ingredients}/>
                    </React.Fragment>

                    <React.Fragment>
                        {/* <RecipeInstructions ingredients={this.props.recipe.instructions}/> */}
                        <RecipeInstructions ingredients={this.state.instructions}/>
                    </React.Fragment>
                </div>

            </div>
        )
    }

}
  
export default withRouter(RecipePresentation);