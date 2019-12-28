import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import GroceriesList from '../components/GroceriesList.js'
import { connect } from 'react-redux'
import {fetchGroceriesList} from '../services/actions/groceriesList.js'
import {fetchUserMealPlans} from '../services/actions/mealplans.js'

class Cart extends Component {

    componentDidMount(){
        // if(!this.props.mealplan_id){
            // console.log("fetch doggo")
            this.props.fetchGroceriesList(this.props.user, this.props.mealplan_id)
        // }
        // this.props.fetchGroceriesList(this.props.user, this.props.mealplan_id)

    }
    
    // componentDidUpdate(prevProps){
    //     if(prevProps !== this.props){ 
    //         if(this.props.mealplan_id){
    //             this.props.fetchGroceriesList(this.props.user, this.props.mealplan_id)
    //         }
    //     }
    // }

  render() {

    return(
        <div className="cart">
            <GroceriesList/>
        </div>
        )
    }

}


const mapStateToProps = (state, ownProps) => {
    return {
        user: state.auth.user,
        mealplan_id: state.mealplan.id
    }
}

const mapDispatchToProps = dispatch => {
    return {
        // fetchUserMealPlans: (user) => dispatch(fetchUserMealPlans(user)),
        fetchGroceriesList: (user, mealplan_id) => dispatch(fetchGroceriesList(user, mealplan_id)),
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Cart));