import React, { Component } from 'react';
import Meal from '../Meal.js'
import DayControlPanel from './Day/DayControlPanel.js'
import {withRouter} from 'react-router-dom';
import '../components.css'


class Day extends Component {

    constructor(props){
        super(props);
        this.state = {
            day: "Monday",
            displayMeals: false,
        }
        this.handleClick = this.handleClick.bind(this);
    }
    
    
    handleClick(){
        this.setState({
            displayMeals: !this.state.displayMeals
        })
    }

    renderMeals(){
        if(this.state.displayMeals){
            return(
                <React.Fragment>
                    <Meal name={"Breakfast"}/>
                    <Meal name={"Lunch"}/>
                    <Meal name={"Dinner"}/>
                </React.Fragment>
            )
        }
    }

    render() {

        return(
            <div className="day" >
                <div className="day_header">
                    <div className="day_title" onClick={this.handleClick}>    
                        {this.state.day}
                    </div>
                    <div className="blabla">
                        <DayControlPanel/>
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