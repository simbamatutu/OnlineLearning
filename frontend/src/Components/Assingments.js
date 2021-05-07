import React from 'react';
import { Row, Card } from 'react-bootstrap';
export default function Assingments(props) {
  return (
    <Card>
      <Card.Body style={{ minHeight: '70vh', paddingBottom: '0' }}>
        <Row className='d-flex justify-content-around '>
          <p className='d-flex align-self-center'>(no assignments)</p>
        </Row>
      </Card.Body>
    </Card>
  );
}
