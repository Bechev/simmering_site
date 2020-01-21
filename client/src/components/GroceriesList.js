import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux'
import {updateUserIngredients} from '../services/actions/userIngredients.js'


class GroceriesList extends Component {


    handleChange(user, ingredient) {
        this.props.updateUserIngredients(user, ingredient.id);
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
                                   onClick={() => this.handleChange(this.props.user, ingredient)} 
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
        updateUserIngredients: (user, ingredient_id) => dispatch(updateUserIngredients(user, ingredient_id)),
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(GroceriesList));