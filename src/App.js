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
          <NavLink to="/home">home</NavLink>
          <NavLink to="/list">list</NavLink>
          <NavLink to="/login">login</NavLink>
          <NavLink to="/register">register</NavLink>  
      </div>
    );
  }
  componentDidMount(){

  }
}

export default App;
