import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import '../components.css'


class RecipeIngredients extends Component {

    
    render() {

        return(
            <div className="recipe_ingredients" >
            </div>
        )
    }

}
  
export default withRouter(RecipeIngredients);