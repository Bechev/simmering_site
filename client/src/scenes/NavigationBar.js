import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import {withRouter} from 'react-router-dom';
import { connect } from 'react-redux'
import SearchBar from "../components/SearchBar.js"
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

                        
                        <div className="navbar">
                            <NavLink className="navbar-link"
                            to="/"
                            exact
                            style={link}
                            >Home</NavLink>

                            <NavLink className="navbar-link"
                            to="/meal_plan"
                            exact
                            style={link}
                            >MealPlan</NavLink>
                            
                            <NavLink className="navbar-link"
                            to="/profile"
                            exact
                            style={link}
                            >Profile</NavLink>
    
                            <NavLink className="navbar-link"
                            to="/browse"
                            exact
                            style={link}
                            >Browse</NavLink>
    
                            <NavLink className="navbar-link"
                            to="/mycart"
                            exact
                            style={link}
                            >Groceries List</NavLink>
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