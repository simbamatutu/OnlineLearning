import React from 'react';
import courses from '../Course';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import {
  Container,
  Nav,
  ListGroup,
  Row,
  Col,
  Image,
  Button,
  Card,
} from 'react-bootstrap';

export default function Coursescreen({ match }) {
  const course = courses.find((c) => c._id === match.params.id);
  return (
    <React.Fragment>
      <Header />
      <Container className='p-0 mt-1'>
        <LinkContainer to='/'>
          <Button className=' my-3 btn'>
            <i class='fas fa-long-arrow-alt-left'></i> Back
          </Button>
        </LinkContainer>
        <div className='courseHeader'>
          <h2
            style={{ color: '#fff', paddingTop: '20vh', paddingLeft: '10px' }}
          >
            {course.name}
          </h2>
        </div>
        <Card>
          <Row>
            <Col xs={5}>
              <Image
                className='float-left p-2'
                style={{
                  height: '4rem',
                  width: '4rem',
                }}
                roundedCircle
                src={course.teacherImg}
                alt='teacherImage'
              />

              <div
                className='my-3 text-center'
                style={{ borderRight: '1px solid #bebebe' }}
              >
                <Row>
                  <small>Teacher</small>
                </Row>
                <Row>
                  <small>{course.teacher}</small>
                </Row>
              </div>
            </Col>

            <Col>
              <div
                className='my-3'
                style={{ borderRight: '1px solid #bebebe' }}
              >
                <Row>
                  <small>School</small>
                </Row>
                <Row>
                  <small>{course.school}</small>
                </Row>
              </div>
            </Col>

            <Col>
              <div
                className='my-3'
                style={{ textAlign: 'center', textJustify: 'center' }}
              >
                <Row>
                  <small>Level</small>
                </Row>
                <Row>
                  <small>{course.level}</small>
                </Row>
              </div>
            </Col>

            <Col>
              <Button className='float-right my-3 mx-2'>Enroll</Button>
            </Col>
          </Row>
          <Nav fill variant='tabs' defaultActiveKey='/home'>
            <Nav.Item>
              <Nav.Link href='/home'>Active</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey='link-1'>Loooonger NavLink</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey='link-2'>Link</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey='disabled' disabled>
                Disabled
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Card>
      </Container>
    </React.Fragment>
  );
}
