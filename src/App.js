import React from 'react';
// import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import Greetings from "./components/Greetings";
import SimpleForm from './components/SimpleForm';
import Clock from './components/clock.js';
import { Container, Row, Col } from 'react-grid-system'

// Where you add your components (i.e. SimpleForm, Clock, etc...)
const App = () => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      {/* <Greetings firstName="Jacob" lastName="Ong" /> */}
    </header>
    <Container>
  <Row>
    <Col sm={4}>
      <SimpleForm />
    </Col>
    <Col sm={4}>
      <Clock />
    </Col>
    <Col sm={4}>
      One of three columns
    </Col>
  </Row>
  <Row>
    <Col md={6}>
    <Clock />
    </Col>
    <Col md={6}>
    One of two columns
    </Col>
  </Row>
</Container>

  </div>
);

export default App;
