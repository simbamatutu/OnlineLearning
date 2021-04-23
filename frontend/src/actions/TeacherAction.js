import {
  COURSE_TAUGHT_FAIL,
  COURSE_TAUGHT_REQUEST,
  COURSE_TAUGHT_SUCCESS,
} from '../constants/TeacherConstants';
import axios from 'axios';
export const courseTaught = (keyword = '') => async (dispatch) => {
  try {
    dispatch({
      type: COURSE_TAUGHT_REQUEST,
    });

    const { data } = await axios.get(`/api/courses?keyword=${keyword}`);

    dispatch({
      type: COURSE_TAUGHT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: COURSE_TAUGHT_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
