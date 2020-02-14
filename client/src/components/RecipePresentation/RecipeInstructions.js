import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import '../components.css'


class RecipeInstructions extends Component {

    renderTextWithBreaks(){
        // console.log(this.props.instructions)
        return(
            this.props.instructions.split('.').map((i,key) => {
                if(i!==""){
                    return (
                        <React.Fragment>
                            <li key={key}>{i}</li>
                            <br></br>
                        </React.Fragment>
                    )
                }else{return null}
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