import React, { useEffect } from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Button, Container, Table, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { listCourses, deleteCourse } from '../actions/courseActions';
import Message from '../Components/Message';
import Loader from '../Components/Loader';
import Header from '../Components/Header';

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

  useEffect(() => {
    if (userInfo && userInfo.isAdmin) {
      dispatch(listCourses());
    } else {
      history.push('/login');
    }
  }, [dispatch, history, userInfo, successDelete]);

  const deleteHandler = (id) => {
    if (window.confirm('Are you sure?')) {
      dispatch(deleteCourse(id));
    }
  };

  const createCourseHandler = (course) => {
    // dispatch(deleteCOurse(id));
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

        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant='danger'>{error}</Message>
        ) : (
          <Table striped bordered hover responsive className='table-md'>
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
                  <td>{course.maxCapacity - course.enrolled}</td>
                  <td>{course.startingWeek}</td>
                  <td>{course.endingWeek}</td>
                  <td>
                    <LinkContainer to={`/admin/course/${course._id}/edit`}>
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
