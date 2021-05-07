import React, { useEffect } from 'react';
import { Button, Table } from 'react-bootstrap';

import {
  createSubtopic,
  listSubTopics,
} from '../../../actions/subTopicActions';
import { useDispatch, useSelector } from 'react-redux';
import SubtopicsModal from './SubtopicsModal';
import Loader from '../../../Components/Loader';
import Message from '../../../Components/Message';
const Subtopics = ({ ...props }) => {
  const [modalShow, setModalShow] = React.useState(false);
  const dispatch = useDispatch();
  const subTopicList = useSelector((state) => state.subTopicList);
  const { subTopics } = subTopicList;
  const id = props.id;

  const subTopicCreate = useSelector((state) => state.subTopicCreate);
  const { subTopic } = subTopicCreate;

  const createCoursewareHandler = (id) => {
    dispatch(createSubtopic(id));

    setModalShow(true);
  };
  useEffect(() => {
    dispatch(listSubTopics());
  }, [dispatch, id]);
  return (
    <div>
      {subTopics ? (
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
            {subTopics.map((subTopic) => (
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
            ))}
          </tbody>
          <tfoot>
            <td>
              <Button
                variant='link'
                className='p-3'
                onClick={() => createCoursewareHandler(props.id)}
              >
                Add Sub-Topic
              </Button>
            </td>
          </tfoot>
        </Table>
      ) : (
        <Loader />
      )}
      {subTopic ? (
        <SubtopicsModal
          show={modalShow}
          subtopic={subTopic}
          onHide={() => setModalShow(false)}
        />
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default Subtopics;
