import React from 'react';
import './App.css';
import Routes from './services/Routes.js'
import NavigationBar from './scenes/NavigationBar.js'

class App extends React.Component{

    componentDidMount(){
        const user = JSON.parse(localStorage.getItem('user'))
        fetch("http://localhost:3000/api/v1/auth/validate_token?uid=" + user.uid
              + "&client=" + user.client
              + "&access-token=" + user['access-token'])
        .then(response=>{
            if(!response.ok) throw new Error(response.status)
            else return response.json()
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
                <Routes/>
                </div>
            </div>
        );
    }
}

export default App;
