import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux'
// import {fetchMealPlan} from '../services/actions/mealplan.js'

import './components.css'


class AddToMealPlan extends Component {

  render() {

    return(
        <div className="add_to_mealplan_blackground">
            <div className="add_to_mealplan_window">
                <div className="addRecipeToMealPlanDashboard">
                    <div className="alt_button add_to_mealplan_button add_button" onClick={this.props.displayQuickAddToMealPlan}>
                        Add
                    </div>
                    <div className="alt_button add_to_mealplan_button" onClick={this.props.displayQuickAddToMealPlan}>
                        Cancel
                    </div>
                </div>
            </div>
        </div>
        )
    }

}
  
const mapStateToProps = (state, ownProps) => {
    return {
      user: state.auth.user,
    }
  }

const mapDispatchToProps = dispatch => {
    return {
        // fetchMealPlan: (user, mealplan_id) => dispatch(fetchMealPlan(user, mealplan_id)),
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AddToMealPlan));