import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import GroceriesList from '../components/GroceriesList.js'
import { connect } from 'react-redux'
import {fetchGroceriesList} from '../services/actions/groceriesList.js'
import {fetchUserIngredients} from '../services/actions/userIngredients.js'

class Cart extends Component {

    componentDidMount(){
            this.props.fetchGroceriesList(this.props.user, this.props.mealplan_id)
            this.props.fetchUserIngredients(this.props.user)
    }
    

    componentDidUpdate(prevProps){
        if(prevProps != this.props){
            this.props.fetchGroceriesList(this.props.user, this.props.mealplan_id)
            this.props.fetchUserIngredients(this.props.user)
        }
    }


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
        mealplan_id: state.mealplan.id,
        mealplan: state.mealplan.id
    }
}

const mapDispatchToProps = dispatch => {
    return {
        // fetchUserMealPlans: (user) => dispatch(fetchUserMealPlans(user)),
        fetchGroceriesList: (user, mealplan_id) => dispatch(fetchGroceriesList(user, mealplan_id)),
        fetchUserIngredients:    (user) => dispatch(fetchUserIngredients(user)),

    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Cart));