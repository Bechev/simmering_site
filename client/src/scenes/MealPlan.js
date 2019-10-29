import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import { connect } from 'react-redux'
import {sign_out } from '../services/actions/auth.js'

class MealPlan extends Component {
    
    render() {

        return(
            <div className="meal_plan">
                Meal Plan
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
        sign_out: (user) => dispatch(sign_out(user)),
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MealPlan));