import React from 'react';
import { Form, Col, Row } from 'react-bootstrap';

const CourseFeatures = ({ ...props }) => {
  return (
    <Form>
      <Form.Row>
        <Form.Group as={Row} className='pl-3' controlId='formGrate'>
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

        <Form.Group as={Row} controlId='formGridState' className='ml-auto pr-3'>
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
            onChange={(event) => props.changeLevel(event.target.value)}
            value={props.level}
          </Form.Control>
        </Form.Group>
      </Form.Row>

      <Form.Row>
        <Form.Group as={Col} controlId='formGridCity'>
          <Form.Label>
            <h5>
              <strong>Course Number</strong>
            </h5>
          </Form.Label>
          <Form.Control
            type='text'
            value={props.courseNum}
            onChange={(event) => props.changeCourseNum(event.target.value)}
          />
        </Form.Group>

        <Form.Group as={Col} controlId='weekstart'>
          <Form.Label>
            <h5>
              <strong>Starting Week</strong>
            </h5>
          </Form.Label>
          <Form.Control
            placeholder='Enter Starting week'
            type='text'
            onChange={(event) => props.changeStartWeek(event.target.value)}
            value={props.startingWeek}
          ></Form.Control>
        </Form.Group>

        <Form.Group as={Col} controlId='endweeek'>
          <Form.Label>
            <h5>
              <strong>Ending Week</strong>
            </h5>
          </Form.Label>
          <Form.Control
            placeholder='Enter Ending week'
            type='text'
            onChange={(event) => props.changeEndWeek(event.target.value)}
            value={props.endingWeek}
          ></Form.Control>
        </Form.Group>
      </Form.Row>

      <Form.Row>
        <Form.Group as={Col} controlId='school'>
          <Form.Label>
            <h5>
              <strong>School</strong>
            </h5>
          </Form.Label>
          <Form.Control
            placeholder='Enter School'
            type='text'
            onChange={(event) => props.changeSchool(event.target.value)}
            value={props.school}
          ></Form.Control>
        </Form.Group>
        <Form.Group as={Col} controlId='language'>
          <Form.Label>
            <h5>
              <strong>Language</strong>
            </h5>
          </Form.Label>
          <Form.Control as='select' defaultValue='Choose...'>
            <option>Choose...</option>
            <option value='English'>English</option>
            <option value='Chinese'>Chinese</option>
            onChange={(event) => props.changelanguage(event.target.value)}
            value={props.language}
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
      {/* <Link>
        <Button className=' my-3 mx-2 btn' onClick={submitHandler}>
          Save
        </Button>
      </Link> */}
    </Form>
  );
};

export default CourseFeatures;
