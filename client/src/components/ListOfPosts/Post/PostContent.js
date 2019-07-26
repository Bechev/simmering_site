import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import '../../components.css';

class PostContent extends Component {
    constructor(props){
        super(props);
        this.state = {
            postContent: this.props.postContent,
            isComment: this.props.isComment,
        }
    }

    render() {
        
        return(
            <div className={this.state.isComment ? "post_content comment":"post_content"}>
                    {this.state.postContent}
            </div>
            )
        }

}
  
export default withRouter(PostContent);