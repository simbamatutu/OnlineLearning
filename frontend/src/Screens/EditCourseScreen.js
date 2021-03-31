import React, { useState, useEffect } from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import Header from '../Components/Header';
import axios from 'axios';
import { Form, Button, Row, Col, Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { listCourseDetails, updateCourse } from '../actions/courseActions';
import { COURSE_UPDATE_RESET } from '../constants/courseContants';
import Message from '../Components/Message';
import Loader from '../Components/Loader';

export const EditCourseScreen = ({ match, history }) => {
  const courseId = match.params.id;
  const [courseName, setCourseName] = useState('');
  const [level, setLevel] = useState('');
  const [courseImage, setCourseImage] = useState('');
  const [school, setSchool] = useState('');
  const [uploading, setUploading] = useState(false);

  // const [message, setMessage] = useState(null);
  // const redirect = location.search ? location.search.split('=')[1] : '/';

  const dispatch = useDispatch();
  const courseDetails = useSelector((state) => state.courseDetails);
  const { loading, error, course } = courseDetails;

  const courseUpdate = useSelector((state) => state.courseUpdate);
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = courseUpdate;

  useEffect(() => {
    if (successUpdate) {
      dispatch({ type: COURSE_UPDATE_RESET });
      history.push('/admin/course-list');
    } else {
      if (!course.courseName || course._id !== courseId) {
        dispatch(listCourseDetails(courseId));
      } else {
        setCourseName(course.courseName);
        setLevel(course.level);
        setSchool(course.school);
        setCourseImage(course.courseImage);
      }
    }
  }, [courseId, course, dispatch, successUpdate, history]);

  const uploadFileHandler = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append('image', file);
    setUploading(true);

    try {
      const config = {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      };

      const { data } = await axios.post('/api/upload', formData, config);
      setCourseImage(data);
      setUploading(false);
    } catch (error) {
      console.error(error);
      setUploading(false);
    }
  };
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      updateCourse({
        _id: courseId,
        courseName,
        level,
        courseImage,
        school,
      })
    );
  };

  return (
    <React.Fragment>
      <Header />
      <Container className='p-0 mt-1'>
        <LinkContainer to='/admin/course-list'>
          <Button className=' my-3 btn'>Back</Button>
        </LinkContainer>

        <Row className='justify-content-md-center'>
          <Col xs={12} md={6} xl={3}>
            <h2>Edit Course</h2>
            {loadingUpdate && <Loader />}
            {/* config this messaging stuff */}
            {errorUpdate && <Message variant='danger'>{errorUpdate}</Message>}
            {loading ? (
              <Loader />
            ) : error ? (
              <Message variant='danger'>{error}</Message>
            ) : (
              <Form onSubmit={submitHandler}>
                <Form.Group controlId='coursename'>
                  <Form.Label>Course Name</Form.Label>
                  <Form.Control
                    type='text'
                    placeholder='Enter Course Name'
                    value={courseName}
                    onChange={(e) => setCourseName(e.target.value)}
                  ></Form.Control>
                </Form.Group>
                <Form.Group controlId='image'>
                  <Form.Label>Course Image</Form.Label>
                  <Form.Control
                    type='text'
                    placeholder='Enter course image Url'
                    value={courseImage}
                    onChange={(e) => setCourseImage(e.target.value)}
                  ></Form.Control>
                  <Form.File
                    id='image-file'
                    label='Choose image'
                    custom
                    onChange={uploadFileHandler}
                  ></Form.File>
                  {uploading && <Loader />}
                </Form.Group>

                <Form.Group controlId='school'>
                  <Form.Label>school</Form.Label>
                  <Form.Control
                    type='text'
                    placeholder='Enter School'
                    value={school}
                    onChange={(e) => setSchool(e.target.value)}
                  ></Form.Control>
                </Form.Group>

                <Form.Group controlId='level'>
                  <Form.Label>level</Form.Label>
                  <Form.Control
                    type='text'
                    placeholder='Enter level'
                    value={level}
                    onChange={(e) => setLevel(e.target.value)}
                  ></Form.Control>
                </Form.Group>

                <Button type='submit' variant='primary'>
                  Update Course
                </Button>
              </Form>
            )}
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};
export default EditCourseScreen;
