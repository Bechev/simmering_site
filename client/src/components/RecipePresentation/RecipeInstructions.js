import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import '../components.css'


class RecipeInstructions extends Component {

    renderTextWithBreaks(){
        return(
            this.props.instructions.split('\\n').map((i,key) => {
                // console.log(i)
                return (
                    <React.Fragment>
                        <li key={key}>{i}</li>
                        <br></br>
                    </React.Fragment>
                )
            })
        )
    }
    render() {
        if(this.props.instructions){
            return(
                <ol className="recipe_instructions" >
                    {this.renderTextWithBreaks()}
                </ol>
            )
        }else{
            return(
                <h2>Loading</h2>
            )
        }
    }

}
  
export default withRouter(RecipeInstructions);