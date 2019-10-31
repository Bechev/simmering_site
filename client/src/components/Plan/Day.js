import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import '../components.css'


class Day extends Component {

    constructor(props){
        super(props);
        this.state = {
            displayMeals: false,
        }
        this.handleClick = this.handleClick.bind(this);
    }
    
    
    handleClick(){
        this.setState({
            displayMeals: !this.state.displayMeals
        })
    }

    renderMeals(){
        if(this.state.displayMeals){
            return(
                <div>
                    You and I, we click.
                </div>
            )
        }
    }

    render() {

        return(
            <div className="day" >
                <div className="day_title" onClick={this.handleClick}>    
                    Day
                </div>
                {this.renderMeals()}
            </div>
        )
    }

}
  
export default withRouter(Day);