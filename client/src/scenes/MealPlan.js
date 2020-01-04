import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import { connect } from 'react-redux'
import {fetchUserLastMealPlan } from '../services/actions/mealplan.js'
import Plan from '../components/Plan.js'

class MealPlan extends Component {

    componentDidMount(){
        // this.props.fetchUserMealPlans(this.props.user)
        this.props.fetchUserLastMealPlan(this.props.user)
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
      mealplans: state.mealplans.userMealplans
    }
  }

const mapDispatchToProps = dispatch => {
    return {
        // fetchUserMealPlans: (user) => dispatch(fetchUserMealPlans(user)),
        fetchUserLastMealPlan: (user) => dispatch(fetchUserLastMealPlan(user)),
        
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MealPlan));