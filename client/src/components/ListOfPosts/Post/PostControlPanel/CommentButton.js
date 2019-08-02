import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import { connect } from 'react-redux'
import {displayPostComments, hidePostComments } from '../../../../services/actions/comments.js'

import Comment from '../../../../assets/control_panel_buttons/Comment_button_30x30.png'
import '../../../components.css';

class CommentButton extends Component {
    constructor(props){
        super(props);
        this.state = {
            postId: this.props.post.id,
            numberOfComments: this.props.post.comments.length
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(){
        if(this.props.idsOfPostsFromWhichDisplaComments.includes(this.props.post.id)){
            this.props.hidePostComments(this.state.postId)
        }else{
            this.props.displayPostComments(this.state.postId)
        }
    }

    render() {

        return(
            <div className="comment_button control_panel_button" onClick={this.handleClick}>
                <img src={Comment} 
                alt='comment_button'>
                </img>
                <div className="post_social_counter">{this.state.numberOfComments}</div>       
            </div>
        )
    }

}
  

const mapStateToProps = (state) => {
    return {
        idsOfPostsFromWhichDisplaComments: state.comments.idsOfPostsFromWhichDisplaComments,
    }
}
   
const mapDispatchToProps = dispatch => {
    return {
        displayPostComments: (postId, history) => dispatch(displayPostComments(postId, history)),
        hidePostComments: (postId, history) => dispatch(hidePostComments(postId, history)),
    }
}
  
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CommentButton));
// export default withRouter(CommentButton)