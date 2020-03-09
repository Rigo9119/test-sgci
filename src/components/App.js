import React, { useState, useEffect } from 'react';
import './App.css';

import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Table from '../components/Table';

import Main from '../components/Main';
import Form from '../components/Form';
import Modal from '../components/Modal';

function App() {
  const handleEdit = () => {
    const id = people.map( person => person.id );
  }

  const handleDelete = el => {
    let idArray = people.map(person => person.id)
    console.log(idArray)
  };

  const toggleHandler = () => {
    setToggleTable(!toggleTable)
  }

  let [toggleTable, setToggleTable] = useState(true),
      [people, setPeople]           = useState([]),
      [modalShow, setModalShow]     = useState(false),
      rows = people && people.map(person =>  
          <tr key={person.id}>
            <td>{person.id}</td>
            <td>{person.name}</td>
            <td>{person.age}</td>
            <td className="d-flex justify-content-around">
              <Button variant='success' size='s' onClick={() => setToggleTable(false)}>Edit</Button>
              <Button variant='danger' size='s' onClick={handleDelete}>Delete</Button>
            </td>
            <td>{person.personTypeId === 1 ? 
              <div>
                <Button variant='primary' size='sm' onClick={() => setModalShow(true)}>
                  More
                </Button> 
                <Modal 
                  key={person.id}
                  name={person.name}
                  age={person.age}
                  show={modalShow}
                  onHide={() => setModalShow(false)}/>
              </div>: 'Student'}</td>
          </tr>
        );
    useEffect(() => {
    const apiUrl = 'https://my-json-server.typicode.com/sgcis/codetest/persons';

    (async function getData() {
      try {
        let res    = await fetch(apiUrl),
            resJson = await res.json();
            console.table(resJson);
            setPeople(resJson);
      }     
      catch(error) {
        console.warn(`there is and error: ${error}`)
      } 
    })();
  }, []);
  return (
    <Container>
      { toggleTable === true ? 
        <div>
          <Link to="/Form">
            <Button variant='primary' size='md' onClick={toggleHandler}>
                {'Add person'}
            </Button>
          </Link>

          <Table rows={rows}/>
        </div> : <Form />
      }
      <Main />
    </Container> 
  );
}

export default App;
