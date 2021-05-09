import React, { useEffect, useState } from 'react';

import { Tab, Tabs, Card, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { listCoursewares } from '../actions/coursewareActions';
import { getSectionDetails } from '../actions/subTopicActions';
import Loader from './Loader';
import Message from './Message';
import Videoplayer from './Videoplayer';
import Documentviewer from './Documentviewer';
const Lessons = ({ courseId }) => {
  const coursewareList = useSelector((state) => state.coursewareList);
  const { coursewares, loading, error } = coursewareList;

  const sectionDetails = useSelector((state) => state.sectionDetails);
  const {
    section,
    loading: sectionLoading,
    error: sectionError,
  } = sectionDetails;

  const [chapter, setchapter] = useState([]);
  const [subTopic, setsubTopic] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listCoursewares(courseId));
    dispatch(getSectionDetails(subTopic));
  }, [dispatch, courseId, subTopic]);
  const chapterHandler = (e) => {
    setchapter(e.target.value);
  };
  const subTopicHandler = (e) => {
    setsubTopic(e.target.value);
  };

  return (
    <Card className='pl-1'>
      <Form className='pt-2 pl-2 pb-2'>
        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant='danger'>{error}</Message>
        ) : (
          <Form.Row>
            <Form.Group controlId='topicDropdown' className='pr-2 pb-1 mb-0'>
              <Form.Label className='m-0'>Chapter</Form.Label>
              <Form.Control
                as='select'
                defaultValue='Choose...'
                className='p-1'
                onChange={chapterHandler}
              >
                {coursewares.map((chapter) => (
                  <option key={chapter._id} value={chapter}>
                    {chapter.topicName}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>

            <Form.Group controlId='sectionDropdown' className='pr-2 pb-1 mb-0'>
              <Form.Label className='m-0'>Section</Form.Label>
              <Form.Control
                as='select'
                defaultValue='Choose...'
                className='p-1'
                onChange={subTopicHandler}
              >
                {coursewares.map((chapter) =>
                  chapter.subTopics.map((title) => (
                    <option key={title._id} value={title._id}>
                      {title.subTopicTitle}
                    </option>
                  ))
                )}
              </Form.Control>
            </Form.Group>
          </Form.Row>
        )}
      </Form>
      <Tabs
        fill
        variant='pills'
        defaultActiveKey='video'
        className='m-0'
        id='courseware-tab'
      >
        <Tab
          eventKey='video'
          title='Media'
          className='p-1'
          style={{ minHeight: '70vh' }}
        >
          {section && (
            <Videoplayer url={'https://www.youtube.com/watch?v=Rq5SEhs9lws'} />
          )}
        </Tab>
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
