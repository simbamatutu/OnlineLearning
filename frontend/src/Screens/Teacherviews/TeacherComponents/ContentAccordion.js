import React, { useEffect, useState } from 'react';
import { Accordion, Card, Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { listCoursewares } from '../../../actions/coursewareActions';
import {
  createSubtopic,
  listSubTopics,
} from '../../../actions/subTopicActions';
import Loader from '../../../Components/Loader';
import { COURSEWARE_LIST_RESET } from '../../../constants/coursewarecontants';
import Subtopics from './Subtopics';
import SubtopicsModal from './SubtopicsModal';

const ContentAccordion = ({ courseId }) => {
  const [modalShow, setModalShow] = React.useState(false);
  const dispatch = useDispatch();
  const coursewareList = useSelector((state) => state.coursewareList);
  const { loading, error, coursewares } = coursewareList;
  const [coursewareId, setcoursewareId] = useState('');
  const subTopicList = useSelector((state) => state.subTopicList);
  const {
    loading: loadingSubTopic,
    error: errorSubTopic,
    subTopics,
  } = subTopicList;

  const subTopicCreate = useSelector((state) => state.subTopicCreate);
  const {
    loading: subTopicLoading,
    error: subTopicError,
    success: subTopicSuccess,
    subTopic,
  } = subTopicCreate;
  console.log(coursewares);

  useEffect(() => {
    dispatch(listCoursewares(courseId));
  }, [dispatch, courseId]);

  const createCoursewareHandler = (id, courseware) => {
    //setcourseSub(courseware);
    dispatch(createSubtopic(id));

    setModalShow(true);
  };
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

      {subTopic && (
        <SubtopicsModal
          show={modalShow}
          subtopic={subTopic}
          onHide={() => setModalShow(false)}
        />
      )}
    </Table>
  );
};

export default ContentAccordion;
