import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux'
import {fetchUserLastMealPlan} from '../services/actions/mealplan.js'
import Day from './Plan/Day.js'
import Suggestions from './Plan/Suggestions.js'
import './components.css'
import CreateNewMealPlan from './Plan/CreateNewMealPlan.js';


class Plan extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            mealplan: {},
            displayQuickAddToMealPlan: false
        }
        this.displayQuickAddToMealPlan = this.displayQuickAddToMealPlan.bind(this)
    }


    componentDidUpdate(prevProps){
        if (this.props.mealplanLoaded && prevProps.mealplan !== this.props.mealplan) {

            // this.props.fetchMealPlan(this.props.user, this.props.mealplans[this.props.mealplans.length-1].id)
        }
        if(this.props !== prevProps){
            this.sort_days_array()
        }
    }

    define_days_order(){
        const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
        const USER_SETTINGS_WEEK_STARTING_DAY = this.props.week_starting_day

        let beginning_of_week = days.slice(days.indexOf(USER_SETTINGS_WEEK_STARTING_DAY))
        let end_of_week = days.slice(0, days.indexOf(USER_SETTINGS_WEEK_STARTING_DAY))
        let user_week = beginning_of_week.concat(end_of_week)
        // console.log(user_week)
        return user_week
    }

    sort_days(arr){
        
        let days = this.define_days_order()
        // console.log("arr" + arr)
        let sorted_array = arr.sort(function(a,b){

            return days.indexOf(a.name)  - days.indexOf(b.name)
        })
        return sorted_array
    }

    sort_days_array(){
        let arr = Object.values(this.props.mealplan.days)
        let sorted_days_array = this.sort_days(arr)
        this.setState({
            sorted_days_array: sorted_days_array,
            displayQuickAddToMealPlan: false
        })
    }

    renderMealPlan(){
        if(this.props.mealplan.days.length > 0 && this.state.sorted_days_array){
            return(
                this.state.sorted_days_array.map((day) => {
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

    
    displayQuickAddToMealPlan(){
        this.setState({
            displayQuickAddToMealPlan: !this.state.displayQuickAddToMealPlan
        })
    }

    renderCreateMealPlan(){
        if(this.state.displayQuickAddToMealPlan){
            return (
                <CreateNewMealPlan displayQuickAddToMealPlan={this.displayQuickAddToMealPlan}/>
            )
        }
    }

  render() {

    return(
        <div className="plan">
            <div className="mealplan_header">
                <div className="mealplan_title title">{this.props.mealplan.name}</div>
                <button className="button" onClick={this.displayQuickAddToMealPlan}>Create new Mealplan</button>
            </div>
            {this.renderMealPlan()}
            <Suggestions/>
            {this.renderCreateMealPlan()}
        </div>
        )
    }

}
  
const mapStateToProps = (state, ownProps) => {
    return {
      user: state.auth.user,
      mealplansLoaded: state.mealplans.isLoaded,
      mealplans: state.mealplans.userMealplans,
      mealplan: state.mealplan,
      week_starting_day: state.userParameters.userSettings.week_starting_day,
    }
  }

const mapDispatchToProps = dispatch => {
    return {
        fetchUserLastMealPlan: (user) => dispatch(fetchUserLastMealPlan(user)),
        // fetchMealPlan: (user, mealplan_id) => dispatch(fetchMealPlan(user, mealplan_id)),
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Plan));