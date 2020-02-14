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
        let string_integer = "" 
        let fractionized_quantity = ""
        let integer = Math.floor(quantity)
        if(integer === 0){
            string_integer = ""
        }else{
            string_integer = integer.toString()
        }
        let numerator = (quantity - integer) 
        numerator = Math.round((numerator + Number.EPSILON) * 100) / 100
        numerator = numerator *100
        if(numerator > 0){
            let denominator = 100
            let divisor = this.gcd(numerator, denominator)
            if(integer > 0 ){
                fractionized_quantity = integer + " " + (numerator/divisor).toString() + "/" + (denominator/divisor).toString()
            }else{
                fractionized_quantity = (numerator/divisor).toString() + "/" + (denominator/divisor).toString()
            }
        }else {
            fractionized_quantity = string_integer
        }
        return fractionized_quantity
    }

    gcd(numerator, denominator) {  
        if (!denominator) {  
            return numerator;  
        }  
     
        return this.gcd(denominator, numerator % denominator);  
     };  

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