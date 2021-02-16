import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import {
  Container,
  Nav,
  Navbar,
  NavDropdown,
  Form,
  InputGroup,
  FormControl,
  Button,
} from 'react-bootstrap';
import fullLogo from '../img/fullLogo.png';
import miniLogo from '../img/miniLogo.png';
import logout from '../actions/userActions';

const width =
  window.innerWidth ||
  document.documentElement.clientWidth ||
  document.body.clientWidth;

const Header = () => {
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const logoutHandler = () => {
    dispatch(logout());
  };
  return (
    <Navbar
      className='mr-4'
      collapseOnSelect
      expand='lg'
      style={{ boxShadow: '0 4px 4px -6px black', color: '#005bac' }}
    >
      <LinkContainer to='/'>
        <Navbar.Brand href='#home'>
          <img
            src={width <= 1024 ? miniLogo : fullLogo}
            alt='logo-Img'
            style={{ maxHeight: '5ch' }}
          />
        </Navbar.Brand>
      </LinkContainer>
      <Navbar.Toggle aria-controls='responsive-navbar-nav' />
      <Navbar.Collapse id='responsive-navbar-nav'>
        <Container className='ml-5 mr-9'>
          <Nav>
            <NavDropdown
              title='Courses'
              id='collasible-nav-dropdown'
              className='pr-5'
            >
              <NavDropdown.Item href='#action/3.1'>Action</NavDropdown.Item>
              <NavDropdown.Item href='#action/3.2'>
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href='#action/3.3'>Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href='#action/3.4'>
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              title='Course Categories'
              id='collasible-nav-dropdown'
              className='pr-5'
            >
              <NavDropdown.Item href='#action/3.1'>Action</NavDropdown.Item>
              <NavDropdown.Item href='#action/3.2'>
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href='#action/3.3'>Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href='#action/3.4'>
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link className='navLinks' href='#features'>
              Resourses
            </Nav.Link>
          </Nav>
        </Container>
        {userInfo && userInfo.isAdmin ? (
          <NavDropdown title='Admin' id='isAdmin'>
            <LinkContainer to='/profile'>
              <NavDropdown.Item>Profile</NavDropdown.Item>
            </LinkContainer>
            <LinkContainer to='/admin/user-list'>
              <NavDropdown.Item>Manage Users</NavDropdown.Item>
            </LinkContainer>
            <LinkContainer to='/admin/course-list'>
              <NavDropdown.Item>Manage Courses</NavDropdown.Item>
            </LinkContainer>
            <NavDropdown.Item onClick={logoutHandler}>Logout</NavDropdown.Item>
          </NavDropdown>
        ) : userInfo ? (
          <NavDropdown title={userInfo.loginName} id='username'>
            <LinkContainer to='/profile'>
              <NavDropdown.Item>Profile</NavDropdown.Item>
            </LinkContainer>
            <NavDropdown.Item onClick={logoutHandler}>Logout</NavDropdown.Item>
          </NavDropdown>
        ) : (
          <Nav>
            <LinkContainer to='/Signup' style={{ backgroundColor: '#005bac' }}>
              <Button>SignUp</Button>
            </LinkContainer>
            <Nav.Link href='/Login' className='navLinks'>
              LogIn
            </Nav.Link>
          </Nav>
        )}
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
