import React from 'react';
import { Media, Image } from 'react-bootstrap';

function Teacher(props) {
  return (
    <div>
      <Media>
        <Image
          width={160}
          height={160}
          className='p-2'
          roundedCircle
          src={props.teacherImg}
          alt='Generic placeholder'
        />
        <Media.Body className='p-3'>
          <h4>{props.teacherName}</h4>
          <p>{props.teacherIntro}</p>
        </Media.Body>
      </Media>
    </div>
  );
}

export default Teacher;
