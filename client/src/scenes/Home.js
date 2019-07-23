import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';

import Wall from './Home/Wall.js'

class Home extends Component {

  render() {

    return(
        <div className="home">
            <Wall/>
        </div>
        )
    }

}
  
export default withRouter(Home);