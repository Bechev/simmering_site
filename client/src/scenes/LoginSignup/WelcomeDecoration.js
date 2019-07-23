import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import WhiteLogo from '../../assets/half logo simmering_green3.png'
import '../scenes.css';

class WelcomeDecoration extends Component {

  render() {

    return(
        <div className="welcome_decoration">
            <img src={WhiteLogo} 
                alt='logo_simmering_green'  >
            </img>
        </div>
        )
    }

}
  
export default withRouter(WelcomeDecoration);