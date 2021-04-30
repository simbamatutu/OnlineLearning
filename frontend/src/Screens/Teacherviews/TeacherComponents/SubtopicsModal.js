import React from 'react';
import { Button, Form, Modal } from 'react-bootstrap';

const SubtopicsModal = (props) => {
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
            <Form.Label>Sub topic title</Form.Label>
            <Form.Control type='text' placeholder='Enter topic title' />
            <Form.Text className='text-muted'>
              Less than 100 characters.
            </Form.Text>
          </Form.Group>
          <Form.Group>
            <Form.File id='pptUpload' label='Upload PPT' />
          </Form.Group>
          <Form.Group>
            <Form.File id='videoUpload' label='Upload video' />
          </Form.Group>
          <p>or</p>
          <Form.Group controlId='formBasicEmail'>
            <Form.Label>Embed Video</Form.Label>
            <Form.Control type='text' placeholder='Enter video link' />
            <Form.Text className='text-muted'>
              Youtube videos are not supported.
            </Form.Text>
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

export default SubtopicsModal;
