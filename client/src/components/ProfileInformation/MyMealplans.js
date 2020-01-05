import React, { Component } from 'react';
import {withRouter, Link} from 'react-router-dom';
import { connect } from 'react-redux'
import {fetchPreviousMealplanInfo} from '../../services/actions/mealplans.js'
import '../components.css'
import DaySummary from './MyMealplans/DaySummary.js';


class MyMealplans extends Component {

    // constructor(props){
    //     super(props);
    //     this.state={
    //         days: this.props.
    //     }
    // }
    
    handleClick(mealplan_id){
        this.props.fetchPreviousMealplanInfo(this.props.user, mealplan_id)
    }

    renderMealPlanInfo(mealplan){
        if(mealplan.mealplanLoaded){
            return(
                mealplan.days.map((day) => {
                    return(
                        <div className="mealplan_summary_day">
                            {day.name}
                            <DaySummary day={day}/>
                        </div>
                        )
                    })
            )
        }
    }

    renderPreviousMealplans(){
        if(this.props.previousMealplansLoaded){
            return(
                this.props.previousMealplans.reverse().map(mealplan =>{
                    return(
                        <div className="previousMealplan" onClick={()=>this.handleClick(mealplan.id)}>
                            {mealplan.name}
                            {this.renderMealPlanInfo(mealplan)}
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