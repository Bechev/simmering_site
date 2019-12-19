import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import './components.css'
import RecipeCard from './RecipeCard';


class Meal extends Component {

    constructor(props){
        super(props);
        
        this.state = {
            meal_name: this.props.meal.name,
            displayRecipes: false,
        }
        this.handleClick = this.handleClick.bind(this);
    }
    
    
    handleClick(){
        this.setState({
            displayRecipes: !this.state.displayRecipes
        })
    }



    renderRecipes(){
        if(this.props.meal.recipes){
            return(
                this.props.meal.recipes.map((recipe) => {
                    return(
                        <RecipeCard recipe={recipe} isMealPlan={true}/>
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