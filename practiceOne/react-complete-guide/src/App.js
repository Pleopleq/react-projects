import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  render() {
    return (
      <div className="App">
      <h1>Welcome to React</h1>
      <Person name="Felix" age="24"/>
      <Person name="bleh" age="xx"/>
      <Person name="bleh" age="xx"/>

    </div>
    
    );
  }
}

export default App;
