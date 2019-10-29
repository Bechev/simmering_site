import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import RecipeCard from './RecipeCard.js'


class BrowseCatgegory extends Component {

  render() {

    return(
        <div className="browse_category">
            Browse
            <RecipeCard isMealPlan={false}/>
        </div>
        )
    }

}
  
export default withRouter(BrowseCatgegory);