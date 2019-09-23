import React, { useState, Component } from 'react';
import './App.css';
import Header from './components/header.js';
import Data from './components/info/data.js';




class App extends Component {
  constructor() {
    super();

    this.state = {
      'bio' : 'this is my bio!',
      'name' : 'Liam'
    }
  }

  render() {
    return (
      <div className="App">
        // <h1>{this.props.class}</h1>
        // <Data sport={"Baseball"} team={'Red Sox'} app_name={this.state.name}/>
        <p>My name is {this.state.name} and {this.state.bio}</p>
      </div>
    );
  }
}

export default App;
