import React from 'react';
import courses from '../Course';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import { Container, Nav, ListGroup, Button, Card } from 'react-bootstrap';

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
            style={{ color: '#fff', paddingTop: '23vh', paddingLeft: '10px' }}
          >
            {course.name}
          </h2>
        </div>
        <Card>
          <Card.Header>{course.name}</Card.Header>
        </Card>
      </Container>
    </React.Fragment>
  );
}
