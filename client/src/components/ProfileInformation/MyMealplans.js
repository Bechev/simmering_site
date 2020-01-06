import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import { connect } from 'react-redux'
import {fetchPreviousMealplanInfo} from '../../services/actions/mealplans.js'
import '../components.css'
import MealplanSummary from './MyMealplans/MealplanSummary.js';


class MyMealplans extends Component {

    constructor(props){
        super(props);
        this.state={
            loadedMealplans: [],
            sortedMealplans: [],
        }
    }

    componentDidMount(){
        this.sort_mealplans_array()
    }

    componentDidUpdate(prevProps){
        if(prevProps !== this.props){
            this.sort_mealplans_array()
        }
    }
    
    sort_mealplans_array(){
        let sortedMealplans=this.sortById(this.props.previousMealplans)
        this.setState({
            sortedMealplans: sortedMealplans
        })
    }

    sortById(arr){
        return arr.sort((a, b) => (a.id > b.id) ? -1 : 1)
    }

    renderPreviousMealplans(){
        if(this.props.previousMealplansLoaded){
            return(
                this.state.sortedMealplans.map(mealplan =>{
                    return(
                        <div className="previousMealplan">
                            <MealplanSummary mealplan={mealplan} handleClick={()=>this.handleClick(mealplan.id)}/>
                        </div>
                    )
                })
            )
        }else{
            return(
                <div>Loading</div>
            )
        }
    }
    

    render() {

        return(
            <div className="my_mealplan">
                {this.renderPreviousMealplans()}
            </div>
        )
    }

}


const mapStateToProps = (state, ownProps) => {
    return {
      user: state.auth.user,
      previousMealplans: state.mealplans.userMealplans,
      previousMealplansLoaded: state.mealplans.isLoaded,
      
    }
  }

const mapDispatchToProps = dispatch => {
    return {
        fetchPreviousMealplanInfo: (user, mealplan_id) => dispatch(fetchPreviousMealplanInfo(user, mealplan_id)),
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MyMealplans));