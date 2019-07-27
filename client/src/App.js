import React from 'react';
import './App.css';
import Routes from './services/Routes.js'
import NavigationBar from './scenes/NavigationBar.js'

function App() {
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

export default App;
