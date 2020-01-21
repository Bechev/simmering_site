import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import '../components.css'


class RecipeIngredients extends Component {

    findRelatedQuantity(ingredient){
        let index = this.props.quantities.map(e => e.ingredient_id).indexOf(ingredient.id);
        let quantity = this.props.quantities[index] 
        return quantity
    }

    fractionize(quantity){
        let integer = Math.floor(quantity)
        if(integer === 0){
            integer = ""
        }else{
            integer = integer.toString()
        }
        let fraction = quantity - integer
        if (fraction === 0){
            fraction = ""
        } else{
            fraction = " 1/" + (Math.round((1/fraction)*100/100).toString())
        }
        let fractionized_quantity = integer + fraction

        return fractionized_quantity
    }

    renderIngredients(){
        return(
            this.props.ingredients.map(ingredient => {
                let quantity = this.findRelatedQuantity(ingredient)
                let multiplicator = this.props.multiplicator ? this.props.multiplicator : 1
                let quantity_measure = quantity.measure*multiplicator 
                let quantity_measure_in_fraction = this.fractionize(quantity_measure)
                return(
                    <li className="ingredient">
                        {quantity_measure_in_fraction} {quantity.unit} {ingredient.name}
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