import React from 'react';
import './App.css';
import Routes from './services/Routes.js'
import NavigationBar from './scenes/NavigationBar.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <NavigationBar/>
      </header>
      <body className="App-body">
      <Routes/>
      </body>
      
    </div>
  );
}

export default App;
