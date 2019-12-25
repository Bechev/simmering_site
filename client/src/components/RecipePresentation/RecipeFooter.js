import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import '../components.css'


class RecipeInstructions extends Component {

    
    render() {
        if(this.props.instructions){
            return(
                <div className="recipe_instructions" >
                    {this.props.instructions}
                </div>
            )
        }else{
            return(
                <h2>Loading</h2>
            )
        }
    }

}
  
export default withRouter(RecipeInstructions);