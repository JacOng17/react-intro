import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Greetings from "./components/Greetings";
import SimpleForm from './components/SimpleForm';

const App = () => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <Greetings firstName="John" lastName="Smith" />
    </header>
    <div>
    
  </div>
    <SimpleForm />
  </div>
);

export default App;
