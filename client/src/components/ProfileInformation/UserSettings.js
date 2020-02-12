import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import { connect } from 'react-redux'
import {updateUserParameters } from '../../services/actions/user.js'
import '../components.css'


class UserSettings extends Component {

    constructor(props){
        super(props);
        this.state={
            week_starting_day: this.props.userSettings.week_starting_day,
            default_number_of_guests: this.props.userSettings.default_number_of_guests
    }
        this.handleWeekStartingDayChange = this.handleWeekStartingDayChange.bind(this)
        this.handleNumberOfGuestChange = this.handleNumberOfGuestChange.bind(this)
        // this.handleClick = this.handleClick.bind(this)
    }

    handleWeekStartingDayChange(event){
        this.setState({
            week_starting_day: event.target.value
        })
        let params = this.generateParams(event.target.value, "week_starting_day")
        this.props.updateUserParameters( this.props.userParameters.id, params)
    }

    handleNumberOfGuestChange(event){
        this.setState({
            default_number_of_guests: event.target.value
        })
        let params = this.generateParams(event.target.value, "number_of_guests")
        this.props.updateUserParameters( this.props.userParameters.id, params)
    }

    generateParams(value, update){
        if (update === "week_starting_day"){
            return {week_starting_day: value}
        }else if(update === "number_of_guests"){
            return {default_number_of_guests: value}
        }
    }

    // handleClick(){
        
        
    // }

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

    renderNumberOfGuestsDropdown(){
        let number_of_guests = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
        return(
            number_of_guests.map((number_of_guests_option)=>{
            return(
                <option value={number_of_guests_option}>{number_of_guests_option}</option>
                )
            }) 

        )
    }


    render() {

        return(
            <div className="user_settings">
                <div className="user_settings_form">
                    <div className="week_starting_day user_settings_form_input">
                        <div>Mealplan first day: </div>
                        <select className="input_field user_settings_inputs" onChange={this.handleWeekStartingDayChange} value={this.state.week_starting_day}>
                            {this.renderDayNameDropdown()}
                        </select>
                    </div>
                    <div className="default_number_of_guests user_settings_form_input">
                        <div>Default number of guests: </div>
                        <select className="input_field user_settings_inputs" onChange={this.handleNumberOfGuestChange} value={this.state.default_number_of_guests}>
                            {this.renderNumberOfGuestsDropdown()}
                        </select>
                    </div>
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
        updateUserParameters: (params_id, params) => dispatch(updateUserParameters(params_id, params)),
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserSettings));