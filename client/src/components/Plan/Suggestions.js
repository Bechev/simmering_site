import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux'
import '../components.css'
import '../Carousel.js'
// import RecipeCard from '../RecipeCard';
import DownArrow from '../../assets/downarrow-icon.png'
import UpArrow from '../../assets/uparrow-icon.png'
import Carousel from '../Carousel.js';


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
                <div className="suggestion_title collapsed" onClick={this.handleClick}>
                    Suggestions:
                    <img  src={UpArrow} className="uparrow arrow icon" alt='uparrow_button'></img>
                </div>
            )
        }else{
            return(
                <div className="expanded">
                    <div className="suggestion_title" onClick={this.handleClick}>
                        Suggestions:
                        <img  src={DownArrow} className="downarrow arrow icon" alt='downarrow_button'></img>
                    </div>
                    <div className="recipe_suggestions">
                        <Carousel recipes={this.props.suggestions}/>
                    </div>
                </div>
            )
        }
    }


  render() {

    return(
        <div className="suggestions" >
            {this.renderSuggestions()}
        </div>
        )
    }

}
  
const mapStateToProps = (state, ownProps) => {
    return {
      user: state.auth.user,
      suggestions: state.suggestions.recipes
    }
  }

export default withRouter(connect(mapStateToProps, null)(Suggestions));