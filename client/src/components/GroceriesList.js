import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux'
// import {checkOrUncheckIngredient} from '../services/actions/groceriesList.js'


class GroceriesList extends Component {


    handleChange(event, ingredient) {
        // checkOrUncheckIngredient(event.target.checked,ingredient);
    }

    renderIngredientsList() {
        if (this.props.groceries_list) {
            return (
                this.props.groceries_list.map((ingredient) => {
                    console.log(ingredient)
                    return (
                        <div className="ingredient_checkbox">

                            <input className="checkbox" type="checkbox" onClick={(event) => this.handleChange(event, ingredient)} name={ingredient.name} value={ingredient.name}></input>
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
        // categories: state.categories.categoriesList,
        groceries_list: state.groceriesList.ingredients
    }
}

const mapDispatchToProps = dispatch => {
    return {
        // checkOrUncheckIngredient: (ingredient, isChecked) => dispatch(checkOrUncheckIngredient(ingredient, isChecked)),
    }
}

export default withRouter(connect(mapStateToProps, null)(GroceriesList));