import React, { useEffect } from 'react';

import Header from '../Components/Header';
import Teacher from '../Components/Teacher';
import Footer from '../Components/Footer';
import { Link } from 'react-router-dom';
import Meta from '../Components/Meta';
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
import { useDispatch, useSelector } from 'react-redux';
import { getCourseDetails } from '../actions/courseActions';
import Loader from '../Components/Loader';
import Message from '../Components/Message';

export default function Coursescreen({ match }) {
  const courseDetails = useSelector((state) => state.courseDetails);
  const { course, error, loading } = courseDetails;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCourseDetails(match.params.id));
  }, [match, dispatch]);

  return (
    <React.Fragment>
      <Header />
      <Meta title={course.courseName} />
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <Container className='p-0 mt-1'>
          <LinkContainer to='/'>
            <Button className=' my-3 btn'>Back</Button>
          </LinkContainer>
          <div className='courseHeader'>
            <h2
              style={{ color: '#fff', paddingTop: '20vh', paddingLeft: '10px' }}
            >
              {course.courseName}
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
                    <small>name</small>
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
                  courseName={course.courseName}
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
      )}
      <Footer />
    </React.Fragment>
  );
}
