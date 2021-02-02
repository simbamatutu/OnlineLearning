import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Announcements from '../Components/Announcements';
import Lessons from '../Components/Lessons';
import Assignments from '../Components/Assingments';
import Exams from '../Components/Exams';
import Discussions from '../Components/Discussions';
import {
  Container,
  Tab,
  ListGroup,
  Row,
  Nav,
  Col,
  Image,
  Card,
} from 'react-bootstrap';
export default function Courseware({ match }) {
  console.log(match);
  const [course, setCourse] = useState({});

  useEffect(() => {
    const fetchCourse = async () => {
      const { data } = await axios.get(
        `/api/courses/courseware/${match.params.id}`
      );
      setCourse(data);
    };
    fetchCourse();
  }, [match]);
  return (
    <React.Fragment>
      <Header />
      <Container>
        <div className='p-2 m-3'>
          <Tab.Container
            id='left-tabs-example'
            defaultActiveKey='announcements'
          >
            <Row>
              <Card className='m-2'>
                <Col sm={2}>
                  <Nav variant='pills' className='flex-column '>
                    <ListGroup variant='flush'>
                      <ListGroup.Item>
                        <Image
                          width={200}
                          height={160}
                          src={course.courseImage}
                          alt='courseImage'
                        />
                      </ListGroup.Item>
                      <ListGroup.Item className='pt-1 pb-1 pl-0 pr-0'>
                        <Nav.Item>
                          <Nav.Link eventKey='announcements'>
                            Announcements
                          </Nav.Link>
                        </Nav.Item>
                      </ListGroup.Item>
                      <ListGroup.Item className='pt-1 pb-1 pl-0 pr-0'>
                        <Nav.Item>
                          <Nav.Link eventKey='lessons'>Lessons</Nav.Link>
                        </Nav.Item>
                      </ListGroup.Item>
                      <ListGroup.Item className='pt-1 pb-1 pl-0 pr-0'>
                        <Nav.Item>
                          <Nav.Link eventKey='assignments'>
                            Assignments
                          </Nav.Link>
                        </Nav.Item>
                      </ListGroup.Item>
                      <ListGroup.Item className='pt-1 pb-1 pl-0 pr-0'>
                        <Nav.Item>
                          <Nav.Link eventKey='exams'>Exams & Quiz</Nav.Link>
                        </Nav.Item>
                      </ListGroup.Item>
                      <ListGroup.Item className='pt-1 pb-1 pl-0 pr-0'>
                        <Nav.Item>
                          <Nav.Link eventKey='discussions'>
                            Discussions
                          </Nav.Link>
                        </Nav.Item>
                      </ListGroup.Item>
                    </ListGroup>
                  </Nav>
                </Col>
              </Card>
              <Col sm={9}>
                <Tab.Content>
                  <Tab.Pane eventKey='announcements'>
                    <Announcements />
                  </Tab.Pane>
                  <Tab.Pane eventKey='lessons'>
                    <Lessons />
                  </Tab.Pane>
                  <Tab.Pane eventKey='assignments'>
                    <Assignments />
                  </Tab.Pane>
                  <Tab.Pane eventKey='exams'>
                    <Exams />
                  </Tab.Pane>
                  <Tab.Pane eventKey='discussions'>
                    <Discussions />
                  </Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </div>
      </Container>
      <Footer />
    </React.Fragment>
  );
}
