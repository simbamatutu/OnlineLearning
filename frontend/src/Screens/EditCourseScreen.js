import React, { useState, useEffect } from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import Header from '../Components/Header';
import axios from 'axios';
import { Form, Button, Col, Container, Card, Tabs, Tab } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getCourseDetails, updateCourse } from '../actions/courseActions';
import { COURSE_UPDATE_RESET } from '../constants/courseContants';
import Message from '../Components/Message';
import Loader from '../Components/Loader';
import { Link } from 'react-router-dom';
import CourseContent from './Teacherviews/TeacherComponents/CourseContent';
import CourseDescription from './Teacherviews/TeacherComponents/CourseDescription';
import CourseFeatures from './Teacherviews/TeacherComponents/CourseFeatures';
export const EditCourseScreen = ({ match, history }) => {
  const courseId = match.params.id;
  const [courseName, setCourseName] = useState('');
  const [startingWeek, setstartingWeek] = useState(0);
  const [courseImage, setCourseImage] = useState('');
  const [courseNum, setcourseNum] = useState('');
  const [uploading, setUploading] = useState(false);
  const [language, setlanguage] = useState('');
  const [overview, setoverview] = useState('');
  const [Level, setLevel] = useState('');
  const [school, setschool] = useState('');
  const [quiz, setquiz] = useState('');
  const [exam, setexam] = useState('');
  const [assignment, setassignment] = useState('');
  const [endingWeek, setendingWeek] = useState(0);
  // const [message, setMessage] = useState(null);
  // const redirect = location.search ? location.search.split('=')[1] : '/';

  const dispatch = useDispatch();
  const courseDetails = useSelector((state) => state.courseDetails);
  const { loading, error, course } = courseDetails;

  const courseUpdate = useSelector((state) => state.courseUpdate);
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = courseUpdate;

  useEffect(() => {
    if (successUpdate) {
      dispatch({ type: COURSE_UPDATE_RESET });

      // history.push('/admin/course-list');
    } else {
      if (course) {
        if (!course.courseName || course._id !== courseId) {
          dispatch(getCourseDetails(courseId));
        } else {
          setCourseName(course.courseName);
          setcourseNum(course.courseNum);
          setstartingWeek(course.startingWeek);
          setCourseImage(course.courseImage);
          setLevel(course.level);
          setlanguage(course.language);
          setendingWeek(course.endingWeek);
          setschool(course.school);
          setoverview(course.overview);
        }
      }
    }
  }, [courseId, course, dispatch, successUpdate, history]);

  const uploadFileHandler = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append('image', file);
    setUploading(true);

    try {
      const config = {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      };

      const { data } = await axios.post('/api/upload', formData, config);
      setCourseImage(data);
      setUploading(false);
    } catch (error) {
      console.error(error);
      setUploading(false);
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();

    dispatch(
      updateCourse({
        _id: courseId,
        courseName,
        courseNum,
        courseImage,
        startingWeek,
        Level,
        language,
        endingWeek,
        school,
        overview,
      })
    );
  };

  return (
    <React.Fragment>
      <Header />
      <LinkContainer to='/admin/course-list'>
        <Button className=' my-3 mx-2 btn'>Back</Button>
      </LinkContainer>
      <Container className='p-0 mt-1'>
        <Link>
          <Button className=' my-3 mx-2 btn' onClick={submitHandler}>
            Save
          </Button>
        </Link>
        <Link to='/login'>Discard</Link>
        <Card className='p-2'>
          {loadingUpdate && <Loader />}
          {/* config this messaging stuff */}
          {errorUpdate && <Message variant='danger'>{errorUpdate}</Message>}
          {loading ? (
            <Loader />
          ) : error ? (
            <Message variant='danger'>{error}</Message>
          ) : (
            <Form.Row onSubmit={submitHandler} className='d-flex  '>
              <Form.Group as={Col} controlId='coursename'>
                <Form.Label>
                  <h5>
                    <strong>Course Name</strong>
                  </h5>
                </Form.Label>
                <Form.Control
                  type='text'
                  style={{
                    border: 'none',

                    borderBottom: 'solid #000 2px',
                  }}
                  value={courseName}
                  onChange={(e) => setCourseName(e.target.value)}
                ></Form.Control>
              </Form.Group>

              <Form.Group controlId='image' as={Col}>
                <Form.Label>
                  <h5>
                    <strong>Course Image</strong>
                  </h5>
                </Form.Label>
                <Form.Control
                  type='text'
                  placeholder='Enter course image Url'
                  value={courseImage}
                  onChange={(e) => setCourseImage(e.target.value)}
                ></Form.Control>
                <Form.File
                  id='image-file'
                  label='Choose image'
                  custom
                  onChange={uploadFileHandler}
                ></Form.File>
                {uploading && <Loader />}
              </Form.Group>
            </Form.Row>
          )}
          <Col>
            <Tabs
              defaultActiveKey='CourseContent'
              id='uncontrolled-tab-example'
              className='my-4'
              style={{ borderBottom: 'solid 1px #bebebe' }}
            >
              <Tab eventKey='CourseContent' title='Content'>
                <CourseContent courseId={courseId} />
              </Tab>
              <Tab eventKey='CourseDescription' title='Description'>
                <CourseDescription
                  overview={overview}
                  changeOverview={(value) => setoverview(value)}
                />
              </Tab>
              <Tab eventKey='CourseFeatures' title='Features'>
                <CourseFeatures
                  id={courseId}
                  courseNum={courseNum}
                  startingWeek={startingWeek}
                  level={Level}
                  language={language}
                  school={school}
                  endingWeek={endingWeek}
                  changeSchool={(value) => setschool(value)}
                  changeEndWeek={(value) => setendingWeek(value)}
                  changeStartWeek={(value) => setstartingWeek(value)}
                  changeLevel={(value) => setLevel(value)}
                  changelanguage={(value) => setlanguage(value)}
                  changeCourseNum={(value) => setcourseNum(value)}
                />
              </Tab>
            </Tabs>
          </Col>
        </Card>

        {/* <Row className='justify-content-md-center'>
          <Col xs={12} md={6} xl={3}>
            <h2>Edit Course</h2>
            {loadingUpdate && <Loader />}
            {/* config this messaging stuff */}
        {/* {errorUpdate && <Message variant='danger'>{errorUpdate}</Message>}
            {loading ? (
              <Loader />
            ) : error ? (
              <Message variant='danger'>{error}</Message>
            ) : (
              <Form onSubmit={submitHandler}>
                <Form.Group controlId='coursename'>
                  <Form.Label>Course Name</Form.Label>
                  <Form.Control
                    type='text'
                    placeholder='Enter Course Name'
                    value={courseName}
                    onChange={(e) => setCourseName(e.target.value)}
                  ></Form.Control>
                </Form.Group>
                <Form.Group controlId='image'>
                  <Form.Label>Course Image</Form.Label>
                  <Form.Control
                    type='text'
                    placeholder='Enter course image Url'
                    value={courseImage}
                    onChange={(e) => setCourseImage(e.target.value)}
                  ></Form.Control>
                  <Form.File
                    id='image-file'
                    label='Choose image'
                    custom
                    onChange={uploadFileHandler}
                  ></Form.File>
                  {uploading && <Loader />}
                </Form.Group>

                <Form.Group controlId='school'>
                  <Form.Label>school</Form.Label>
                  <Form.Control
                    type='text'
                    placeholder='Enter School'
                    value={school}
                    onChange={(e) => setSchool(e.target.value)}
                  ></Form.Control>
                </Form.Group>

                <Form.Group controlId='level'>
                  <Form.Label>level</Form.Label>
                  <Form.Control
                    type='text'
                    placeholder='Enter level'
                    value={level}
                    onChange={(e) => setLevel(e.target.value)}
                  ></Form.Control>
                </Form.Group>

                <Button type='submit' variant='primary'>
                  Update Course
                </Button>
              </Form>
            )}
          </Col>
        </Row> */}
      </Container>
    </React.Fragment>
  );
};
export default EditCourseScreen;
