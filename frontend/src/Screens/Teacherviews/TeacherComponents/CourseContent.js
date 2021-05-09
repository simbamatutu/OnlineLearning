import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createCourseware } from '../../../actions/coursewareActions';

import ContentAccordion from './ContentAccordion';
import CourseNameModal from './CourseNameModal';
import { Button } from 'react-bootstrap';

const CourseContent = ({ courseId }) => {
  const dispatch = useDispatch();
  const coursewareCreate = useSelector((state) => state.coursewareCreate);
  const { courseware } = coursewareCreate;
  const [modalShow, setModalShow] = React.useState(false);

  const createCoursewareHandler = () => {
    dispatch(createCourseware(courseId));
    setModalShow(true);
  };

  return (
    <div>
      <ContentAccordion courseId={courseId} />

      <td>
        <Button
          variant='link'
          className='p-3'
          onClick={() => createCoursewareHandler()}
        >
          Add Topic
        </Button>
      </td>

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
