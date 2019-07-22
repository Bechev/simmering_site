import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import Share from '../../../assets/control_panel_buttons/Share_button_30x30.png'
import '../../components.css';

class ShareButton extends Component {
    constructor(props){
        super(props);
        this.state = {
            number_of_reshares: 8,
        }
    }

    render() {

        return(
            <div className="share_button control_panel_button" onClick={this.handleClick}>
                <img src={Share} 
                alt='share_button'>
                </img>
                <div className="post_social_counter">{this.state.number_of_reshares}</div>
                
            </div>
        )
    }

}
  
export default withRouter(ShareButton);