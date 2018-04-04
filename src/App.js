import React, { Component } from 'react';

import './App.css';
import{
  NavLink
}from "react-router-dom";
class App extends Component {
  render() {
    return (
      <div className="App">
          {this.props.children}

      </div>
    );
  }
  componentDidMount(){

  }
}

export default App;
