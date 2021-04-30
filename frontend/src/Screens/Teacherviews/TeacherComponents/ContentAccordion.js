import React, { useState } from 'react';
import { Accordion, Card, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SubtopicsModal from './SubtopicsModal';
const ContentAccordion = () => {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <Table responsive>
      <Accordion>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey='0'>
            Click me!
          </Accordion.Toggle>
          <Accordion.Collapse eventKey='0'>
            <Card.Body>
              <Table responsive borderless>
                <thead>
                  <tr>
                    <th className='pr-5'>Title</th>
                    <th className='pl-5'>Type</th>
                    <th>Duration</th>
                    <th>Views</th>
                  </tr>
                </thead>
                <tfoot>
                  <tr>
                    <Link className='p-3' onClick={() => setModalShow(true)}>
                      Add Sub-Topic
                    </Link>
                  </tr>
                </tfoot>
              </Table>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
      <SubtopicsModal show={modalShow} onHide={() => setModalShow(false)} />
    </Table>
  );
};

export default ContentAccordion;
