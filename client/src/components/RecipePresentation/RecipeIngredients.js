import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import '../components.css'


class RecipeIngredients extends Component {

    findRelatedQuantity(ingredient){
        let index = this.props.quantities.map(e => e.ingredient_id).indexOf(ingredient.id);
        // let quantity = this.props.quantities.map(function(e) { return e; }).indexOf(ingredient.id);
        console.log(index)
        let quantity = this.props.quantities[index] 
        console.log(this.props.quantities[index])
        return quantity
    }

    renderIngredients(){
        return(
            this.props.ingredients.map(ingredient => {
                let quantity = this.findRelatedQuantity(ingredient)
                return(
                    <li className="ingredient">
                        {quantity.measure} {quantity.unit}, {ingredient.name}
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