import React, { Component } from 'react';
import ProfileInformation from '../components/ProfileInformation';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux'

class Profile extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            display: 'User Settings'
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(clickValue){
        this.setState({
            display: clickValue
        })
        switch(clickValue){
            case 'User Settings':
                this.props.fetchUserSettings(this.props.user)
                break;
            case 'Diet and Allergies':
                this.props.fetchUserDietAndAllergies(this.props.user)
                break;
            case 'Previous Mealplans':
                this.props.fetchUserPreviousMealplans(this.props.user)
                break;
            default:
                break;
        }
    }

    renderProfileControlPanel(){
        return(
            <React.Fragment>
                <button onClick={() => this.handleClick('User Settings')}>User Settings</button>
                <button onClick={() => this.handleClick('Diet and Allergies')}>Diet and Allergies</button>
                <button onClick={() => this.handleClick('Previous Mealplans')}>Previous Mealplans</button>
            </React.Fragment>
        )
    }

    
    render() {

        return(
            <div className="profile">
                <div className="profile_header">Profile</div>
                {this.renderProfileControlPanel()}
                <ProfileInformation informations={this.state.display}/>
            </div>
        )
    }

}

const mapStateToProps = (state, ownProps) => {
    return {
      user: state.auth.user
    }
  }

  export default withRouter(connect(mapStateToProps, null)(Profile));