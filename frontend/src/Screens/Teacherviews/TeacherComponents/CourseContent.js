import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createCourseware } from '../../../actions/coursewareActions';
import { Link } from 'react-router-dom';

import ContentAccordion from './ContentAccordion';
import CourseNameModal from './CourseNameModal';

const CourseContent = ({ courseId }) => {
  const dispatch = useDispatch();
  const coursewareCreate = useSelector((state) => state.coursewareCreate);
  const { loading, error, success, courseware } = coursewareCreate;
  const [modalShow, setModalShow] = React.useState(false);

  const createCoursewareHandler = () => {
    dispatch(createCourseware(courseId));
    setModalShow(true);
  };
  return (
    <div>
      <ContentAccordion courseId={courseId} />

      <tfoot>
        <tr>
          <Link className='p-3' onClick={() => createCoursewareHandler()}>
            Add Topic
          </Link>
        </tr>
      </tfoot>
      {courseware && (
        <CourseNameModal
          show={modalShow}
          onHide={() => setModalShow(false)}
          courseware={courseware}
        />
      )}
    </div>
  );
};

export default CourseContent;
