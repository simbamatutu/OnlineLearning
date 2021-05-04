import React, { useEffect, useState } from 'react';
import { Accordion, Card, Table } from 'react-bootstrap';
import Loader from '../../../Components/Loader';
import { Link } from 'react-router-dom';
import {
  createSubtopic,
  listSubTopics,
} from '../../../actions/subTopicActions';
import { useDispatch, useSelector } from 'react-redux';
import SubtopicsModal from './SubtopicsModal';
const Subtopics = ({ ...props }) => {
  const [modalShow, setModalShow] = React.useState(false);
  const dispatch = useDispatch();
  const subTopicList = useSelector((state) => state.subTopicList);
  const {
    loading: loadingSubTopic,
    error: errorSubTopic,
    subTopics,
  } = subTopicList;
  const id = props.id;
  console.log(id);
  const subTopicCreate = useSelector((state) => state.subTopicCreate);
  const {
    loading: subTopicLoading,
    error: subTopicError,
    success: subTopicSuccess,
    subTopic,
  } = subTopicCreate;

  const createCoursewareHandler = (id) => {
    dispatch(createSubtopic(id));

    setModalShow(true);
  };
  useEffect(() => {
    dispatch(listSubTopics(id));
  }, [dispatch, id]);
  return (
    <div>
      <Table responsive borderless>
        <thead>
          <tr>
            <th className='pr-5'>Title</th>
            <th className='pl-5'>Type</th>
            <th>Duration</th>
            <th>Views</th>
          </tr>
        </thead>
        <tbody>
          {subTopics ? (
            subTopics.map((subTopic) => (
              <tr key={subTopic._id}>
                <td className='pr-5'>{subTopic.subTopicTitle}</td>
                <td className='pr-5'>TBD</td>
                <td>TBD</td>
                <td>TBD</td>
              </tr>
            ))
          ) : (
            <Loader />
          )}
        </tbody>
        <tfoot>
          <tr>
            <Link
              className='p-3'
              onClick={() => createCoursewareHandler(props.id)}
            >
              Add Sub-Topic
            </Link>
          </tr>
        </tfoot>
      </Table>
      {subTopic && (
        <SubtopicsModal
          show={modalShow}
          subtopic={subTopic}
          onHide={() => setModalShow(false)}
        />
      )}
    </div>
  );
};

export default Subtopics;
