import React, {Component} from 'react';
import {Route} from 'react-router-dom'
import {withRouter} from 'react-router-dom';

import Home from '../scenes/Home.js'
import Signup from '../scenes/Signup.js'
import Login from '../scenes/Login.js'

class Routes extends Component {

    render(){
        return(
            <React.Fragment>
                <Route exact path="/" component={Home} />
                <Route exact path="/signup" component={Signup} />
                <Route exact path="/login" component={Login} />
            </React.Fragment>
        )
    }
}

 export default withRouter(Routes);