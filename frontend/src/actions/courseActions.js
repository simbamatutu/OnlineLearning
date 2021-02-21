import axios from 'axios';
import {
  COURSE_LIST_REQUEST,
  COURSE_LIST_SUCCESS,
  COURSE_LIST_FAIL,
  COURSE_DELETE_REQUEST,
  COURSE_DELETE_SUCCESS,
  COURSE_DELETE_FAIL,
} from '../constants/courseContants';

export const listCourses = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: COURSE_LIST_REQUEST,
    });

    const { data } = await axios.get(`/api/courses`);

    dispatch({
      type: COURSE_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: COURSE_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const deleteCourse = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: COURSE_DELETE_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();
    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token} `,
      },
    };
    await axios.delete(`/api/courses/${id}`, config);

    dispatch({
      type: COURSE_DELETE_SUCCESS,
    });

    //localStorage.setItem('userInfo', JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: COURSE_DELETE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
