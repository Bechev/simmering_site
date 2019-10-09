import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import {withRouter} from 'react-router-dom';
import { connect } from 'react-redux'

import './scenes.css';

const link = {
    textDecoration: 'none',
    color: 'rgb(85, 105, 47)',
} 

class NavigationBar extends Component {

    // constructor(props){
    //     super(props);
    // }

    renderNavBar(){
            if(this.props.user){
                return(
                    <React.Fragment>
                        <div className="left-navbar">
                            <NavLink className="navbar-link"
                            to="/"
                            exact
                            style={link}
                            >Home</NavLink>
                        </div>
    
                        <div className="right-navbar">
                            <NavLink className="navbar-link"
                            to="/browse"
                            exact
                            style={link}
                            >Browse</NavLink>
    
                            <NavLink className="navbar-link"
                            to="/mycart"
                            exact
                            style={link}
                            >My Cart</NavLink>
    
                            <NavLink className="navbar-link"
                            to="/profile"
                            exact
                            style={link}
                            >Profile</NavLink>
                        </div>
                    </React.Fragment>
                )
            }else if(!this.props.user){
                return(
                    <React.Fragment>
                        <div className="left-navbar">
                            <NavLink className="navbar-link aligned-right"
                            to="/signup"
                            exact
                            style={link}
                            >Sign up</NavLink>
                            
                            <NavLink className="navbar-link aligned-right"
                            to="/login"
                            exact
                            style={link}
                            >Log in</NavLink>
                        </div>
                    </React.Fragment>
                )
            }
        // }
    }
    render() {
        return (
            <div className='navbar'>
                {this.renderNavBar()}
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        user: state.auth.user,
    }
  }
   
export default withRouter(connect(mapStateToProps, null)(NavigationBar));