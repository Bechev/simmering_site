import React from 'react';
import {withRouter} from 'react-router-dom';
import { connect } from 'react-redux'
import {refresh_user } from './services/actions/auth.js'
import Routes from './services/Routes.js'
import NavigationBar from './scenes/NavigationBar.js'
import './App.css';

class App extends React.Component{

    componentDidMount(){
        const user = JSON.parse(localStorage.getItem('user'))
        fetch("http://localhost:3000/api/v1/auth/validate_token?uid=" + user.uid
              + "&client=" + user.client
              + "&access-token=" + user['access-token'])
        .then(response=>{
            if(!response.ok) throw new Error(response.status)
            else this.props.refresh_user(user)
        })
        .catch(error=>{
            console.log(error)
        })
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
        refresh_user: (user) => dispatch(refresh_user(user)),
    }
}

  export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
