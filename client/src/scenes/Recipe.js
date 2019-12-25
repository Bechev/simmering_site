import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import { connect } from 'react-redux'
import {fetchRecipe } from '../services/actions/recipe.js'

class Recipe extends Component {
    
    // constructor(props){
    //     super(props);
    // }

    componentDidMount(){
        this.props.fetchRecipe(this.props.user, this.props.match.params.id)
    }
    
    
    render() {

        return(
            <div className="recipe">
                {/* <Recipe/> */}
                Recipe
            </div>
        )
    }

}

const mapStateToProps = (state, ownProps) => {
    return {
      user: state.auth.user,
    }
  }

const mapDispatchToProps = dispatch => {
    return {
        fetchRecipe: (user, recipe_id) => dispatch(fetchRecipe(user, recipe_id)),
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Recipe));