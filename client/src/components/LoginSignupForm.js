import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import { connect } from 'react-redux'
import {sign_in } from '../services/actions/auth.js'
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

    handleSubmit(e){
        e.preventDefault()
        if(this.props.submission === 'login'){
            this.props.sign_in(this.state.email_value, this.state.password_value, this.props.history)
        }else if (this.props.submission === 'signup'){
            alert("You didn't create the signup functionality buddy...")
        }
    }

    renderWelcomeSentence(){
        if(this.props.submission === 'login'){
            return(    
                <div className="welcome_sentence">
                    <span>
                        Welcome back, glad to see you again.
                    </span>
                    <br></br>
                    <span className="link_to_login_signup">
                        New to Simmering? Click <a href="http://localhost:3006/signup">here</a> to create an account.
                    </span>
                </div>
            )
        }else if(this.props.submission === 'signup'){
            return(
                <div className="welcome_sentence">
                    <span>
                        New to Simmering? Welcome, let's start by creating an account.
                    </span>
                    <br></br>
                    <span className="link_to_login_signup">
                        Already part of the family? Log in <a href="http://localhost:3006/login">here</a>.
                    </span>
                </div>
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
     
const mapDispatchToProps = dispatch => {
    return {
        sign_in: (email, password, history) => dispatch(sign_in(email, password, history)),
    }
}
  
  export default withRouter(connect(null, mapDispatchToProps)(LoginSignupForm));