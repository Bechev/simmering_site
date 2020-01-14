import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux'
import { sign_in, sign_up } from '../services/actions/auth.js'
import './components.css';

class LoginSignupForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email_value: '',
            password_value: '',
            password_confirmation_value: '',
            user_state: 'Where do you live?',
            valid_email: false,
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleStateChange = this.handleStateChange.bind(this);
    }

    validate(email) {
        const expression = /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
        return expression.test(String(email).toLowerCase())
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value,
        });
        if (this.validate(event.target.value)) {
            this.setState({
                valid_email: true
            })
        }
    }

    handleSubmit(e) {
        e.preventDefault()
        if (this.state.valid_email) {
            if (this.props.submission === 'login') {
                this.props.sign_in(this.state.email_value, this.state.password_value, this.props.history)
            } else if (this.props.submission === 'signup') {
                this.props.sign_up(this.state.user_state, this.state.email_value, this.state.password_value, this.state.password_confirmation_value, this.props.history)
            }
        } else {
            alert('email not valid')
        }
    }

    handleStateChange(event) {
        this.setState({
            user_state: event.target.value,
        });
    }

    renderWelcomeSentence() {
        if (this.props.submission === 'login') {
            return (
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
        } else if (this.props.submission === 'signup') {
            return (
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

    renderStateOptions(){
        const statesList = ['Where do you live?', 'AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY']
        return(
            statesList.map((state)=>{
                return(
                    <option value={state}>{state}</option>
                )
            })
        )
    }

    renderSignupDetails() {

        if (this.props.submission === 'signup') {
            return (
                <React.Fragment>
                    <label className='password_confirmation_input_field'>
                        <input className='input_field password_confirmation_input_field' type="text" name="password_confirmation_value" value={this.state.password_confirmation_value} onChange={this.handleChange} placeholder="Confirm your password" />
                    </label><br></br>
                    <select style={{color:this.state.user_state === "Where do you live?" ? 'grey' : 'black' }} className='input_field' onChange={this.handleStateChange}>
                        {this.renderStateOptions()}
                    </select>
                    <div style={{textAlign: 'left'}}>
                        As we suggest recipes with local food, we need to know that to best serve you!
                    </div>
                    <br></br><br></br>
                </React.Fragment>
            )
        }
    }

    render() {
        return (
            <div className="login_signup_form">
                {this.renderWelcomeSentence()}
                <form onSubmit={this.handleSubmit}>
                    <label className='email_input_field'>
                        <input className='input_field email_input_field' type="text" name="email_value" value={this.state.email_value} onChange={this.handleChange} placeholder="Email" />
                    </label><br></br>
                    <label className='password_input_field'>
                        <input className='input_field password_input_field' type="text" name="password_value" value={this.state.password_value} onChange={this.handleChange} placeholder="Password" />
                    </label><br></br>
                    {this.renderSignupDetails()}
                    <input className='button' type="submit" value="Submit" onSubmit={this.handleSubmit} />
                </form>
            </div>
        )
    }

}

const mapDispatchToProps = dispatch => {
    return {
        sign_in: (email, password, history) => dispatch(sign_in(email, password, history)),
        sign_up: (state, email, password, password_confirmation, history) => dispatch(sign_up(state, email, password, password_confirmation, history)),
    }
}

export default withRouter(connect(null, mapDispatchToProps)(LoginSignupForm));