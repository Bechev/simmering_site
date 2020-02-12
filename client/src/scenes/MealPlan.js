import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import { connect } from 'react-redux'
import {fetchUserLastMealPlan } from '../services/actions/mealplan.js'
import {fetchUserParameters } from '../services/actions/user.js'
import Plan from '../components/Plan.js'

class MealPlan extends Component {

    componentDidMount(){
        this.props.fetchUserLastMealPlan()
        if(this.props.userParameters.isLoaded ===  false){
            this.props.fetchUserParameters()
        }        
    }

    render() {
        return(
            <div className="meal_plan">
                <Plan/>
            </div>
        )
    }

}

const mapStateToProps = (state, ownProps) => {
    return {
      user: state.auth.user,
      mealplans: state.mealplans.userMealplans,
      userParameters: state.userParameters,
    }
  }

const mapDispatchToProps = dispatch => {
    return {
        fetchUserLastMealPlan: () => dispatch(fetchUserLastMealPlan()),
        fetchUserParameters: () => dispatch(fetchUserParameters()),
        
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MealPlan));