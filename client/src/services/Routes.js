import React, {Component} from 'react';
import {Route} from 'react-router-dom'
import {PrivateRoute} from './Routes/PrivateRoutes.js'
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
                <PrivateRoute exact path="/browse" component={Browse} authed={this.props.user}/>
                <PrivateRoute exact path="/mycart" component={Cart} authed={this.props.user}/>
                <PrivateRoute exact path="/profile" component={Profile} authed={this.props.user}/>
            </React.Fragment>
        )
    }
}

 export default withRouter(Routes);