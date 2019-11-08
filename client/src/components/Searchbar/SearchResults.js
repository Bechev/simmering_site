import React, {Component} from 'react'
import {withRouter, Link} from 'react-router-dom';
import "../components.css"


class SearchResults extends Component{

    render(){
        return (
            this.props.results.map(result => {
            return(
                <Link to={`/recipes/${result.id}`}>
                    <p>
                        {result.name}
                    </p>
                </Link>
            )
        })
        ) 
      }
    }

export default withRouter(SearchResults);