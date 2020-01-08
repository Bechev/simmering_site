import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import './components.css'
import RecipeCard from './RecipeCard';


class Meal extends Component {

    constructor(props){
        super(props);
        
        this.state = {
            meal_name: this.props.meal.name,
            // displayRecipes: true,
        }
        // this.handleClick = this.handleClick.bind(this);
    }
    
    
    renderRecipes(){
        if(this.props.meal.recipes){
            return(
                this.props.meal.recipes.map((recipe) => {
                    return(
                        <RecipeCard key={this.props.meal.id} 
                                    day={this.props.day} 
                                    meal={this.props.meal} 
                                    quantities_multiplicators={this.props.meal.quantities_multiplicators} 
                                    recipe={recipe} 
                                    isMealPlan={true} />
                    )
                })
            )
        }
    }

    render() {

        return(
            <div className="meal" >
                <div className="meal_title" onClick={this.handleClick}>    
                    {this.state.meal_name}
                </div>
                <div className="meal_recipes">
                    {this.renderRecipes()}
                </div>

            </div>
        )
    }

}
  
export default withRouter(Meal);