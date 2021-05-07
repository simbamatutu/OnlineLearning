import React from 'react';
import { Card, Row } from 'react-bootstrap';

export default function Discussions(props) {
  return (
    <Card>
      <Card.Body style={{ minHeight: '70vh', paddingBottom: '0' }}>
        <Row className='d-flex justify-content-around '>
          <p className='d-flex align-self-center'>(no forum)</p>
        </Row>
      </Card.Body>
    </Card>
  );
}
