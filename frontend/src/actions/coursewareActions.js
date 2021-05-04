import axios from 'axios';

import {
  COURSEWARE_CREATE_FAIL,
  COURSEWARE_CREATE_REQUEST,
  COURSEWARE_CREATE_SUCCESS,
  COURSEWARE_DETAILS_SUCCESS,
  COURSEWARE_LIST_FAIL,
  COURSEWARE_LIST_REQUEST,
  COURSEWARE_LIST_SUCCESS,
  COURSEWARE_UPDATE_FAIL,
  COURSEWARE_UPDATE_REQUEST,
  COURSEWARE_UPDATE_SUCCESS,
} from '../constants/coursewarecontants';
import { logout } from './userActions';
export const createCourseware = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: COURSEWARE_CREATE_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token} `,
      },
    };
    const { data } = await axios.post(`/api/courseware/${id}`, {}, config);

    dispatch({
      type: COURSEWARE_CREATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: COURSEWARE_CREATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const updateCourseware = (courseware) => async (dispatch, getState) => {
  try {
    dispatch({
      type: COURSEWARE_UPDATE_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.put(
      `/api/courseware/${courseware._id}`,
      courseware,
      config
    );

    dispatch({
      type: COURSEWARE_UPDATE_SUCCESS,
      payload: data,
    });
    dispatch({ type: COURSEWARE_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    if (message === 'Not authorized, token failed') {
      dispatch(logout());
    }
    dispatch({
      type: COURSEWARE_UPDATE_FAIL,
      payload: message,
    });
  }
};

export const listCoursewares = (id) => async (dispatch) => {
  try {
    dispatch({
      type: COURSEWARE_LIST_REQUEST,
    });

    const { data } = await axios.get(`/api/courseware/${id}`);

    dispatch({
      type: COURSEWARE_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: COURSEWARE_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
