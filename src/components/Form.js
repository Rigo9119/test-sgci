import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import App from '../components/App';

function AddForm(props) {
  const [toggleForm, setToggleform] = useState(true),
      /* useform                     = (callback) => {
          const [inputs, setInputs] = useState({}),
                handleSubmit        = (event) => {
                  if(event) {
                    event.preventDefault();
                  } 
                  callback();
                },
                handleInputChange = (event) => {
                  event.persist();
                  setInputs(inputs => ({...inputs, [event.target.name]: event.target.value}));
                }
          return {
            inputs,
            handleSubmit,
            handleInputChange
          };
        }*/
        toggleHandler = () => {
          setToggleform(!toggleForm)
        }; 

  return (
    <Container>
      { toggleForm === true ?
        <Form className="container-fluid col-md-9 ml-md-auto">
          <Form.Group controlId="formBasicPersonId">
            <Form.Control type="personId" placeholder="Person ID" />
          </Form.Group>

          <Form.Group controlId="formBasicPersonName">
            <Form.Control type="personName" placeholder="Person Name" />
          </Form.Group>

          <Form.Group controlId="formBasicPersonAge">
            <Form.Control type="personAge" placeholder="Person Age" />
          </Form.Group>

          <Form.Group controlId="exampleForm.ControlSelect">
            <Form.Label>Person type</Form.Label>
            <Form.Control as="select">
              <option>Teacher</option>
              <option>Student</option>
            </Form.Control>
          </Form.Group>

          <Link to="/">
            <Button variant="primary" type="submit" size="s" onClick={toggleHandler}>
              Save
            </Button>
          </Link>
        </Form>
        : <App />}
    </Container>
  );
};

export default AddForm;

