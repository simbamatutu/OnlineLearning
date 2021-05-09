import React, { useEffect, useState } from 'react';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import { Container, Col, CardGroup } from 'react-bootstrap';
import EnrolledCourseCard from './StudentComponents/EnrolledCourseCard';
import { useSelector, useDispatch } from 'react-redux';
import { getUserDetails } from '../../actions/userActions';
import Message from '../../Components/Message';
import Loader from '../../Components/Loader';
const StudentHomeScreen = ({ history }) => {
  const dispatch = useDispatch();
  const [message, setmessage] = useState();
  const userDetails = useSelector((state) => state.userDetails);
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const {
    loading,
    error,
    user: { enrolledCourses },
  } = userDetails;

  useEffect(() => {
    if (!userInfo) {
      history.push('/');
    } else {
      dispatch(getUserDetails('profile'));
    }
  }, [history, userInfo, dispatch]);
  return (
    <div>
      <Header />
      <Container className='mt-3 pt-3' style={{ height: '80vh' }}>
        {message && <Message variant='danger'>{message}</Message>}
        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant='danger'>{error}</Message>
        ) : (
          <CardGroup>
            {enrolledCourses ? (
              enrolledCourses.map((course) => (
                <Col sm={12} md={12} lg={12} xl={12} key={course._id}>
                  <EnrolledCourseCard course={course} />
                </Col>
              ))
            ) : (
              <Loader />
            )}
          </CardGroup>
        )}
      </Container>
      <Footer />
    </div>
  );
};

export default StudentHomeScreen;
