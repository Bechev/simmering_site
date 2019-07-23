import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';

import WelcomeDecoration from './LoginSignup/WelcomeDecoration.js'
import LoginSignupForm from '../components/LoginSignupForm.js'

import './scenes.css';

class Login extends Component {

  render() {

    return(
        <div className="login_signup">
            <WelcomeDecoration/>
            <LoginSignupForm submission="login"/>
        </div>
        )
    }

}
  
export default withRouter(Login);