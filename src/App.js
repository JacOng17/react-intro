import React from 'react';
// import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import Greetings from "./components/Greetings";
import SimpleForm from './components/SimpleForm';
import Clock from './components/Clock';
import { Container, Row, Col } from 'react-grid-system'
import Toggle from './components/Toggle';
import LoginControl from './components/LoginControl';
import PageWarning from './components/PageWarning';
import NameForm from './components/NameForm';
import Calculator from './components/Calculator';

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
          <LoginControl />
        </Col>
      </Row>
      <Row>
        <Col md={6}>
        <Toggle />
        </Col>
        <Col md={6}>
          <PageWarning />
        </Col>
      </Row>
      <Row>
      <Col sm={4}>
          <NameForm />
        </Col>
        <Col sm={4}>
          <Calculator />
        </Col>
        <Col sm={4}>
          
        </Col>
      </Row>
    </Container> 
  </div>
);

export default App;
