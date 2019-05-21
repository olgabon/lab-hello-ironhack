import React from 'react';
import Button from './Button.js';
import './Header.css';


const header = () => {
  return (
    <header class="App-header">
    <img src="../images/react-logo.svg" className="React-background-img" alt="react"/>
    <div class="header-div">
      <h1 class="App-title">Say hello to ReactJS</h1>
      <h3>You are ready to take this to the next level!</h3>
    </div>
    <img src="../images/react-logo.svg" className="React-background-img" alt="react"/>
    <Button/>
    </header>
  );
}

export default header;