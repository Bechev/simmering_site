import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import { connect } from 'react-redux'
import {fetchPreviousMealplanInfo} from '../../../services/actions/mealplans.js'
import '../../components.css'
import DaySummary from './DaySummary.js';
import DownGreenArrow from '../../../assets/downarrow-green-icon.png'
import UpGreenArrow from '../../../assets/uparrow-green-icon.png'


class MealplanSummary extends Component {

    constructor(props){
        super(props);
        this.state={
            displayMealplanInfos: false,
            loadedMealplans: [],
        }
        this.handleClick = this.handleClick.bind(this)
    }

    renderArrow(){
        if(this.state.displayMealplanInfos === false){
            return(
                <img  src={DownGreenArrow} className="day_arrow icon" alt='downarrow_button'></img>
            )
        }else{
            return(
                <img  src={UpGreenArrow} className="day_arrow icon" alt='uparrow_button'></img>
            )
        }
    }

    handleClick(){
        this.setState({
            displayMealplanInfos: !this.state.displayMealplanInfos
        })
    }

    renderMealPlanInfo(){
        if( this.state.displayMealplanInfos){
            return(
                this.props.mealplan.days.map((day) => {
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
    

    render() {

        return(
            <div className="mealplan_summary" >
                <div className="mealplan_summary_name" onClick={this.handleClick}>
                    {this.renderArrow()}
                    {this.props.mealplan.name}
                </div>
                {this.renderMealPlanInfo()}
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MealplanSummary));