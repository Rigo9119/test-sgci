import React from 'react'

import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

import BarChart from '../components/barChart/BarChart'

function TeacherModal(props) {
  const index = props.currentActive;
  const activePerson = props.people[index];

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <h3>
            Teacher Information
          </h3>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="d-flex-column justify-content-center">
        <h4>
          {`${activePerson.name + ' '+ activePerson.age}`}
        </h4>
        <BarChart dates={props.dates}/>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default TeacherModal

