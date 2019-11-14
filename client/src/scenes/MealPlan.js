import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import { connect } from 'react-redux'
import {fetchUserMealPlans } from '../services/actions/mealplans.js'
import Plan from '../components/Plan.js'

class MealPlan extends Component {
    componentDidMount(){
        this.props.fetchUserMealPlans(this.props.user)
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
      user: state.auth.user
    }
  }

const mapDispatchToProps = dispatch => {
    return {
        fetchUserMealPlans: (user) => dispatch(fetchUserMealPlans(user)),
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MealPlan));