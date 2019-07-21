import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import Comment from '../../../assets/control_panel_buttons/Comment_button_30x30.png'
import '../../components.css';

class CommentButton extends Component {
    constructor(props){
        super(props);
        this.state = {
            number_of_comments: 8,
        }
    }

    render() {

        return(
            <div className="comment_button control_panel_button" onClick={this.handleClick}>
                <img src={Comment} 
                alt='comment_button'>
                </img>
                <div>{this.state.number_of_comments}</div>
                
            </div>
        )
    }

}
  
export default withRouter(CommentButton);