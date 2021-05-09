import React, { useEffect } from 'react';
import { Accordion, Button, Card, Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

import { listCoursewares } from '../../../actions/coursewareActions';

import Loader from '../../../Components/Loader';
import { createSubtopic } from '../../../actions/subTopicActions';
import Message from '../../../Components/Message';
import SubtopicsModal from './SubtopicsModal';

const ContentAccordion = ({ courseId }) => {
  const [modalShow, setModalShow] = React.useState(false);
  const dispatch = useDispatch();
  const coursewareList = useSelector((state) => state.coursewareList);
  const { coursewares, loading, error } = coursewareList;

  const subTopicCreate = useSelector((state) => state.subTopicCreate);
  const { subTopic } = subTopicCreate;

  useEffect(() => {
    dispatch(listCoursewares(courseId));
  }, [dispatch, courseId]);

  const createCoursewareHandler = (id) => {
    dispatch(createSubtopic(id));

    setModalShow(true);
  };
  return (
    <>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <>
          {coursewares.map((courseware) => (
            <React.Fragment key={courseware._id}>
              <Accordion>
                <Card>
                  <Accordion.Toggle as={Card.Header} eventKey='0'>
                    {courseware.topicName}
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey='0'>
                    <Card.Body>
                      <Table responsive borderless>
                        <thead>
                          <tr className=' '>
                            <th>Title</th>
                            <th>Type</th>
                            <th>Duration</th>
                            <th>Views</th>
                          </tr>
                        </thead>

                        <tbody>
                          {courseware.subTopics.map((section) => (
                            <tr key={section._id}>
                              <td>{section.subTopicTitle}</td>
                              <td>TBD</td>
                              <td>TBD</td>
                              <td>TBD</td>
                            </tr>
                          ))}
                          <Button
                            variant='link'
                            className='p-3'
                            onClick={() =>
                              createCoursewareHandler(courseware._id)
                            }
                          >
                            Add Sub-Topic
                          </Button>
                        </tbody>
                      </Table>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Accordion>
            </React.Fragment>
          ))}
        </>
      )}
      {subTopic && (
        <SubtopicsModal
          show={modalShow}
          subtopic={subTopic}
          onHide={() => setModalShow(false)}
        />
      )}
    </>
  );
};

export default ContentAccordion;
