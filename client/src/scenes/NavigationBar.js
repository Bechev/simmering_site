import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import {withRouter} from 'react-router-dom';
import { connect } from 'react-redux'
import {fetchGroceriesList} from '../services/actions/groceriesList.js'
import {fetchUserIngredients} from '../services/actions/userIngredients.js'
import SearchBar from "../components/SearchBar.js"
import Home from '../assets/desaisonlogo-icon.png'
import Profile from '../assets/profile-icon.png'
import GroceriesList from '../assets/grocerieslist-icon.png'
import EmptyGroceriesList from '../assets/grocerieslist-empty-icon.png'
import './scenes.css';

const link = {
    textDecoration: 'none',
    color: '#268C4F',
} 

class NavigationBar extends Component {

    // constructor(props){
    //     super(props);
    // }

    componentDidMount(){
        if(this.props.user){
            this.props.fetchGroceriesList(this.props.user)
            this.props.fetchUserIngredients(this.props.user)
        }
    }

    componentDidUpdate(prevProps){
        if(prevProps.user !== this.props.user || prevProps.groceriesList.ingredients.length !== this.props.groceriesList.ingredients.length ){
            // if(prevProps.groceriesList.ingredients.length !== this.props.groceriesList.ingredients.length){
                this.props.fetchGroceriesList(this.props.user)
                this.props.fetchUserIngredients(this.props.user)
            // }
        }
    }

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
                                ><img src={Home} className='scene-icon' alt=""></img></NavLink>

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

                                <NavLink className="navbar-link"
                                to="/blog"
                                exact
                                style={link}
                                >Blog</NavLink>
                            </div>

                            <div className="right-navbar">
                                <NavLink className="navbar-link"
                                to="/mycart"
                                exact
                                style={link}
                                ><img src={this.props.groceriesList.ingredients.length > 0 ? GroceriesList : EmptyGroceriesList} className='scene-icon' alt=""></img></NavLink>

                                <NavLink className="navbar-link"
                                to="/profile"
                                exact
                                style={link}
                                ><img src={Profile} className='profile-icon' alt=""></img></NavLink>
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
        groceriesList: state.groceriesList,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchGroceriesList: (user) => dispatch(fetchGroceriesList(user)),
        fetchUserIngredients: (user) => dispatch(fetchUserIngredients(user)),

    }
}
   
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavigationBar));