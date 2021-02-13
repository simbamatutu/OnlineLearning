import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../Components/Header';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getUserDetails, updateUser } from '../actions/userActions';
import { USER_UPDATE_RESET } from '../constants/userContants';
import Message from '../Components/Message';
import Loader from '../Components/Loader';

export const EditUserScreen = ({ match, history }) => {
  const userId = match.params.id;
  const [loginName, setLoginName] = useState('');
  const [studentNumber, setStudentNumber] = useState('');
  const [teacherNumber, setTeacherNumber] = useState('');
  const [name, setName] = useState('');
  const [isTeacher, setIsTeacher] = useState(false);
  const [isStudent, setIsStudent] = useState(false);
  const [email, setEmail] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);
  // const [message, setMessage] = useState(null);
  // const redirect = location.search ? location.search.split('=')[1] : '/';

  const dispatch = useDispatch();
  const userDetails = useSelector((state) => state.userDetails);
  const { loading, error, user } = userDetails;

  const userUpdate = useSelector((state) => state.userUpdate);
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = userUpdate;

  useEffect(() => {
    if (successUpdate) {
      dispatch({ type: USER_UPDATE_RESET });
      history.push('/admin/user-list');
    } else {
      if (!user.name || user._id !== userId) {
        dispatch(getUserDetails(userId));
      } else {
        setName(user.name);
        setEmail(user.email);
        setStudentNumber(user.studentNumber);
        setTeacherNumber(user.teacherNumber);
        setIsAdmin(user.isAdmin);
        setIsStudent(user.isStudent);
        setIsTeacher(user.isTeacher);
        setLoginName(user.loginName);
      }
    }
  }, [user, dispatch, userId, successUpdate, history]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      updateUser({
        _id: userId,
        name,
        email,
        isAdmin,
        studentNumber,
        teacherNumber,
        isStudent,
        isTeacher,
      })
    );
  };

  return (
    <React.Fragment>
      <Header />
      <Link to='/admin/user-list' className='btn btn-light my-3'>
        Back
      </Link>
      <Row className='justify-content-md-center'>
        <Col xs={12} md={6} xl={3}>
          <h2>Edit User</h2>
          {loadingUpdate && <Loader />}
          {/* config this messaging stuff */}
          {errorUpdate && <Message variant='danger'>{errorUpdate}</Message>}
          {loading ? (
            <Loader />
          ) : error ? (
            <Message variant='danger'>{error}</Message>
          ) : (
            <Form onSubmit={submitHandler}>
              <Form.Group controlId='name'>
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type='text'
                  placeholder='Enter Name'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                ></Form.Control>
              </Form.Group>

              <Form.Group controlId='loginName'>
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type='text'
                  placeholder='Enter Username'
                  value={loginName}
                  onChange={(e) => setLoginName(e.target.value)}
                ></Form.Control>
              </Form.Group>

              <Form.Group controlId='email'>
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type='email'
                  placeholder='Enter Email Address'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                ></Form.Control>
              </Form.Group>
              {user.isTeacher ? (
                <Form.Group controlId='teacherNumber'>
                  <Form.Label>Teacher Number</Form.Label>
                  <Form.Control
                    type='text'
                    placeholder='Enter Teacher Number'
                    value={teacherNumber}
                    onChange={(e) => setTeacherNumber(e.target.checked)}
                  ></Form.Control>
                </Form.Group>
              ) : (
                <Form.Group controlId='studentNumber'>
                  <Form.Label>Student Number</Form.Label>
                  <Form.Control
                    type='text'
                    placeholder='Enter Student Number'
                    value={studentNumber}
                    onChange={(e) => setStudentNumber(e.target.checked)}
                  ></Form.Control>
                </Form.Group>
              )}

              <Form.Group controlId='checkboxControls'>
                <Form.Check
                  inline
                  label='isStudent'
                  type='switch'
                  checked={isStudent}
                  id='studentCheckbox'
                  onChange={(e) => setIsStudent(e.target.checked)}
                />
                <Form.Check
                  inline
                  type='switch'
                  label='isTeacher'
                  checked={isTeacher}
                  onChange={(e) => setIsTeacher(e.target.checked)}
                ></Form.Check>

                <Form.Check
                  inline
                  type='switch'
                  label='isAdmin'
                  checked={isAdmin}
                  onChange={(e) => setIsAdmin(e.target.checked)}
                />
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
export default EditUserScreen;
