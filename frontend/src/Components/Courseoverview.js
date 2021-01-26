import React from 'react';

import { Image, Media, Card, Row, Col, ListGroup } from 'react-bootstrap';
export default function Courseoverview(props) {
  return (
    <Row>
      <Col md={9}>
        <Media>
          <Image
            className='my-3 p-1 rounded'
            minWidth='12rem'
            minHeight='11rem'
            src={props.courseImg}
            alt='Generic placeholder'
          />
          <Media.Body className='p-3'>
            <h4>{props.courseName}</h4>
            <p className='text-justify'>{props.overview}</p>
          </Media.Body>
        </Media>
      </Col>

      <Col md={3}>
        <Card style={{ marginTop: '4rem' }}>
          <Card.Header style={{ color: '#005bac' }}> Features</Card.Header>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <small style={{ color: '#005bac' }}>
                Course Number: {props.courseNum}
              </small>
            </ListGroup.Item>
            <ListGroup.Item>
              <small style={{ color: '#005bac' }}>Level: {props.level}</small>
            </ListGroup.Item>
            <ListGroup.Item>
              <small style={{ color: '#005bac' }}>
                Language: {props.language}
              </small>
            </ListGroup.Item>
            <ListGroup.Item>
              <small style={{ color: '#005bac' }}>
                Lectures: {props.lectures}
              </small>
            </ListGroup.Item>
            <ListGroup.Item>
              <small style={{ color: '#005bac' }}>Quiz: {props.quiz}</small>
            </ListGroup.Item>
            <ListGroup.Item>
              <small style={{ color: '#005bac' }}>
                Assingments: {props.assingments}
              </small>
            </ListGroup.Item>
            <ListGroup.Item>
              <small style={{ color: '#005bac' }}>Exam: {props.exam}</small>
            </ListGroup.Item>
            <ListGroup.Item>
              <small style={{ color: '#005bac' }}>
                Starting Week: {props.startingWeek}
              </small>
            </ListGroup.Item>
            <ListGroup.Item>
              <small style={{ color: '#005bac' }}>
                Ending Week: {props.endingWeek}{' '}
              </small>
            </ListGroup.Item>
          </ListGroup>
        </Card>
      </Col>
    </Row>
  );
}
