import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import Like from '../../../../assets/control_panel_buttons/Like_button_30x30.png'
import '../../../components.css';

class LikeButton extends Component {
    constructor(props){
        super(props);
        this.state = {
            numberOfLikes: this.props.numberOfLikes,
        }
    }

    render() {

        return(
            <div className="like_button control_panel_button" onClick={this.handleClick}>
                <img src={Like} 
                alt='like_button'>
                </img>
                <div className="post_social_counter">{this.state.numberOfLikes}</div>
                
            </div>
        )
    }

}
  
export default withRouter(LikeButton);