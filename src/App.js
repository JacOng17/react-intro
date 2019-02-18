import React from 'react';
// import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Greetings from "./components/Greetings";
import SimpleForm from './components/SimpleForm';
import Clock from './components/clock.js'

// Where you add your components (i.e. SimpleForm, Clock, etc...)
const App = () => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <Greetings firstName="Jacob" lastName="Ong" />
    </header>
    
    <SimpleForm />
    <Clock />
  </div>
);

export default App;
