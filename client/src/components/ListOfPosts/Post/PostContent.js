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
        this.renderContent = this.renderContent.bind(this);
    }

    renderContent(){
        if(this.state.isComment===false){
            return(
                <div className="post_content">
                    {this.state.postContent}
                </div>
            )
        }else if (this.state.isComment ===true){
            return(
                <div className="post_content comment">
                    {this.state.postContent}
                </div>
            )
        }
    }
    
    render() {
        
        return(
            <React.Fragment>
                {this.renderContent()}
            </React.Fragment>
            )
        }

}
  
export default withRouter(PostContent);