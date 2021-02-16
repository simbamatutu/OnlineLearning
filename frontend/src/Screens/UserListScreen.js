import React, { useEffect } from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Button, Container, Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { listUsers, deleteUser } from '../actions/userActions';
import Message from '../Components/Message';
import Loader from '../Components/Loader';
import Header from '../Components/Header';

const UserListScreen = ({ history }) => {
  const dispatch = useDispatch();
  const userList = useSelector((state) => state.userList);
  const { loading, error, users } = userList;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const userDelete = useSelector((state) => state.userDelete);
  const { sucess: successDelete } = userDelete;

  useEffect(() => {
    if (userInfo && userInfo.isAdmin) {
      dispatch(listUsers());
    } else {
      history.push('/login');
    }
  }, [dispatch, history, userInfo, successDelete]);

  const deleteHandler = (id) => {
    if (window.confirm('Are you sure?')) {
      dispatch(deleteUser(id));
    }
  };
  return (
    <>
      <Header />
      <Container>
        <h1>Users</h1>

        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant='danger'>{error}</Message>
        ) : (
          <Table striped bordered hover responsive className='table-sm'>
            <thead>
              <tr>
                <th>School ID</th>
                <th>Name</th>
                <th>Username</th>
                <th>Email</th>
                <th>Teacher</th>
                <th>Student</th>
                <th>Admin</th>
                <th>Edit</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user._id}>
                  <td>
                    {user.isStudent ? user.studentNumber : user.teacherNumber}
                  </td>
                  <td>{user.name}</td>
                  <td>{user.loginName}</td>
                  <td>
                    <a href={`mailto:${user.email}`}>{user.email}</a>
                  </td>
                  <td>
                    {user.isTeacher ? (
                      <i
                        className='fas fa-check'
                        style={{
                          color: 'green',
                        }}
                      ></i>
                    ) : (
                      <i
                        className='fas fa-times'
                        style={{
                          color: 'red',
                        }}
                      ></i>
                    )}
                  </td>
                  <td>
                    {user.isStudent ? (
                      <i
                        className='fas fa-check'
                        style={{
                          color: 'green',
                        }}
                      ></i>
                    ) : (
                      <i
                        className='fas fa-times'
                        style={{
                          color: 'red',
                        }}
                      ></i>
                    )}
                  </td>
                  <td>
                    {user.isAdmin ? (
                      <i
                        className='fas fa-check'
                        style={{
                          color: 'green',
                        }}
                      ></i>
                    ) : (
                      <i
                        className='fas fa-times'
                        style={{
                          color: 'red',
                        }}
                      ></i>
                    )}
                  </td>
                  <td>
                    <LinkContainer to={`/admin/user/${user._id}/edit`}>
                      <Button variant='light' className='btn-sm'>
                        <i className='fas fa-edit'></i>
                      </Button>
                    </LinkContainer>
                    <Button
                      variant='danger'
                      className='btn-sm'
                      onClick={() => deleteHandler(user._id)}
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

export default UserListScreen;
