import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Table from '../components/Table';

import Main from '../components/Main';
import Form from '../components/Form';
import Modal from '../components/Modal';

const apiUrl = 'https://my-json-server.typicode.com/sgcis/codetest/persons';

class App extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      people: [],
      isTableVisible: true,
      isModalVisible: false,
      currentActive: 0,
      dates: [
        { x: 1, y: "Jan" },
        { x: 10, y: "Feb" },
        { x: 2, y: "Mar" },
        { x: 5, y: "Apr" },
        { x: 7, y: "May" },
        { x: 9, y: "Jun" },
        { x: 8, y: "Jul" },
        { x: 4, y: "Aug" },
        { x: 3, y: "Sep" },
        { x: 4, y: "Oct" },
        { x: 10, y: "Nov" },
        { x: 6, y: "Dec" }
      ]
    }
  }

  handleDelete = (index) => {
    const updatedList = [...this.state.people];

    updatedList.splice(index, 1);
    this.setState({
      people: updatedList
    })

    async function deleteData() {
      const settings = { method: 'DELETE' };
      const res    = await fetch(apiUrl, settings);
      const resJson = await res.json();

      return resJson
    }

    deleteData()
  }
  
  handleToggleTable = () => { 
    this.setState({
      isTableVisible: !this.state.isTableVisible
    }) 
  }

  handleToggleModal = (index) => {
    this.setState({
      currentActive: index,
      isModalVisible: !this.state.isModalVisible
    }) 
  }

  handlePersonData = (data) => {
    const updatedList = [...this.state.people];

    updatedList.push(data);
    this.setState({
      people: updatedList,
      isTableVisible: true
    })
  }

  componentDidMount() {
    const me     = this;

    async function getData() {
      const res     = await fetch(apiUrl);
      const resJson = await res.json();
      me.setState({
        people: resJson
      })
    };

    getData();
  }

  render() {
    const student = 'Student'
    const rows = this.state.people.length && this.state.people.map((person, index) => {
      return (
        <tr key={person.id}>
          <td>{person.id}</td>
          <td>{person.name}</td>
          <td>{person.age}</td>
          <td className="d-flex justify-content-around">
            <Button variant='success' size='s' onClick={this.handleToggleTable}>
              Edit
            </Button>
            <Button variant='danger' size='s' onClick={() => this.handleDelete(index)}>
              Delete
            </Button>
          </td>
          <td>
            { person.personTypeId === 1 ? 
              <div>
                <Button variant='primary' size='sm' onClick={() => this.handleToggleModal(index)}>
                  More
                </Button> 
              </div>
              : student }
          </td>
        </tr>
      )
    });

    return (
      <Container>
        {this.state.isTableVisible ? 
          <div className="d-sm-flex-column justify-content-center mt-4">
            <div className="d-flex justify-content-center mt-2 mb-4">
              <Link to="/form">
                <Button variant='primary' size='md' onClick={this.handleToggleTable}>
                    {'Add person'}
                </Button>
              </Link>
            </div>
            <Table rows={rows} />
          </div> : <Form handlePersonData={this.handlePersonData}/>}
        <Main />
        { this.state.people.length && (
          <Modal 
            currentActive={this.state.currentActive}
            people={this.state.people}
            dates={this.state.dates}
            show={this.state.isModalVisible}
            onHide={() => this.handleToggleModal(0)}/>
          )
        }
      </Container> 
    );
  }
}

export default App;
