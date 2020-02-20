import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import { connect } from 'react-redux'
import {fetchRecipe } from '../services/actions/recipe.js'
import {fetchUserParameters } from '../services/actions/user.js'
import RecipePresentation from '../components/RecipePresentation.js'

class Recipe extends Component {
    
    // constructor(props){
    //     super(props);
    // }

    componentDidMount(){
        if(this.props.user){
            if(this.props.userParameters.isLoaded === false ){
                this.props.fetchUserParameters()
            }
        }
        this.props.fetchRecipe(this.props.match.params.slug)
    }

    componentDidUpdate(prevProps){
        if(this.props.user !== prevProps.user){
            if(this.props.userParameters.isLoaded === false ){
                this.props.fetchUserParameters()
            }
        }
    }
    
    
    render() {

        return(
            <div className="recipe">
                <RecipePresentation/>
            </div>
        )
    }

}

const mapStateToProps = (state, ownProps) => {
    return {
      user: state.auth.user,
      userParameters: state.userParameters,
      recipe: state.recipe.recipe
    }
  }

const mapDispatchToProps = dispatch => {
    return {
        fetchRecipe: (user, recipe_slug) => dispatch(fetchRecipe(user, recipe_slug)),
        fetchUserParameters: () => dispatch(fetchUserParameters()),
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Recipe));