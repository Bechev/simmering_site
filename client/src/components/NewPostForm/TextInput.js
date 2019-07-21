import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import '../components.css';

class TextInput extends Component {

    constructor(props){
        super(props);
        this.state = {
            post_value:  '',
            character_remaining: 255,
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        if(event.target.value.length <= 255){
            this.setState({
                [event.target.name]: event.target.value,
                character_remaining: 255 - event.target.value.length,
            });
        }else{
            alert("You're too chatty bro")
        }
    }

    render() {
        return(
            <div className="post_input">
                <form onSubmit={this.handleSubmit}>
                    <label className='post_input_field'>
                        <textarea className='post_input_field' type="text" name="post_value" value={this.state.post_value} onChange={this.handleChange} placeholder="Share you meal plans here"/>
                    </label><br></br>
                    <input className='post_input_field_button' type="submit" value="Share" />
                    <label className='char_counter'>Char remaining: {this.state.character_remaining}</label>
                </form>
            </div>
            )
        }

}
  
export default withRouter(TextInput);