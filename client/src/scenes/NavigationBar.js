import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import {withRouter} from 'react-router-dom';

import './scenes.css';

const link = {
    textDecoration: 'none',
    color: 'grey',
} 

class NavigationBar extends Component {


   render() {
    return (
        <div className='bars'>
            <div className="navbar">

                <NavLink className="navbar-link aligned-right"
                to="/"
                exact
                style={link}
                >Home</NavLink>

                <NavLink className="navbar-link aligned-left"
                to="/signup"
                exact
                style={link}
                >Sign up</NavLink>
                
                <NavLink className="navbar-link aligned-left"
                to="/login"
                exact
                style={link}
                >Log in</NavLink>

            </div>
          </div>
    );
  }
}

export default withRouter(NavigationBar);