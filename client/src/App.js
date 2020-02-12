import React from 'react';
import {withRouter} from 'react-router-dom';
import { connect } from 'react-redux'
import {verify_credentials } from './services/actions/auth.js'
import Routes from './services/Routes.js'
import NavigationBar from './scenes/NavigationBar.js'
import './App.css';

class App extends React.Component{

    componentDidMount(){
        const user = JSON.parse(localStorage.getItem('user'))
        if(user){
            this.props.verify_credentials()
        }
    }

    render(){
        return (
            <div className="App">
                <div className="App-header">
                <NavigationBar/>
                </div>
                <div className="App-body">
                <Routes user={this.props.user}/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
      user: state.auth.user
    }
  }

const mapDispatchToProps = dispatch => {
    return {
        verify_credentials: () => dispatch(verify_credentials()),
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
