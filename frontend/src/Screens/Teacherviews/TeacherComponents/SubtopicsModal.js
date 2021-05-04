import React, { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { updateSubTopic } from '../../../actions/subTopicActions';

const SubtopicsModal = ({ ...props }) => {
  const [subTopicTitle, setsubTopicTitle] = useState(
    props.subtopic.subTopicTitle
  );

  const [video, setvideo] = useState('');
  const [embedded, setEmbedded] = useState(props.subtopic.embbedVideo);
  const [doc, setdoc] = useState('');
  const subTopicUpdate = useSelector((state) => state.subTopicUpdate);
  const { loading, error, success } = subTopicUpdate;
  const dispatch = useDispatch();

  const submitHandler = () => {
    //e.preventDefault();
    console.log('455');
    dispatch(
      updateSubTopic({
        _id: props.subtopic._id,
        subTopicTitle,
        embedded,
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
          <Form.Group controlId='subTitle'>
            <Form.Label>Subtopic title</Form.Label>
            <Form.Control
              type='text'
              placeholder='Enter topic title'
              onChange={(event) => setsubTopicTitle(event.target.value)}
              value={subTopicTitle}
            />
            <Form.Text className='text-muted'>
              Less than 100 characters.
            </Form.Text>
          </Form.Group>
          <Form.Group>
            <Form.File
              id='pptUpload'
              label='Upload PPT'
              // onChange={(event) => setdoc(event.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.File
              id='videoUpload'
              label='Upload video'
              //  onChange={(event) => setvideo(event.target.value)}
            />
          </Form.Group>
          <p>or</p>
          <Form.Group controlId='formBasicEmail'>
            <Form.Label>Embed Video</Form.Label>
            <Form.Control
              type='text'
              placeholder='Enter video link'
              value={embedded}
              onChange={(event) => setEmbedded(event.target.value)}
            />
            <Form.Text className='text-muted'>
              Youtube videos are not supported.
            </Form.Text>
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

export default SubtopicsModal;
