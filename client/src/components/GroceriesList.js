import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux'
import Category from './BrowseCategory/Category.js'
import RecipeCard from './RecipeCard.js';


class GroceriesList extends Component {

    constructor(props) {
        super(props)
        this.state = {
            ingredients: [{ name: "ingredient A" },
            { name: "ingredient B" },
            { name: "ingredient C" },
            { name: "ingredient D" },
            { name: "ingredient E" },
            { name: "ingredient F" },
            { name: "ingredient G" },
            { name: "ingredient H" },
            { name: "ingredient I" },
            { name: "ingredient J" },
            { name: "ingredient K" },
            { name: "ingredient L" }]
        }
    }

    renderIngredientsList() {
        if (this.state.ingredients) {
            return (
                this.state.ingredients.map((ingredient) => {
                    return (
                        <div className="ingredient_checkbox">

                            <input className="checkbox" type="checkbox" name={ingredient.name} value={ingredient.name}></input>
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
        categories: state.categories.categoriesList,
        // user: state.auth.user
    }
}

// const mapDispatchToProps = dispatch => {
//     return {
//         sign_out: (user) => dispatch(sign_out(user)),
//     }
// }

export default withRouter(connect(mapStateToProps, null)(GroceriesList));