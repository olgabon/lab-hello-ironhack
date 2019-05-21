import React from 'react';
import './Section.css';

const section = () => {
  return (
    <div class="Cards-section">
    <div className="card">
    <img src="../images/icon1.png"></img>
    <h1>Declarative</h1>
    <p>For now, don’t worry about creating more than one component</p>
    </div>
    <div className="card">
    <img src="../images/icon2.png"></img>
    <h1>Components</h1>
    <p>For now, don’t worry about creating more than one component</p>
    </div>
    <div className="card">
    <img src="../images/icon3.png"></img>
    <h1>Single-Way</h1>
    <p>For now, don’t worry about creating more than one component</p>
    </div>
    <div className="card">
    <img src="../images/icon4.png"></img>
    <h1>JSX</h1>
    <p>For now, don’t worry about creating more than one component</p>
    </div>
    </div>
  );
}

export default section;