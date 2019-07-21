import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import '../components.css';

class PostContent extends Component {
    constructor(props){
        super(props);
        this.state = {
            post_content: 'String of 255 characters and bigger than that. I dont know what to put in here to get the message long enough. I could just copy paste what I already typed but its not so fun or a lorem ipsum. I actually found some stuff to write and dont want to stop anymore now...',
            number_of_likes: '',
            number_of_reshares: '',
        }
    }

    render() {

        return(
            <div className="post_content">
                {this.state.post_content}
            </div>
            )
        }

}
  
export default withRouter(PostContent);