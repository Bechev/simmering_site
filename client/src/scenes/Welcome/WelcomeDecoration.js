import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import '../scenes.css';

class WelcomeDecoration extends Component {

  render() {

    return(
        <div className="welcome_decoration">

        </div>
        )
    }

}
  
export default withRouter(WelcomeDecoration);