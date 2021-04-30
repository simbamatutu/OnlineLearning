import React from 'react';
import { Button, Form, Modal } from 'react-bootstrap';

const CourseNameModal = (props) => {
  return (
    <Modal
      {...props}
      size='md'
      aria-labelledby='contained-modal-title-vcenter'
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id='contained-modal-title-vcenter'>
          Course Title
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId='formBasicEmail'>
            <Form.Label>Topic Title</Form.Label>
            <Form.Control type='text' placeholder='Enter topic title' />
            <Form.Text className='text-muted'>It will appear above.</Form.Text>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide} inline>
          Close
        </Button>
        <Button variant='primary' type='submit' inline>
          Submit
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CourseNameModal;
