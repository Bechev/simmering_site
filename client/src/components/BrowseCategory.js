import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import RecipeCard from './RecipeCard.js'


class BrowseCatgegory extends Component {

  render() {

    return(
        <div className="browse_category">
            <RecipeCard isMealPlan={true}/>
            <RecipeCard isMealPlan={true}/>
            <RecipeCard isMealPlan={false}/>
            <RecipeCard isMealPlan={true}/>
            <RecipeCard isMealPlan={false}/>
            <RecipeCard isMealPlan={false}/>
        </div>
        )   
    }

}
  
export default withRouter(BrowseCatgegory);