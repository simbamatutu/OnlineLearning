import React from 'react';
import {
  Row,
  Form,
  Button,
  Col,
  InputGroup,
  FormControl,
} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEnvelope,
  faUser,
  faMobile,
  faUserGraduate,
  faLock,
} from '@fortawesome/free-solid-svg-icons';
import Logo from '../resourses/logo (1).png';

const userIcon = <FontAwesomeIcon icon={faUser} className='icon' />;
const mailIco = <FontAwesomeIcon icon={faEnvelope} className='icon' />;
const phoneIco = <FontAwesomeIcon icon={faMobile} className='icon' />;
const studentIco = <FontAwesomeIcon icon={faUserGraduate} className='icon' />;
const lockIco = <FontAwesomeIcon icon={faLock} className='icon' />;

export default function Signup() {
  return (
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
          style={{ width: '70%', height: '3.4rem' }}
        />

        <h3 style={{ 'margin-top': '5vh', color: 'white' }} className='mb-5'>
          Register
        </h3>

        <Form className='authForm mt-4'>
          <Form.Group controlId='formBasicName'>
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
                  {mailIco}
                </InputGroup.Text>
              </InputGroup.Prepend>
              <Form.Control
                type='email'
                placeholder='Enter Email'
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
                  {phoneIco}
                </InputGroup.Text>
              </InputGroup.Prepend>
              <Form.Control type='number' placeholder='Enter Phone Number' />
            </InputGroup>
            <Row>
              <Form.Check
                type='checkbox'
                label='Student'
                className='ml-3 mr-4 mb-3'
                style={{
                  color: 'white',
                  fontSize: '2ch',
                }}
              />

              <Form.Check
                type='checkbox'
                className='ml-6 mb-3'
                label='Teacher'
                style={{
                  color: 'white',
                  fontSize: '2ch',
                }}
              />
            </Row>

            <InputGroup className='mb-3'>
              <InputGroup.Prepend>
                <InputGroup.Text
                  id='basic-addon1'
                  style={{ backgroundColor: '#005bac', border: 'none' }}
                >
                  {studentIco}
                </InputGroup.Text>
              </InputGroup.Prepend>
              <Form.Control type='number' placeholder='Student Number' />
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
              <Form.Control type='password' placeholder='Enter Password' />
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
              className='mt-5'
              block
            >
              Login
            </Button>
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
              Back
            </Button>
          </Form.Group>
        </Form>
        <div className='fixed-bottom p-1' style={{ color: 'whitesmoke' }}>
          <hr />
          <p>
            International Division, Beihang University 37 Xueyuan Road, Haidian
            District, Beijing 100191, P.R.China COPYRIGHT 2021 AlphaCentauri.
            All Rights Reserved.
          </p>
        </div>
      </Col>
    </div>
  );
}
