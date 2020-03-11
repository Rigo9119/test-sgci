import React from 'react'

import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';

function DataTable(props) {

  return (
    <Container>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Age</th>
              <th>Actions</th>
              <th>Modal</th>
            </tr>
          </thead>

          <tbody>
            {props.rows}
          </tbody>
        </Table>
    </Container>
  )
};

export default DataTable;

