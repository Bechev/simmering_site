import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import '../components.css'


class RecipeIngredients extends Component {

    renderIngredients(){
        return(
            this.props.ingredients.map(ingredient => {
                return(
                    <li className="ingredient">
                        {ingredient.name}
                    </li>            
                )
            })
        )
    }

    render() {
        if(this.props.ingredients){
            return(
                <div className="recipe_ingredients">
                    <ul>
                        {this.renderIngredients()}
                    </ul>
                </div>
            )
        }else{
            return(
                <h2>Loading</h2>
            )
        }
    }

}
  
export default withRouter(RecipeIngredients);