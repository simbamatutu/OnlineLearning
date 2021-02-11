import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import { Link } from 'react-router-dom';

import { Container, Button } from 'react-bootstrap';

const teacherHomescreen = () => {
  return (
    <div>
      <Header />
      <Container className='mt-3 pt-3'>
        <Link to='/create-course'>
          <Button variant='primary'>Create</Button>{' '}
        </Link>
      </Container>
      <Footer />
    </div>
  );
};

export default teacherHomescreen;
