import React, { useEffect, useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { updateCourseware } from '../../../actions/coursewareActions';
import { COURSEWARE_UPDATE_RESET } from '../../../constants/coursewarecontants';

const CourseNameModal = ({ ...props }) => {
  const [topic, setTopic] = useState(props.courseware.topicName);
  const coursewareUpdate = useSelector((state) => state.coursewareUpdate);
  const { loading, error, success } = coursewareUpdate;
  const dispatch = useDispatch();
  const submitHandler = () => {
    //e.preventDefault();
    console.log('455');
    dispatch(
      updateCourseware({
        _id: props.courseware._id,
        topic,
      })
    );
    props.onHide();
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
