import React, { Component } from 'react';
import ProfileInformation from '../components/ProfileInformation';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux'
import {fetchUserMealPlans } from '../services/actions/mealplans.js'
import {fetchUserParameters } from '../services/actions/user.js'
import { sign_out } from '../services/actions/auth.js'


class Profile extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            display: 'User Settings',
        }
        this.handleClick = this.handleClick.bind(this)
        this.handleSignOut = this.handleSignOut.bind(this)
    }

    componentDidMount(){
        if(this.props.userParameters.isLoaded === false ){
            this.props.fetchUserParameters(this.props.user)
        }
        this.props.fetchUserMealPlans(this.props.user)
    }

    handleClick(clickValue){
        this.setState({
            display: clickValue
        })
    }

    handleSignOut(){
        this.props.sign_out(this.props.user)
        window.location.reload()
    }

    renderProfileControlPanel(){
        return(
            <div className="profile_dashboard">
                <button className="profile_button" onClick={() => this.handleClick('User Settings')}>User Settings</button>
                <button className="profile_button" onClick={() => this.handleClick('Diet and Allergies')}>Diet and Allergies</button>
                <button className="profile_button" onClick={() => this.handleClick('My Mealplans')}>Previous Mealplans</button>
            </div>
        )
    }

    
    render() {

        return(
            <div className="profile">
                <div className="profile_header">
                    <div className="profile_title">
                        Profile
                    </div>
                    <button className="button sign_out_button" onClick={this.handleSignOut}>
                        Sign Out
                    </button>
                </div>
                <div className="profile_content">
                    {this.renderProfileControlPanel()}
                    <div className="profile_content_information">
                        <ProfileInformation informations={this.state.display}/>
                    </div>
                </div>
            </div>
        )
    }

}

const mapStateToProps = (state, ownProps) => {
    return {
      user: state.auth.user,
      userParameters: state.userParameters,
    }
  }

const mapDispatchToProps = dispatch => {
    return {
        sign_out: (user) => dispatch(sign_out(user)),
        fetchUserMealPlans: (user) => dispatch(fetchUserMealPlans(user)),
        fetchUserParameters: (user) => dispatch(fetchUserParameters(user)),
    }
}


  export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Profile));