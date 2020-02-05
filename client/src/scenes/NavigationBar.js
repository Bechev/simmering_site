import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import {withRouter} from 'react-router-dom';
import { connect } from 'react-redux'
import SearchBar from "../components/SearchBar.js"
import Home from '../assets/desaisonlogo-icon.png'
import Profile from '../assets/profile-icon.png'
import GroceriesList from '../assets/grocerieslist-icon.png'
import './scenes.css';

const link = {
    textDecoration: 'none',
    color: '#268C4F',
} 

class NavigationBar extends Component {

    // constructor(props){
    //     super(props);
    // }

    renderNavBar(){
            if(this.props.user){
                return(
                    <React.Fragment>
                        <div className='navlinks'>
                            <div className="left-navbar">
                                <NavLink className="navbar-link"
                                to="/"
                                exact
                                style={link}
                                ><img src={Home} className='home-logo scene-icon'></img></NavLink>

                                <NavLink className="navbar-link"
                                to="/meal_plan"
                                exact
                                style={link}
                                >MealPlan</NavLink>
        
                                <NavLink className="navbar-link"
                                to="/browse"
                                exact
                                style={link}
                                >Browse</NavLink>
                            </div>

                            <div className="right-navbar">
                                <NavLink className="navbar-link"
                                to="/mycart"
                                exact
                                style={link}
                                ><img src={GroceriesList} className='groceries scene-icon'></img></NavLink>

                                <NavLink className="navbar-link"
                                to="/profile"
                                exact
                                style={link}
                                ><img src={Profile} className='profile scene-icon'></img></NavLink>
                            </div>
                        </div>
                        

                        <SearchBar/>

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
            <div className='navigation'>
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