import React from 'react';
import { Button, Row, Col, Nav } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Search from '../../../Components/Searchbox';
const TeacherHeader = () => {
  const userDetails = useSelector((state) => state.userDetails);

  return (
    <Nav className='mx-3 my-4'>
      <Col>
        <Button variant='primary' className='btn-sm'>
          Create
          <i className='fas fa-edit'></i>
        </Button>

        <Link to='/create-course'> Import</Link>
      </Col>
      <Col>
        <Row className='d-flex justify-content-end'>
          <Search />
        </Row>
        <Row className='d-flex justify-content-end'>
          <Link className='mr-3'>Filter</Link>
          <Link className='mr-3'>Group by</Link>
          <i className='fas fa-grip-horizontal pr-2 mt-1' />
          <i className='fas fa-list mt-1'></i>
        </Row>
      </Col>
    </Nav>
  );
};

export default TeacherHeader;
