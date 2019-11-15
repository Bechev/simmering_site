import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import Day from './Plan/Day.js'
import Suggestions from './Plan/Suggestions.js'
import './components.css'


class Plan extends Component {
        
    renderMealPlan(){
        if(this.props.mealplan && this.props.mealplan.days.length > 0){
            return(
                this.props.mealplan.days.map((day) => {
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