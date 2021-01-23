import React, { Component } from 'react';
import { LinkContainer } from 'react-router-bootstrap';

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
import fullLogo from '../resourses/logo (1).png';
import miniLogo from '../resourses/logo.png';

const width =
  window.innerWidth ||
  document.documentElement.clientWidth ||
  document.body.clientWidth;

console.log(width);

export class Header extends Component {
  render() {
    return (
      <Navbar
        collapseOnSelect
        expand='lg'
        style={{ boxShadow: '0 4px 4px -6px black', color: 'black' }}
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
                <NavDropdown.Item href='#action/3.3'>
                  Something
                </NavDropdown.Item>
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
                <NavDropdown.Item href='#action/3.3'>
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href='#action/3.4'>
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link className='navLinks' href='#features'>
                Resourses
              </Nav.Link>
            </Nav>
            <Form inline>
              <InputGroup>
                <FormControl
                  placeholder='Search'
                  aria-label='Search Course'
                  aria-describedby='basic-addon1'
                  style={{ border: '1px solid #005bac' }}
                />

                <InputGroup.Append>
                  <InputGroup.Text
                    id='basic-addon1'
                    style={{
                      backgroundColor: '#005bac',
                      border: '1px solid #005bac',
                    }}
                  >
                    <i
                      className='fas fa-search'
                      style={{ color: 'whitesmoke' }}
                    />
                  </InputGroup.Text>
                </InputGroup.Append>
              </InputGroup>
            </Form>
          </Container>
          <Nav>
            <LinkContainer to='/Signup' style={{ backgroundColor: '#005bac' }}>
              <Button>Sign Up</Button>
            </LinkContainer>
            <Nav.Link href='/Login' className='navLinks'>
              Log In
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Header;
