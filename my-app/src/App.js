import React, { Component } from 'react';
import './App.css';
import Header from './components/Header.js';
import Nav from './components/Nav.js';
//import Button from './components/Button.js';
import Section from './components/Section.js';

class App extends Component {
  render() {
    return (

        <div className="App">
          <Nav/>
          <Header/>
          <Section/>
        </div>

    )};
}

export default App;
