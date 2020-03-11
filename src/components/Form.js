import React, {useState} from 'react';
import {Route} from 'react-router-dom'

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import App from './App'

function AddForm(props) {

  const [personId, setPersonId] = useState('');
  const [personName, setPersonName] = useState('');
  const [personAge, setPersonAge] = useState('');
  const [personType, setPersonType] = useState(1);

  const apiUrl = 'https://my-json-server.typicode.com/sgcis/codetest/persons';
  const handleSubmit = event => {
    event.preventDefault()
    event.stopPropagation()
    props.handlePersonData({
      id: personId,
      name: personName,
      age: personAge,
      personTypeId: personType
    })

    async function postData(url, data) {
      let settings = {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        }
      };
      const res    = await fetch(url, settings);
      const resJson = await res.json();
      return resJson
    }

    postData(apiUrl, {
      id: personId,
      name: personName,
      age: personAge,
      personTypeId: personType
    })
  }

  return (
    <Container>
      <Form className="container-fluid col-md-9 ml-md-auto mt-5" onSubmit={event => handleSubmit(event)}>
        <Form.Group controlId="formBasicPersonId">
          <Form.Control type="personId" placeholder="Person ID" onChange={event => setPersonId(event.target.value)}/>
        </Form.Group>

        <Form.Group controlId="formBasicPersonName">
          <Form.Control type="personName" placeholder="Person Name" onChange={event => setPersonName(event.target.value)}/>
        </Form.Group>

        <Form.Group controlId="formBasicPersonAge">
          <Form.Control type="personAge" placeholder="Person Age" onChange={event => setPersonAge(event.target.value)}/>
        </Form.Group>

        <Form.Group controlId="exampleForm.ControlSelect">
          <Form.Label>
            Person type
          </Form.Label>
          <Form.Control as="select" onChange={event => setPersonType(event.target.value)}>
            <option>
              Teacher
            </option>
            <option>
              Student
            </option>
          </Form.Control>
        </Form.Group>

        <Button variant="primary" type="submit" size="s">
          <Route path="/"  component={App}>
            Save
          </Route>
        </Button>
      </Form>
    </Container>
  );
};

export default AddForm;

