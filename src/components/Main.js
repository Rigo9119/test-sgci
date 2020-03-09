import React from 'react';
import { Switch, Route } from "react-router-dom";

import Container from 'react-bootstrap/Container';
import PageTwo from '../components/Form';

const Main = () => {
  return (
    <Container>
      <Switch>
        <Route path="../pages/page-2" component={PageTwo}/>
      </Switch>
    </Container>
  );
};

export default Main;
