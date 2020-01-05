import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import { connect } from 'react-redux'
import {updateUserParameters } from '../../services/actions/user.js'
import '../components.css'


class UserSettings extends Component {

    constructor(props){
        super(props);
        this.state={
            week_starting_day: this.props.userSettings.week_starting_day
    }
        this.handleChange = this.handleChange.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }

    handleChange(event){
        this.setState({
            week_starting_day: event.target.value
        })
        let params = this.generateParams(event.target.value)
        this.props.updateUserParameters(this.props.user, this.props.userParameters.id, params)
    }

    generateParams(value){
        return {week_starting_day: value}
    }

    handleClick(){
        
        
    }

    renderDayNameDropdown(){
        let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
        return(
            days.map((day)=>{
            return(
                <option value={day}>{day}</option>
                )
            }) 

        )
    }


    render() {

        return(
            <div className="user_settings">
                <div className="user_settings_form">
                    <div>Mealplan first day: </div>
                    <select className="input_field user_settings_inputs" onChange={this.handleChange} value={this.state.week_starting_day}>
                        {this.renderDayNameDropdown()}
                    </select>
                </div>
                <div className="user_settings_submit_panel">
                    {/* <button className='button alt_button' onClick={this.handleClick}>Update</button> */}
                </div>
            </div>
        )
    }

}


const mapStateToProps = (state, ownProps) => {
    return {
      user: state.auth.user,
      userParameters: state.userParameters,
      userSettings: state.userParameters.userSettings,
    }
  }

const mapDispatchToProps = dispatch => {
    return {
        updateUserParameters: (user, params_id, params) => dispatch(updateUserParameters(user, params_id, params)),
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserSettings));