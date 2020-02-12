import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import GroceriesList from '../components/GroceriesList.js'
import { connect } from 'react-redux'
import {fetchGroceriesList} from '../services/actions/groceriesList.js'
import {fetchUserIngredients} from '../services/actions/userIngredients.js'

class Cart extends Component {

    componentDidMount(){
            this.props.fetchGroceriesList()
            this.props.fetchUserIngredients()
    }
    

    componentDidUpdate(prevProps){
        if(prevProps !== this.props){
            this.props.fetchGroceriesList()
            this.props.fetchUserIngredients()
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
        mealplan: state.mealplan.id
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchGroceriesList: () => dispatch(fetchGroceriesList()),
        fetchUserIngredients: () => dispatch(fetchUserIngredients()),
 }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Cart));