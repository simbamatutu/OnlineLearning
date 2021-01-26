import React from 'react';
import { Link, Route } from 'react-router-dom';
import {
  Tabs,
  Tab,
  Form,
  Button,
  Col,
  InputGroup,
  FormControl,
} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';
import './auth.css';
import Logo from '../img/fullLogo.png';

const userIcon = <FontAwesomeIcon icon={faUser} className='icon' />;

const lockIco = <FontAwesomeIcon icon={faLock} className='icon' />;
const Login = () => {
  return (
    <Route path='/Login'>
      {' '}
      <div className='loginScreen'>
        <Col
          className='login'
          md={{ span: 4, offset: 9 }}
          sm={{ span: 3, offset: 2 }}
          lg={{ span: 4, offset: 9 }}
          xs={{ span: 'auto' }}
        >
          <img
            src={Logo}
            alt='log'
            className='logoImg'
            style={{ width: '100%', height: '3.4rem' }}
          />

          <h3 style={{ 'margin-top': '20vh', color: 'white' }} className='mb-3'>
            Login Page
          </h3>

          <Form className='authForm mt-4'>
            <Tabs id='uncontrolled-tab-example' className='mb-4'>
              <Tab eventKey='' title='Student'></Tab>
              <Tab eventKey='profile' title='Teacher'></Tab>
            </Tabs>
            <Form.Group controlId='formBasicEmail'>
              <InputGroup className='mb-3'>
                <InputGroup.Prepend>
                  <InputGroup.Text
                    id='basic-addon1'
                    style={{ backgroundColor: '#005bac', border: 'none' }}
                  >
                    {userIcon}
                  </InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                  placeholder='Enter Username'
                  aria-label='Username'
                  aria-describedby='basic-addon1'
                />
              </InputGroup>
              <InputGroup className='mb-3'>
                <InputGroup.Prepend>
                  <InputGroup.Text
                    id='basic-addon1'
                    style={{ backgroundColor: '#005bac', border: 'none' }}
                  >
                    {lockIco}
                  </InputGroup.Text>
                </InputGroup.Prepend>
                <Form.Control type='password' placeholder='Confrim Password' />
              </InputGroup>
              <Form.Check
                type='checkbox'
                label='Remember Password.'
                style={{
                  color: 'white',
                  fontSize: '2ch',
                }}
              />
              <Button
                style={{
                  backgroundColor: '#005bac',
                  border: 'none',
                  borderRadius: '3%',
                  font: 'Nunito',
                  fontSize: '2.5ch',
                  fontWeight: '600',
                  paddingBottom: '7px',
                  letterSpacing: '3px',
                }}
                type='submit'
                className='mt-3'
                block
              >
                Login
              </Button>
              <div className='mt-3 text-right'>
                <span className='pr-3'>
                  <Link to='#'>Forgot Password?</Link>
                </span>
                <span>
                  <Link to='/Signup'>Sign Up</Link>
                </span>
              </div>
            </Form.Group>
          </Form>
          <div className='fixed-bottom p-1' style={{ color: 'whitesmoke' }}>
            <hr />
            <p>
              International Division, Beihang University 37 Xueyuan Road,
              Haidian District, Beijing 100191, P.R.China COPYRIGHT 2021
              AlphaCentauri. All Rights Reserved.
            </p>
          </div>
        </Col>
      </div>
    </Route>
  );
};
export default Login;
