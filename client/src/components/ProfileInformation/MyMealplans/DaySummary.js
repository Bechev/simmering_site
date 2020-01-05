import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import MealSummary from './MealSummary.js'



class DaySummary extends Component {
    
    // constructor(props){
    //     super(props);
    //     this.state ={
    //         meals = this.props.day.meals
    //     }
    // }
    

    renderDayMeals(){
        return(
            this.props.day.meals.map((meal) => {
                return(
                    <div className="mealplan_summary_meal">
                        {meal.name}
                        <MealSummary meal={meal}/>
                    </div>
                    )
                })
        )
    }

  render() {

    return(
        <div className="mealplan_summary_meal">
            {this.renderDayMeals()}
        </div>
        )   
    }

}

export default withRouter(DaySummary);