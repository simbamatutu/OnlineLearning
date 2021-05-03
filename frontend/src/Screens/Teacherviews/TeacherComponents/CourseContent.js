import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateCourse } from '../../../actions/courseActions';
import { Link } from 'react-router-dom';
import { COURSE_UPDATE_RESET } from '../../../constants/courseContants';
import ContentAccordion from './ContentAccordion';
import CourseNameModal from './CourseNameModal';

const CourseContent = () => {
  const dispatch = useDispatch();
  const courseDetails = useSelector((state) => state.courseDetails);
  const { loading, error, course } = courseDetails;
  const [modalShow, setModalShow] = React.useState(false);
  const courseUpdate = useSelector((state) => state.courseUpdate);
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = courseUpdate;
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
