import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../Components/Header';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { listCourseDetails, updateCourse } from '../actions/courseActions';
import { COURSE_UPDATE_RESET } from '../constants/courseContants';
import Message from '../Components/Message';
import Loader from '../Components/Loader';

export const EditCourseScreen = ({ match, history }) => {
  const courseId = match.params.id;
  const [courseName, setCourseName] = useState('');
  const [level, setLevel] = useState('');
  const [school, setSchool] = useState('');

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
      }
    }
  }, [courseId, course, dispatch, successUpdate, history]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      updateCourse({
        _id: courseId,
        courseName,
        level,
        school,
      })
    );
  };

  return (
    <React.Fragment>
      <Header />
      <Link to='/admin/course-list' className='btn btn-light my-3'>
        Back
      </Link>
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
                Update User
              </Button>
            </Form>
          )}
        </Col>
      </Row>
    </React.Fragment>
  );
};
export default EditCourseScreen;
