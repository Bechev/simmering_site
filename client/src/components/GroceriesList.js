import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux'
import {updateUserIngredients} from '../services/actions/userIngredients.js'


class GroceriesList extends Component {


    handleChange(user, ingredient) {
        this.props.updateUserIngredients(user, ingredient.id);
    }

    renderIngredientsList() {
        if (this.props.groceries_list) {
            return (
                this.props.groceries_list.map((ingredient) => {
                    return (
                        <div className="ingredient_checkbox">

                            <input className="checkbox" type="checkbox"
                                   onClick={() => this.handleChange(this.props.user, ingredient)} 
                                   name={ingredient.name} value={ingredient.name}
                                   checked={this.props.user_ingredients.some(user_ingredient => user_ingredient['id'] === ingredient.id ) ?  true : false}></input>
                            <label className="ingredient_label">
                                {ingredient.name}
                            </label>
                            <br></br>

                        </div>
                    )
                })
            )
        } else {
            return (
                <h2> Loading </h2>
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
        groceries_list: state.groceriesList.ingredients,
        user_ingredients: state.userIngredients.ingredients,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        updateUserIngredients: (user, ingredient_id) => dispatch(updateUserIngredients(user, ingredient_id)),
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(GroceriesList));