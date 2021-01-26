import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
export default function Announcements(props) {
  return (
    <Card>
      <Card.Header>
        <Row>
          <Col className='float-left'>
            <Row>
              <h3>Welcome Back,</h3>
            </Row>
            <Row>
              <h4>Natasha Romanoff.</h4>
            </Row>
          </Col>
          <Col className='float-right'>
            <strong>your Progress</strong>
          </Col>
        </Row>
      </Card.Header>
      <Card.Body>
        <Row>
          <Col>
            <h1>lorem Lorem lorem loem</h1>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}
