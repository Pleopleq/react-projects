import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  render() {
    return (
      <div className="App">
      <h1>Welcome to React</h1>
      <button>Switch Name</button>
      <Person name="Felix" age="24">Mis hobbies son: hacerme wey </Person>
      <Person name="bleh" age="xx"/>
      <Person name="mehh" age="xx"/>

    </div>
    
    );
  }
}

export default App;
