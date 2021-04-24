import React, { useEffect, useState } from 'react';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import TeacherCourses from './TeacherComponents/Teachercoursecard';
import { Link } from 'react-router-dom';
import Search from '../../Components/Searchbox';
import { Container, Button, Row, Col, CardGroup } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getUserDetails } from '../../actions/userActions';
import Message from '../../Components/Message';
import Loader from '../../Components/Loader';

export default function TeacherHomescreen({ history }) {
  const dispatch = useDispatch();
  const userDetails = useSelector((state) => state.userDetails);
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const {
    loading,
    error,
    user: { coursesTaught },
  } = userDetails;

  const [message, setMessage] = useState(null);

  useEffect(() => {
    dispatch(getUserDetails('profile'));
    if (!userInfo) {
      history.push('/');
    } else {
      dispatch(getUserDetails('profile'));
    }
  }, [dispatch, history, userInfo]);
  return (
    <div>
      <Header />
      <Container className='mt-3 pt-3' style={{ height: '80vh' }}>
        <Row>
          <Col>
            <Link to='/create-course' className='mr-1'>
              <Button variant='primary'>Create</Button>{' '}
            </Link>
            <Link to='/create-course'>Import</Link>
          </Col>
          <Col>
            <Row className='d-flex justify-content-end'>
              <Search />
            </Row>
            <Row className='d-flex justify-content-end'>
              <Link className='mr-3'>Filter</Link>
              <Link className='mr-3'>Group by</Link>
              <i className='fas fa-grip-horizontal pr-2 mt-1' />
              <i className='fas fa-list mt-1'></i>
            </Row>
          </Col>
        </Row>
        {message && <Message variant='danger'>{message}</Message>}
        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant='danger'>{error}</Message>
        ) : (
          <CardGroup>
            <Row>
              {coursesTaught ? (
                coursesTaught.map((course) => (
                  <Col sm={12} md={6} lg={12} xl={12} key={course._id}>
                    <TeacherCourses course={course} />
                  </Col>
                ))
              ) : (
                <Loader />
              )}
            </Row>
          </CardGroup>
        )}
      </Container>
      <Footer />
    </div>
  );
}
