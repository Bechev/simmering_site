import React, { Component } from 'react';
import {withRouter, Link} from 'react-router-dom';



class MealSummary extends Component {

    renderMealRecipes(){
        return(
            this.props.meal.recipes.map((recipe) => {
                return(
                    <div className="mealplan_summary_recipe">
                        <Link to={`/recipe/${recipe.id}`}>
                            {recipe.name}
                        </Link>
                    </div>
                    )
                })
        )
    }
  
    render() {

    return(
        <div className="mealplan_summary_meal">
            {this.renderMealRecipes()}
        </div>
        )   
    }

}





export default withRouter(MealSummary);