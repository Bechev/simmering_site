import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
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
                        {/* <RecipeCard isMealPlan={false}/>
                        <RecipeCard isMealPlan={false}/> */}
                        <Carousel recipes={[{id: 1, name: "test", calories: 1, total_recipe_time: 1}, {id: 2, name: "test2", calories: 2, total_recipe_time: 2}]}/>
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
  
export default withRouter(Suggestions);