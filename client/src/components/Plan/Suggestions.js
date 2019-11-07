import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import '../components.css'
import RecipeCard from '../RecipeCard';


class Suggestions extends Component {

    constructor(props){
        super(props);
        this.state = {
            expanded: true
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        this.setState({
            expanded: !this.state.expanded
        })
    }

    renderSuggestions(){
        if(this.state.expanded === false){
            return(
                <div className="suggestion_title collapsed">
                    Suggestions:
                </div>
            )
        }else{
            return(
                <div className="expanded">
                    <div className="suggestion_title">
                        Suggestions:
                    </div>
                    <div className="recipe_suggestions">
                        <RecipeCard isMealPlan={false}/>
                        <RecipeCard isMealPlan={false}/>
                    </div>
                </div>
            )
        }
    }


  render() {

    return(
        <div className="suggestions" onClick={this.handleClick}>
            {this.renderSuggestions()}
        </div>
        )
    }

}
  
export default withRouter(Suggestions);