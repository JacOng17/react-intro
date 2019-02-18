import React from 'react';
// import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Greetings from "./components/Greetings";
import SimpleForm from './components/SimpleForm';
import Clock from './components/clock.js'

const App = () => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <Greetings firstName="John" lastName="Smith" />
    </header>
    
    <SimpleForm />
    <Clock />
  </div>
);

export default App;
