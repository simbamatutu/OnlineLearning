import React from 'react';
import { Link, Route } from 'react-router-dom';
import { Button, Card } from 'react-bootstrap';

function Coursecard(props) {
  return (
    <Card
      className='my-3 p-1 rounded'
      style={{
        boxShadow: '0 5px 7px -5px black',
      }}
    >
      <Link to={`/course/${props.course._id}`}>
        <Card.Img
          variant='top'
          src={props.course.courseImage}
          alt='CoursePic'
          style={{ maxHeight: '11rem', maxWidth: '14rem' }}
        />
      </Link>
      <Card.Body className='p-0'>
        <Card.Title as='span' className='d-flex justify-content-between'>
          <Link
            to={`/course/${props.course._id}`}
            style={{ color: 'inherit', textDecoration: 'none' }}
          >
            <strong>{props.course.name}</strong>{' '}
          </Link>
          <small>{props.course.courseNum}</small>
        </Card.Title>

        <Card.Text as='span'>
          {props.course.category.map((cat) => (
            <Link
              to={`/Category/${cat}`}
              style={{ textDecoration: 'none', color: 'white' }}
            >
              <small
                className='rounded'
                style={{
                  backgroundColor: '#17a2b8',
                  fontSize: '1ch',
                  padding: '0.4ch',
                  marginRight: '4px',
                  fontWeight: '400',
                  border: 'none',
                  lineHeight: '0',
                }}
              >
                {cat}
              </small>
            </Link>
          ))}
        </Card.Text>
        <Card.Text
          as='div'
          className='mt-1'
          style={{ color: '#bebebe', fontSize: '1ch' }}
        >
          <i class='fas fa-user-graduate'></i>
          <span className='pl-2'>{props.course.enrolled}</span>
        </Card.Text>
      </Card.Body>
      <Card.Footer
        className='text-center mt-2'
        style={{ backgroundColor: 'white' }}
      >
        <Link to={`/course/${props.course._id}`}>
          <Button
            style={{ backgroundColor: '#005bac', border: 'none' }}
            disabled={props.course.maxCapacity <= props.course.enrolled}
          >
            Enroll
          </Button>
        </Link>
      </Card.Footer>
    </Card>
  );
}

export default Coursecard;
