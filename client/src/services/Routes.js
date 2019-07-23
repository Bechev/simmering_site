import React, {Component} from 'react';
import {Route} from 'react-router-dom'
import {withRouter} from 'react-router-dom';

import Home from '../scenes/Home.js'
import Signup from '../scenes/Signup.js'
import Login from '../scenes/Login.js'
import Browse from '../scenes/Browse.js'
import Cart from '../scenes/Cart.js'
import Profile from '../scenes/Profile.js'

class Routes extends Component {

    render(){
        return(
            <React.Fragment>
                <Route exact path="/" component={Home} />
                <Route exact path="/signup" component={Signup} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/browse" component={Browse} />
                <Route exact path="/mycart" component={Cart} />
                <Route exact path="/profile" component={Profile} />
            </React.Fragment>
        )
    }
}

 export default withRouter(Routes);