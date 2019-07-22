import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import './components.css';

class LoginSignupForm extends Component {

    constructor(props){
        super(props);
        this.state = {
            email_value:  '',
            password_value: '',
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value,
        });
    }

    handleSubmit(){
        
    }

    renderWelcomeSentence(){
        if(this.props.submission === 'login'){
            return(    
                <div className="welcome_sentence">Welcome back, glad to see you again.</div>
            )
        }else if(this.props.submission === 'signup'){
            return(
                <div className="welcome_sentence">New to Simmering? Welcome, let's start by creating an account.</div>
            )
        }
    }

    render() {
        return(
            <div className="login_signup_form">
                {this.renderWelcomeSentence()}
                <form  onSubmit={this.handleSubmit}>
                    <label className='email_input_field'>
                        <input className='input_field email_input_field' type="text" name="email_value" value={this.state.email_value} onChange={this.handleChange} placeholder="Email"/>
                    </label><br></br>
                    <label className='password_input_field'>
                        <input className='input_field password_input_field' type="text" name="password_value" value={this.state.password_value} onChange={this.handleChange} placeholder="Password"/>
                    </label><br></br>
                    <input className='button' type="submit" value="Submit" onSubmit={this.handleSubmit}/>
                </form>
            </div>
        )
    }

}
  
export default withRouter(LoginSignupForm);