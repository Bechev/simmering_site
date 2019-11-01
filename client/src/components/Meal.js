import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import './components.css'


class Meal extends Component {

    constructor(props){
        super(props);
        this.state = {
            meal_name: this.props.name,
            displayRecipes: false,
        }
        this.handleClick = this.handleClick.bind(this);
    }
    
    
    handleClick(){
        this.setState({
            displayRecipes: !this.state.displayRecipes
        })
    }

    renderRecipes(){
        if(this.state.displayRecipes){
            return(
                <div>
                    Here come your recipees
                </div>
            )
        }
    }

    render() {

        return(
            <div className="meal" >
                <div className="meal_title" onClick={this.handleClick}>    
                    {this.state.meal_name}
                </div>
                {this.renderRecipes()}
            </div>
        )
    }

}
  
export default withRouter(Meal);