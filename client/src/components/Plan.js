import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux'
import {fetchMealPlan} from '../services/actions/mealplan.js'
import Day from './Plan/Day.js'
import Suggestions from './Plan/Suggestions.js'
import './components.css'


class Plan extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            mealplan: {},
        }
    }


    componentDidUpdate(prevProps){
        if (this.props.mealplansLoaded && prevProps.mealplans !== this.props.mealplans) {
            this.props.fetchMealPlan(this.props.user, this.props.mealplans[this.props.mealplans.length-1].id)
        }
        if(this.props !== prevProps){
            this.sort_days_array()
        }
    }

    sort_days(arr){
        let sorted_array = arr.sort(function(a,b){
            let dateA = new Date(a.date)
            let dateB = new Date(b.date)
            return dateA  - dateB
        })
        return sorted_array
    }

    sort_days_array(){
        let arr = Object.values(this.props.mealplan.days)
        let sorted_days_array = this.sort_days(arr)
        this.setState({
            sorted_days_array: sorted_days_array
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

  render() {

    return(
        <div className="plan">
            {this.renderMealPlan()}
            <Suggestions/>

        </div>
        )
    }

}
  
const mapStateToProps = (state, ownProps) => {
    return {
      user: state.auth.user,
      mealplansLoaded: state.mealplans.isLoaded,
      mealplans: state.mealplans.userMealplans,
      mealplan: state.mealplan
    }
  }

const mapDispatchToProps = dispatch => {
    return {
        fetchMealPlan: (user, mealplan_id) => dispatch(fetchMealPlan(user, mealplan_id)),
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Plan));