import React, {Component} from 'react'
import {withRouter, Link} from 'react-router-dom';
import "../components.css"


class SearchResults extends Component{

    render(){
        return (
            this.props.results.map(result => {
            return(
                <div className="search_result">
                    <Link to={`/recipe/${result.slug}`}>
                        <p>
                            {result.name}
                        </p>
                    </Link>
                </div>
            )
        })
        ) 
      }
    }

export default withRouter(SearchResults);