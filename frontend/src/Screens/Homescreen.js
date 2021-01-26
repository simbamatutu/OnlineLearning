import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

import Coursecard from '../Components/Coursecard';
import {
  Container,
  Col,
  Row,
  Button,
  Nav,
  CardGroup,
  Card,
} from 'react-bootstrap';

export default function Homescreen() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      const { data } = await axios.get('/api/courses');
      setCourses(data);
    };
    fetchCourses();
  }, []);
  return (
    <React.Fragment>
      <Header />
      <div className='Hero'>
        <Container className='pt-5'>
          <Row>
            <Col sm={12} md={6} lg={9}>
              <h2
                style={{
                  fontFamily: 'Roboto',
                  fontWeight: '600',
                  letterSpacing: '0.2ch',
                  color: 'whitesmoke',
                  fontSize: '30px',
                  paddingBottom: '8px',
                }}
              >
                Beihang University
              </h2>

              <p
                style={{
                  fontWeight: '500',
                  fontSize: '20px',
                  letterSpacing: '0.1ch',
                  color: 'whitesmoke',
                }}
              >
                Knowledge,Discovery,<br></br> Engagement.
              </p>

              <Button
                className='exploreBtn'
                style={{
                  backgroundColor: '#005bac',
                  border: 'none',
                }}
              >
                Explore Courses.
              </Button>
            </Col>

            <Col>
              <Row>
                <Card
                  style={{
                    maxWidth: '3.8rem',
                    maxHeight: '3.4rem',
                    cursor: 'pointer',
                  }}
                  className='p-0 m-3'
                >
                  <Card.Body className='text-center pt-2 pl-0 pr-0'>
                    <i
                      class='fas fa-file-code'
                      style={{ fontSize: '1.9ch', color: '#005bac' }}
                    ></i>
                    <br />
                    <p
                      style={{
                        color: '#005bac',
                        fontSize: '1ch',
                        fontWeight: '400',
                      }}
                    >
                      Programming
                    </p>
                  </Card.Body>
                </Card>

                <Card
                  style={{
                    width: '3.8rem',
                    height: '3.4rem',
                    cursor: 'pointer',
                  }}
                  className='p-0 m-3'
                >
                  <Card.Body className='text-center pt-2 pl-0 pr-0'>
                    <i
                      class='fas fa-plane'
                      style={{ fontSize: '1.9ch', color: '#005bac' }}
                    ></i>
                    <br />
                    <p
                      style={{
                        color: '#005bac',
                        fontSize: '1ch',
                        fontWeight: '400',
                      }}
                    >
                      Aeronautics
                    </p>
                  </Card.Body>
                </Card>

                <Card
                  style={{
                    width: '3.8rem',
                    height: '3.4rem',
                    cursor: 'pointer',
                  }}
                  className='p-0 m-3'
                >
                  <Card.Body className='text-center pt-2 pl-0 pr-0'>
                    <i
                      class='fas fa-space-shuttle'
                      style={{ fontSize: '1.9ch', color: '#005bac' }}
                    ></i>
                    <br />
                    <p
                      style={{
                        color: '#005bac',
                        fontSize: '1ch',
                        fontWeight: '400',
                      }}
                    >
                      Astronautics
                    </p>
                  </Card.Body>
                </Card>
              </Row>
              <Row>
                <Card
                  style={{
                    width: '3.8rem',
                    height: '3.4rem',
                    cursor: 'pointer',
                  }}
                  className=' m-3'
                >
                  <Card.Body className='text-center pt-2 pl-0 pr-0'>
                    <i
                      class='fas fa-briefcase'
                      style={{ fontSize: '1.9ch', color: '#005bac' }}
                    ></i>
                    <br />
                    <p
                      style={{
                        color: '#005bac',
                        fontSize: '1ch',
                        fontWeight: '400',
                      }}
                    >
                      Business
                    </p>
                  </Card.Body>
                </Card>

                <Card
                  style={{
                    width: '3.8rem',
                    height: '3.4rem',
                    cursor: 'pointer',
                  }}
                  className=' m-3'
                >
                  <Card.Body className='text-center pt-2 pl-0 pr-0'>
                    <i
                      class='fas fa-hammer'
                      style={{ fontSize: '1.9ch', color: '#005bac' }}
                    ></i>
                    <br />
                    <p
                      style={{
                        color: '#005bac',
                        fontSize: '1ch',
                        fontWeight: '400',
                      }}
                    >
                      Engineering
                    </p>
                  </Card.Body>
                </Card>

                <Card
                  style={{
                    width: '3.8rem',
                    height: '3.4rem',
                    cursor: 'pointer',
                  }}
                  className=' m-3'
                >
                  <Card.Body className='text-center pt-2 pl-0 pr-0'>
                    <i
                      class='fas fa-calculator'
                      style={{ fontSize: '1.9ch', color: '#005bac' }}
                    ></i>
                    <br />
                    <p
                      style={{
                        color: '#005bac',
                        fontSize: '1ch',
                        fontWeight: '400',
                      }}
                    >
                      Mathematics
                    </p>
                  </Card.Body>
                </Card>
              </Row>
              <Row>
                <Card
                  style={{
                    width: '3.8rem',
                    height: '3.4rem',
                    cursor: 'pointer',
                  }}
                  className='p-0 m-3'
                >
                  <Card.Body className='text-center pt-2 pl-0 pr-0'>
                    <i
                      class='fas fa-drafting-compass'
                      style={{ fontSize: '1.9ch', color: '#005bac' }}
                    ></i>
                    <br />
                    <p
                      style={{
                        color: '#005bac',
                        fontSize: '1ch',
                        fontWeight: '400',
                      }}
                    >
                      Design
                    </p>
                  </Card.Body>
                </Card>

                <Card
                  style={{
                    width: '3.8rem',
                    height: '3.4rem',
                    cursor: 'pointer',
                  }}
                  className='  m-3'
                >
                  <Card.Body className='text-center pt-2 pl-0 pr-0'>
                    <i
                      class='fas fa-language'
                      style={{ fontSize: '1.9ch', color: '#005bac' }}
                    ></i>
                    <br />
                    <p
                      style={{
                        color: '#005bac',
                        fontSize: '1ch',
                        fontWeight: '400',
                      }}
                    >
                      Languages
                    </p>
                  </Card.Body>
                </Card>

                <Card
                  style={{
                    width: '3.8rem',
                    height: '3.4rem',
                    cursor: 'pointer',
                  }}
                  className='p-0 m-3'
                >
                  <Card.Body className='text-center pt-2 pl-0 pr-0'>
                    <i
                      class='fas fa-hand-holding-water'
                      style={{ fontSize: '1.9ch', color: '#005bac' }}
                    ></i>
                    <br />
                    <p
                      style={{
                        color: '#005bac',
                        fontSize: '1ch',
                        fontWeight: '400',
                      }}
                    >
                      Humanities
                    </p>
                  </Card.Body>
                </Card>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
      <Container className='activityIndicators'>
        <Row md={12} lg={4} className='row d-flex justify-content-center'>
          <CardGroup
            style={{ boxShadow: '0 5px 7px -5px black' }}
            className='align-center activitycards'
          >
            <Card className='text-center' style={{ borderRadius: '0' }}>
              <Card.Body>
                <Card.Title style={{ color: '#005bac' }}>200</Card.Title>
              </Card.Body>
              <Card.Subtitle>
                Online <br /> Courses
              </Card.Subtitle>
            </Card>
            <Card className='text-center' style={{ borderRadius: '0' }}>
              <Card.Body>
                <Card.Title style={{ color: '#005bac' }}>200</Card.Title>
              </Card.Body>
              <Card.Subtitle>
                Online <br /> Students
              </Card.Subtitle>
            </Card>
            <Card className='text-center' style={{ borderRadius: '0' }}>
              <Card.Body>
                <Card.Title style={{ color: '#005bac' }}>200</Card.Title>
              </Card.Body>
              <Card.Subtitle>
                Online <br /> Teachers
              </Card.Subtitle>
            </Card>
          </CardGroup>
        </Row>
      </Container>
      <br />
      <Container className='middleTab'>
        <Nav
          variant='tabs'
          defaultActiveKey='/home'
          className='row d-flex justify-content-center'
        >
          <Nav.Item>
            <Nav.Link href='/home'>Trending</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey='link-1'>Most Popular</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey='link-2'>Most Recent</Nav.Link>
          </Nav.Item>
        </Nav>
        <CardGroup style={{ margin: '3rem' }}>
          <Row>
            {courses.map((course) => (
              <Col sm={12} md={6} lg={4} xl={3}>
                <Coursecard course={course} />
              </Col>
            ))}
          </Row>
        </CardGroup>
      </Container>
      <Footer />
    </React.Fragment>
  );
}
