import React from 'react';
import { Form, Button, Col, Row } from 'react-bootstrap';
const CourseFeatures = () => {
  return (
    <Form>
      <Form.Row>
        <Form.Group as={Row} className='pl-3'>
          <Form.Label>
            <h5>
              <strong>Type</strong>
            </h5>
          </Form.Label>
          <Col>
            <Form.Check
              type='radio'
              label='Undergraduate'
              name='undergraduateRadio'
              id='undergraduateRadio'
            />
            <Form.Check
              type='radio'
              label='Post-Graduate'
              name='postgraduateRadio'
              id='postgraduateRadio'
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId='formGridState' className='ml-auto'>
          <Form.Label>
            <h5>
              <strong>Level</strong>
            </h5>
          </Form.Label>
          <Col>
            <Form.Control as='select' defaultValue='Choose...'>
              <option>Choose...</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
            </Form.Control>
          </Col>
        </Form.Group>
      </Form.Row>

      <Form.Row>
        <Form.Group as={Col} controlId='formGridCity'>
          <Form.Label>
            <h5>
              <strong>Course Number</strong>
            </h5>
          </Form.Label>
          <Form.Control />
        </Form.Group>

        <Form.Group as={Col} controlId='formGridState'>
          <Form.Label>
            <h5>
              <strong>Starting Week</strong>
            </h5>
          </Form.Label>
          <Form.Control placeholder='Enter Starting week'></Form.Control>
        </Form.Group>

        <Form.Group as={Col} controlId='formGridState'>
          <Form.Label>
            <h5>
              <strong>Ending Week</strong>
            </h5>
          </Form.Label>
          <Form.Control placeholder='Enter Ending week'></Form.Control>
        </Form.Group>
      </Form.Row>

      <Form.Row>
        <Form.Group as={Col} controlId='formGridCity'>
          <Form.Label>
            <h5>
              <strong>Course Number</strong>
            </h5>
          </Form.Label>
          <Form.Control />
        </Form.Group>

        <Form.Group as={Col} controlId='formGridState'>
          <Form.Label>
            <h5>
              <strong>Language</strong>
            </h5>
          </Form.Label>
          <Form.Control as='select' defaultValue='Choose...'>
            <option>Choose...</option>
            <option>English</option>
            <option>Chinese</option>
          </Form.Control>
        </Form.Group>

        <Form.Group as={Col} controlId='formGridState'>
          <Form.Label>
            <h5>
              <strong>Class</strong>
            </h5>
          </Form.Label>
          <Form.Control as='select' defaultValue='Choose...'>
            <option>Choose...</option>
            <option>2021</option>
            <option>2020</option>
            <option>2019</option>
            <option>2018</option>
            <option>2017</option>
          </Form.Control>
        </Form.Group>
      </Form.Row>
      <Form.Row>
        <Col>
          <Form.Group as={Row} className='pl-3'>
            <Form.Label>
              <h5>
                <strong>Assignments</strong>
              </h5>
            </Form.Label>
            <Col>
              <Form.Check
                type='radio'
                label='Yes'
                name='yesAssignRadio'
                id='yesAssignRadio'
              />
              <Form.Check
                type='radio'
                label='No'
                name='noAssignRadio'
                id='noAssignRadio'
              />
            </Col>
          </Form.Group>
        </Col>
        <Col>
          <Form.Group as={Row} className='pl-3'>
            <Form.Label>
              <h5>
                <strong>Quiz</strong>
              </h5>
            </Form.Label>
            <Col>
              <Form.Check
                type='radio'
                label='Yes'
                name='yesQuizRadio'
                id='yesQuizRadio'
              />
              <Form.Check
                type='radio'
                label='No'
                name='noQuizRadio'
                id='noQuizRadio'
              />
            </Col>
          </Form.Group>
        </Col>
        <Form.Group as={Row} className='pl-3'>
          <Form.Label>
            <h5>
              <strong>Exam</strong>
            </h5>
          </Form.Label>
          <Col>
            <Form.Check
              type='radio'
              label='Yes'
              name='yesExamRadio'
              id='yesExamRadio'
            />
            <Form.Check
              type='radio'
              label='No'
              name='noExamRadio'
              id='noExamRadio'
            />
          </Col>
        </Form.Group>
      </Form.Row>
    </Form>
  );
};

export default CourseFeatures;
