import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import Day from './Plan/Day.js'
import Suggestions from './Plan/Suggestions.js'
import './components.css'


class Plan extends Component {
    
    sort_days(arr){
        let sorted_array = arr.sort(function(a,b){
            let dateA = new Date(a.date)
            let dateB = new Date(b.date)
            // console.log(dateA)
            return dateA  - dateB
        })
        return sorted_array
    }

    renderMealPlan(){
        if(this.props.mealplan && this.props.mealplan.days.length > 0){
            let days_array = Object.values(this.props.mealplan.days)
            days_array = this.sort_days(days_array)
            console.log(days_array)
            return(
                days_array.map((day) => {
                    return(
                            <Day key={day.id} day={day}/>
                        )
                    })
            )
        }else{
            return(
                <h1> 
                    Loading...
                </h1>
            )
        }
    }

  render() {

    return(
        <div className="plan">
            {this.renderMealPlan()}
            <Suggestions/>

        </div>
        )
    }

}
  
export default withRouter(Plan);