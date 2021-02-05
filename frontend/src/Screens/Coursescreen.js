import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../Components/Header';
import Teacher from '../Components/Teacher';
import Footer from '../Components/Footer';
import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import {
  Container,
  Tab,
  Row,
  Tabs,
  Col,
  Image,
  Button,
  Card,
} from 'react-bootstrap';
import Courseoverview from '../Components/Courseoverview';

export default function Coursescreen({ match }) {
  const [course, setCourse] = useState({});

  useEffect(() => {
    const fetchCourse = async () => {
      const { data } = await axios.get(`/api/courses/${match.params.id}`);
      setCourse(data);
    };
    fetchCourse();
  }, [match]);
  /*{const overviewIcon = (
    <i class='fas fa-bookmark' style={{ color: '#005bac' }}></i>
  );
  const curriculumIcon = (
    <i class='fas fa-cubes' style={{ color: '#005bac' }}></i>
  );
  const resourcesIcon = (
    <i class='fas fa-book-reader' style={{ color: '#005bac' }}></i>
  );*/

  return (
    <React.Fragment>
      <Header />
      <Container className='p-0 mt-1'>
        <LinkContainer to='/'>
          <Button className=' my-3 btn'>Back</Button>
        </LinkContainer>
        <div className='courseHeader'>
          <h2
            style={{ color: '#fff', paddingTop: '20vh', paddingLeft: '10px' }}
          >
            {course.name}
          </h2>
        </div>
        <Card className='p-3 mr-3 mb-3'>
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
              <Link to={`/courses/courseware/${match.params.id}`}>
                <Button
                  style={{ backgroundColor: '#005bac', border: 'none' }}
                  className='float-right my-3 mx-2'
                >
                  Enroll
                </Button>
              </Link>
            </Col>
          </Row>
          <Tabs
            fill
            defaultActiveKey='overview'
            id='uncontrolled-tab-example'
            className='my-4'
            style={{ borderBottom: 'solid 1px #bebebe' }}
          >
            <Tab eventKey='overview' title='Overview'>
              <Courseoverview
                overview={course.overview}
                school={course.school}
                courseName={course.name}
                courseImg={course.courseImage}
                level={course.level}
                courseNum={course.courseNum}
                lectures={course.lectures}
                quiz={course.quiz}
                startingWeek={course.startingWeek}
                endingWeek={course.endingWeek}
                exam={course.exam}
                language={course.language}
                assingments={course.assingments}
              />
            </Tab>
            <Tab eventKey='curriculum' title='Curriculum'>
              <p></p>
            </Tab>
            <Tab eventKey='teacher' title='Teacher'>
              <Teacher
                teacherIntro={course.teacherIntro}
                teacherImg={course.teacherImg}
                teacherName={course.teacher}
              />
            </Tab>
            <Tab eventKey='resources' title='Resources'>
              <p>{course.teacherIntro}</p>
            </Tab>
          </Tabs>
        </Card>

        <div>
          {/* {course.category.map((cat) => (
            <Link
              to={`/Category/${cat}`}
              style={{
                textDecoration: 'none',
                color: 'white',
              }}
            >
              <small
                className='rounded'
                style={{
                  backgroundColor: '#17a2b8',
                  fontSize: '2ch',
                  padding: '0.4ch',
                  marginRight: '4px',

                  fontWeight: '400',
                  border: 'none',
                  lineHeight: '0',
                }}
              >
                #{cat}
              </small>
            </Link>
              ))} */}
        </div>
      </Container>
      <Footer />
    </React.Fragment>
  );
}
