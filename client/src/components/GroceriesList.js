import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux'
import {updateUserIngredients} from '../services/actions/userIngredients.js'


class GroceriesList extends Component {


    handleChange(ingredient) {
        this.props.updateUserIngredients(ingredient.id);
    }

    fractionize(quantity){
        let string_integer = "" 
        let fractionized_quantity = ""
        let integer = Math.floor(quantity)
        console.log("integer" + integer)
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

    renderIngredientsList() {

        if (this.props.groceries_list_ingredients.length===0 && this.props.groceries_list_quantities.length===0) {
            return (
                <div className="groceries_list_text"> Your mealplan is empty, start adding some recipes to create your groceries list!</div>
            )
        } else {
            return (
                this.props.groceries_list_ingredients.map((ingredient) => {
                    let ingredient_quantity =  this.props.groceries_list_quantities.find(quantity => quantity.ingredient_id === ingredient.id )
                    return (
                        <div className="ingredient_checkbox">
                            <input className="checkbox" type="checkbox"
                                   onClick={() => this.handleChange(ingredient)} 
                                   name={ingredient.name} value={ingredient.name}
                                   checked={this.props.user_ingredients.some(user_ingredient => user_ingredient['id'] === ingredient.id ) ?  true : false}></input>
                            <label className="ingredient_label">
                                {this.fractionize(ingredient_quantity.measure)} {ingredient_quantity.unit}, {ingredient.name}
                            </label>
                            <br></br>
                        </div>
                    )
                })
            )
        }
    }

    render() {
        return (
            <React.Fragment>
                <div className="groceries_title">
                    Groceries list
                    </div>
                <div className="groceries_list">
                    {this.renderIngredientsList()}
                </div>
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        user: state.auth.user,
        groceries_list_ingredients: state.groceriesList.ingredients,
        groceries_list_quantities: state.groceriesList.quantities,
        user_ingredients: state.userIngredients.ingredients,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        updateUserIngredients: (ingredient_id) => dispatch(updateUserIngredients(ingredient_id)),
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(GroceriesList));