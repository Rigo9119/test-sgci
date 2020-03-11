import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import App from './App';
import Form from '../components/Form';

const Main = () => {
  return (
    <Container>
      <Router>
        <Route path="/"/>
        <Route path="/form" />
      </Router>
    </Container>
  );
};

export default Main;
