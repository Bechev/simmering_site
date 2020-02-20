import React, {Component} from 'react'
import {withRouter, Link, Redirect} from 'react-router-dom';
import { connect } from 'react-redux'
import {fetchRecipe } from '../../services/actions/recipe.js'
import "../components.css"


class SearchResults extends Component{

    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(slug){
        this.props.fetchRecipe(slug)
        // await this.props.history.push("/recipe/" + this.props.recipe.slug)
    }

    render(){
        return (
            this.props.results.map(result => {
            return(
                <div className="search_result" onClick={() => this.handleClick(result.slug)}>
                    <Link to={`/recipe/${result.slug}`}>
                        <p>
                            {result.name}
                        </p>
                    </Link>
                    {this.props.children}
                </div>
            )
        })
        ) 
      }
    }

    const mapDispatchToProps = dispatch => {
        return {
            fetchRecipe: (recipe_slug) => dispatch(fetchRecipe(recipe_slug)),
        }
    }
    
export default withRouter(connect(null, mapDispatchToProps)(SearchResults));