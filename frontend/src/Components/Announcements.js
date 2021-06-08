import React from 'react';
import { Row, Card } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import Loader from './Loader';
import Message from './Message';
import Progress from '../Screens/Studentviews/StudentComponents/Progress';
export default function Announcements(props) {
  const userDetails = useSelector((state) => state.userLogin);
  const { userInfo, loading, error } = userDetails;
  return (
    <>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <Card>
          <Card.Header>
            <Row className='d-flex justify-content-between'>
              <div>
                <h5>
                  <strong>Welcome Back</strong>
                </h5>
                {userInfo ? (
                  <strong>{userInfo.name}</strong>
                ) : (
                  <strong>Student</strong>
                )}
              </div>
              <div>
                <div>
                  <h6>Progress</h6>
                </div>
                <Progress value={60} />
              </div>
            </Row>
          </Card.Header>
          <Card.Body style={{ minHeight: '70vh', paddingBottom: '0' }}>
            <Row className='d-flex justify-content-around '>
              <p className='d-flex align-self-center'>(no announcements)</p>
            </Row>
          </Card.Body>
        </Card>
      )}
    </>
  );
}
