import React, { useEffect } from 'react';

import { Tab, Tabs, Card, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { listCoursewares } from '../actions/coursewareActions';
import { listSubTopics } from '../actions/subTopicActions';
import Loader from './Loader';
import Message from './Message';
const Lessons = ({ courseId }) => {
  const subTopicList = useSelector((state) => state.subTopicList);
  const { subTopics } = subTopicList;
  const coursewareList = useSelector((state) => state.coursewareList);
  const { coursewares, loading, error } = coursewareList;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listCoursewares(courseId));
    dispatch(listSubTopics());
  }, [dispatch, courseId]);

  return (
    <Card>
      <Form className='pt-2 pl-2 pb-2'>
        <Form.Row>
          {loading ? (
            <Loader />
          ) : error ? (
            <Message variant='danger'>{error}</Message>
          ) : (
            <>
              {coursewares &&
                coursewares.map((chapter) => (
                  <React.Fragment key={chapter._id}>
                    <option>{chapter.topicName}</option>
                    <Form.Group
                      controlId='topicDropdown'
                      className='pr-2 pb-1 mb-0'
                    >
                      <Form.Label className='m-0'>Chapter</Form.Label>

                      <Form.Control
                        as='select'
                        defaultValue='Choose...'
                        className='p-1'
                      ></Form.Control>
                    </Form.Group>

                    <Form.Group
                      controlId='subTopicDown'
                      className='pr-2 pb-1 mb-0'
                    >
                      <Form.Label className='m-0'>Section</Form.Label>
                      <Form.Control
                        as='select'
                        defaultValue='Choose...'
                        className='p-1'
                      >
                        {subTopics.map((section) => (
                          <React.Fragment key={section._id}>
                            {section.courseware === courseId && (
                              <option>{section.subTopicTitle}</option>
                            )}
                          </React.Fragment>
                        ))}
                      </Form.Control>
                    </Form.Group>
                  </React.Fragment>
                ))}
            </>
          )}
        </Form.Row>
      </Form>
      <Tabs
        fill
        variant='pills'
        defaultActiveKey='video'
        className='m-0'
        id='courseware-tab'
      >
        <Tab eventKey='video' title='Media' style={{ minHeight: '70vh' }}></Tab>
        <Tab
          eventKey='ppt'
          title='Document'
          style={{ minHeight: '70vh' }}
        ></Tab>
      </Tabs>
    </Card>
  );
};

export default Lessons;
{
  /*
  subTopics.map((subTopic) => (
    <tr key={subTopic._id}>
      {subTopic.courseware === id && (
        <>
          <td className='pr-5'>{subTopic.subTopicTitle}</td>
          <td className='pr-5'>TBD</td>
          <td>TBD</td>
          <td>TBD</td>
        </>
      )}
    </tr>
  ));

  ///////////////////
  {coursewares ? (
        coursewares.map((courseware) => ( )
          <>
            <React.Fragment key={courseware._id} />
            <Accordion>
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey='0'>
                  {courseware.topicName}
      */
}
