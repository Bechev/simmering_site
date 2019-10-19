import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import { connect } from 'react-redux'
import {sign_out } from '../services/actions/auth.js'

class Profile extends Component {

  render() {

    return(
        <div className="profile">
            Profile
            <button onSubmit={this.props.sign_out(this.props.user)}>Logout</button>
        </div>
        )
    }

}

const mapStateToProps = (state, ownProps) => {
    return {
      user: state.auth.user
    }
  }

const mapDispatchToProps = dispatch => {
    return {
        sign_out: (user) => dispatch(sign_out(user)),
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Profile));