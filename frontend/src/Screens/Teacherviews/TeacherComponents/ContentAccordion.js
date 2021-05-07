import React, { useEffect } from 'react';
import { Accordion, Card, Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

import { listCoursewares } from '../../../actions/coursewareActions';

import Loader from '../../../Components/Loader';

import Subtopics from './Subtopics';

const ContentAccordion = ({ courseId }) => {
  const dispatch = useDispatch();
  const coursewareList = useSelector((state) => state.coursewareList);
  const { coursewares } = coursewareList;

  useEffect(() => {
    dispatch(listCoursewares(courseId));
  }, [dispatch, courseId]);

  return (
    <Table responsive>
      {coursewares ? (
        coursewares.map((courseware) => (
          <>
            <React.Fragment key={courseware._id} />
            <Accordion>
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey='0'>
                  {courseware.topicName}
                </Accordion.Toggle>
                <Accordion.Collapse eventKey='0'>
                  <Card.Body>
                    {courseware ? (
                      <Subtopics id={courseware._id} />
                    ) : (
                      <Loader />
                    )}
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          </>
        ))
      ) : (
        <Loader />
      )}
    </Table>
  );
};

export default ContentAccordion;
