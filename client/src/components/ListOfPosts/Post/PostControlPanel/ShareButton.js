import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import { connect } from 'react-redux'
import {share_post, submit_new_post} from '../../../../services/actions/post.js'

import Share from '../../../../assets/control_panel_buttons/Share_button_30x30.png'
import '../../../components.css';

class ShareButton extends Component {
    constructor(props){
        super(props);
        this.state = {
            isLoaded: this.props.isLoaded,
            numberOfReshares: this.props.post.reshare,
            errorMessage: this.props.errorMessage,
        }
        this.handleClick = this.handleClick.bind(this)
        console.log(this.props.post.reshare)
    }

    handleClick(){
        this.setState({
            numberOfReshares: this.state.numberOfReshares + 1
        })
        this.props.share_post(this.props.post.id, this.state.numberOfReshares + 1)
        this.props.submit_new_post(this.props.post.message)
    }

    render() {
        if(this.props.errorMessage){
            alert(this.props.errorMessage + "Could not share post")
        }
        return(
            <div className="share_button control_panel_button" onClick={this.handleClick}>
                <img src={Share} 
                alt='share_button'>
                </img>
                <div className="post_social_counter">{this.state.numberOfReshares}</div>
            </div>

        )
    }

}
  

const mapStateToProps = (state, ownProps) => {
    return {
    //   number_of_likes: state.post.reshare,
      isLoaded: state.isLoaded,
      errorMessage: state.errorMessage,
    }
  }
   
  const mapDispatchToProps = dispatch => {
    return {
      share_post: (postId, history) => dispatch(share_post(postId, history)),
      submit_new_post: (post_message, history) => dispatch(submit_new_post(post_message, history))
    }
  }
  
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ShareButton));