import React, { useEffect } from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Button, Container, Table, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import {
  listCourses,
  deleteCourse,
  createCourse,
} from '../actions/courseActions';
import Message from '../Components/Message';
import Loader from '../Components/Loader';
import Header from '../Components/Header';
import { COURSE_CREATE_RESET } from '../constants/courseContants';

const CourseListScreen = ({ history, match }) => {
  const dispatch = useDispatch();
  const courseList = useSelector((state) => state.courseList);
  const { loading, error, courses } = courseList;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const courseDelete = useSelector((state) => state.courseDelete);
  const {
    loading: loadingDelete,
    error: errorDelete,
    sucess: successDelete,
  } = courseDelete;
  const courseCreate = useSelector((state) => state.courseCreate);
  const {
    loading: loadingCreate,
    error: errorCreate,
    success: successCreate,
    course: createdCourse,
  } = courseCreate;
  useEffect(() => {
    dispatch({ type: COURSE_CREATE_RESET });

    if (!userInfo.isAdmin) {
      history.push('login');
    }

    if (successCreate) {
      history.push(`/admin/courses/${createdCourse._id}/edit`);
    } else {
      dispatch(listCourses());
    }
  }, [
    dispatch,
    history,
    userInfo,
    successDelete,
    successCreate,
    createdCourse,
  ]);

  const deleteHandler = (id) => {
    if (window.confirm('Are you sure?')) {
      dispatch(deleteCourse(id));
    }
  };

  const createCourseHandler = () => {
    dispatch(createCourse());
  };
  return (
    <>
      <Header />
      <Container>
        <Row className='align-items-center'>
          <Col>
            <h1>Courses</h1>
          </Col>
          <Col className='text-right'>
            <Button className='my-3' onClick={createCourseHandler}>
              <i className='fas fa-plus'></i> Create Course
            </Button>
          </Col>
        </Row>
        {loadingDelete && <Loader />}
        {errorDelete && <Message variant='danger'>{errorDelete}</Message>}
        {loadingCreate && <Loader />}
        {errorCreate && <Message variant='danger'>{errorCreate}</Message>}
        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant='danger'>{error}</Message>
        ) : (
          <Table striped bordered hover responsive className='table-sm'>
            <thead>
              <tr>
                <th>Course Number</th>
                <th>Name</th>
                <th>Teacher(s)</th>
                <th>School</th>
                <th>Language</th>
                <th>Enrolled</th>
                <th>Max Capacity</th>
                <th>Available</th>
                <th>Start Week</th>
                <th>Ending Week</th>
                <th>Modify</th>
              </tr>
            </thead>
            <tbody>
              {courses.map((course) => (
                <tr key={course._id}>
                  <td>{course.courseNum}</td>
                  <td>{course.courseName}</td>
                  <td>
                    {course.courseTeachers.map((teacher) => `${teacher}`)}
                  </td>
                  <td>{course.school}</td>
                  <td>{course.language}</td>
                  <td>{course.enrolled}</td>
                  <td>{course.maxCapacity}</td>
                  <td>
                    {course.maxCapacity && course.maxCapacity - course.enrolled}
                  </td>
                  <td>{course.startingWeek}</td>
                  <td>{course.endingWeek}</td>
                  <td>
                    <LinkContainer to={`/admin/courses/${course._id}/edit`}>
                      <Button variant='light' className='btn-sm'>
                        <i className='fas fa-edit'></i>
                      </Button>
                    </LinkContainer>
                    <Button
                      variant='danger'
                      className='btn-sm'
                      onClick={() => deleteHandler(course._id)}
                    >
                      <i className='fas fa-trash'></i>
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        )}
      </Container>
    </>
  );
};

export default CourseListScreen;
