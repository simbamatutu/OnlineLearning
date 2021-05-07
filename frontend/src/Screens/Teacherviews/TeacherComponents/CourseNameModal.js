import React, { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { updateCourseware } from '../../../actions/coursewareActions';
import { COURSEWARE_LIST_RESET } from '../../../constants/coursewarecontants';

const CourseNameModal = ({ ...props }) => {
  const [topic, setTopic] = useState(props.courseware.topicName);

  const dispatch = useDispatch();
  const submitHandler = () => {
    //e.preventDefault();

    dispatch(
      updateCourseware({
        _id: props.courseware._id,
        topic,
      })
    );
    props.onHide();
    dispatch({ type: COURSEWARE_LIST_RESET });
  };

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
            <Form.Control
              type='text'
              name='topic'
              placeholder='Enter topic title'
              onChange={(event) => setTopic(event.target.value)}
              value={topic}
            />
            <Form.Text className='text-muted'>It will appear above.</Form.Text>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='primary' inline onClick={() => submitHandler()}>
          Submit
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CourseNameModal;
