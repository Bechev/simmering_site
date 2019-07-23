import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import '../components.css';

class PostContent extends Component {
    constructor(props){
        super(props);
        this.state = {
            post_content: 'String of 255 characters and bigger than that. I dont know what to put in here to get the message long enough. I could just copy paste what I already typed but its not so fun or a lorem ipsum. I actually found some stuff to write and dont want to stop anymore now...',
            isComment: this.props.isComment,
        }
        this.renderContent = this.renderContent.bind(this);
    }

    renderContent(){
        if(this.state.isComment===false){
            return(
                <div className="post_content">
                    {this.state.post_content}
                </div>
            )
        }else if (this.state.isComment ===true){
            return(
                <div className="post_content comment">
                    {this.state.post_content}
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