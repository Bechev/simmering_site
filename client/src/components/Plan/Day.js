import React, { Component } from 'react';
import Meal from '../Meal.js'
import DayControlPanel from './Day/DayControlPanel.js'
import {withRouter} from 'react-router-dom';
import '../components.css'


class Day extends Component {

    constructor(props){
        super(props);
        this.state = {
            day: this.props.day.date,
            displayMeals: false,
            day_name: "Loading"
        }
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount(){
        var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        var d = new Date(this.props.day.date);
        var dayName = days[d.getDay()];
        this.setState({
            day_name: dayName
        })
    }
    
    handleClick(){
        this.setState({
            displayMeals: !this.state.displayMeals
        })
    }

    renderMeals(){
        if(this.state.displayMeals && this.props.day.meals){
            return(
                this.props.day.meals.map((meal)=> {
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
                    <div className="day_title" onClick={this.handleClick}>    
                        {this.props.day.date}
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