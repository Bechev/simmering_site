import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';

class Home extends Component {

  render() {

    return(
        <div className="home">
            <h1>Home</h1>
        </div>
        )
    }

}
  
export default withRouter(Home);