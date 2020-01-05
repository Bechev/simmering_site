import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux'
import DietAndAllergies from './ProfileInformation/DietAndAllergies.js'
import UserSettings from './ProfileInformation/UserSettings.js'
import MyMealplans from './ProfileInformation/MyMealplans.js'
import './components.css'


class ProfileInformation extends Component {

    // constructor(props){
    //     super(props);

    // }

    renderInformations() {
        if (this.props.userParameters.isLoaded) {
            if (this.props.informations === 'Diet and Allergies') {
                return (
                    <DietAndAllergies />
                )
            } else if (this.props.informations === 'User Settings') {
                return (
                    <UserSettings />
                )
            } else if (this.props.informations === 'My Mealplans') {
                return (
                    <MyMealplans />
                )
            }
        } else {
            return (
                <div>Loading</div>
            )
        }
    }

    render() {

        return (
            <div className="profile_information" >
                <div className="profile_information_header">
                    {this.props.informations}
                </div>
                
                {this.renderInformations()}
            </div>
        )
    }

}


const mapStateToProps = (state, ownProps) => {
    return {
        user: state.auth.user,
        mealplans: state.mealplans.userMealplans,
        userParameters: state.userParameters,
        userSettings: state.userParameters.userSettings,
        dietAndAllergies: state.userParameters.dietAndAllergies
    }
}


export default withRouter(connect(mapStateToProps, null)(ProfileInformation));