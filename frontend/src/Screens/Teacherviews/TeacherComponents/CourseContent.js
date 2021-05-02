import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import { Table } from 'react-bootstrap';
import ContentAccordion from './ContentAccordion';
import CourseNameModal from './CourseNameModal';

const CourseContent = () => {
  const [modalShow, setModalShow] = React.useState(false);

  const a = 1;
  return (
    <div>
      {a !== 0 && <ContentAccordion />}

      <tfoot>
        <tr>
          <Link className='p-3' onClick={() => setModalShow(true)}>
            Add Topic
          </Link>
        </tr>
      </tfoot>
      <CourseNameModal show={modalShow} onHide={() => setModalShow(false)} />
    </div>
  );
};

export default CourseContent;
