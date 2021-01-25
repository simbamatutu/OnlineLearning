import React from 'react';

import {
  Container,
  Tab,
  ListGroup,
  Row,
  Nav,
  Tabs,
  Col,
  Image,
  Button,
  Card,
} from 'react-bootstrap';
export default function Lessons(props) {
  return (
    <Card className='m-3'>
      <Tabs
        fill
        variant='pills'
        defaultActiveKey='video'
        id='uncontrolled-tab-example'
        className='p-3'
      >
        <Tab eventKey='video' title='video'>
          <div
            style={{
              marginTop: '4vh',
              marginBottom: '2vh',
              height: '60vh',
              width: '58vw',
              backgroundColor: '#bebeb4',
            }}
          >
            video
          </div>
        </Tab>
        <Tab eventKey='ppt' title='ppt'>
          <div
            style={{
              marginTop: '4vh',
              marginBottom: '2vh',
              height: '60vh',
              width: '58vw',
              backgroundColor: '#bebeb4',
            }}
          >
            ppt
          </div>
        </Tab>
      </Tabs>
    </Card>
  );
}
