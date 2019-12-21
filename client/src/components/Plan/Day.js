import React, { Component } from 'react';
import Meal from '../Meal.js'
import DayControlPanel from './Day/DayControlPanel.js'
import {withRouter} from 'react-router-dom';
import '../components.css'
import DownArrow from '../../assets/downarrow-icon.png'
import UpArrow from '../../assets/uparrow-icon.png'


class Day extends Component {

    constructor(props){
        super(props);
        this.state = {
            displayMeals: false,
            day_name: "Loading",
        }
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount(){
        var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        var d = new Date(this.props.day.date);
        var dayName = days[d.getUTCDay()];
        console.log("d: " + d)
        this.setState({
            day_name: dayName,
            date_display: (d.getUTCMonth() + 1) + "/" + (d.getUTCDate())
        })

        this.calculateControlPanelInformation(this.props.day.meals)
    }
    
    calculateControlPanelInformation(meals){
        let totalDayCookingTime = 0 
        let totalDayCalories = 0
        meals.map((meal) =>{
            meal.recipes.map((recipe) => {
                totalDayCookingTime = totalDayCookingTime + recipe.total_recipe_time
                totalDayCalories = totalDayCalories + recipe.calories
                return null
            })
            return null
        })
        this.setState({
            totalDayCookingTime: totalDayCookingTime,
            totalDayCalories: totalDayCalories
        })
    }

    sort_meals(arr){
        let sorted_array = arr.sort(function(a,b){
            return a.order  - b.order
        })
        return sorted_array
    }

    handleClick(){
        this.setState({
            displayMeals: !this.state.displayMeals
        })
    }

    renderArrow(){
        if(this.state.displayMeals === false){
            return(
                <img  src={DownArrow} className="day_arrow icon" alt='downarrow_button'></img>
            )
        }else{
            return(
                <img  src={UpArrow} className="day_arrow icon" alt='uparrow_button'></img>
            )
        }
    }

    renderMeals(){
        if(this.state.displayMeals && this.props.day.meals){
            let sorted_meals_array = Object.values(this.props.day.meals)  
            sorted_meals_array = this.sort_meals(sorted_meals_array)
            return(
                sorted_meals_array.map((meal)=> {
                    return(
                        <Meal key={meal.id} meal={meal}/>
                    )
                })
            )
        }
    }

    render() {

        return(
            <div className="day" >
                <div className="day_header">
                    <span className="day_expansion_area" onClick={this.handleClick}>
                        {this.renderArrow()}
                        <div className="day_title" >    
                            {this.state.day_name}, {this.state.date_display}
                        </div>
                    </span>
                    <div className="day_control_panel">
                        <DayControlPanel totalDayCookingTime={this.state.totalDayCookingTime} totalDayCalories={this.state.totalDayCalories}/>
                    </div>
                </div>
                <div className="meals">
                    {this.renderMeals()}
                </div>
            </div>
        )
    }

}
  
export default withRouter(Day);