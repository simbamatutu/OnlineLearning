import axios from 'axios';

import {
  SUBTOPIC_CREATE_FAIL,
  SUBTOPIC_CREATE_REQUEST,
  SUBTOPIC_CREATE_SUCCESS,
  SUBTOPIC_DETAILS_SUCCESS,
  SUBTOPIC_LIST_FAIL,
  SUBTOPIC_LIST_REQUEST,
  SUBTOPIC_LIST_SUCCESS,
  SUBTOPIC_UPDATE_FAIL,
  SUBTOPIC_UPDATE_REQUEST,
  SUBTOPIC_UPDATE_SUCCESS,
} from '../constants/subtopicContants';
import { logout } from './userActions';
export const createSubtopic = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: SUBTOPIC_CREATE_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token} `,
      },
    };
    const { data } = await axios.post(`/api/subtopic/${id}`, {}, config);

    dispatch({
      type: SUBTOPIC_CREATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: SUBTOPIC_CREATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const updateSubTopic = (courseware) => async (dispatch, getState) => {
  try {
    dispatch({
      type: SUBTOPIC_UPDATE_REQUEST,
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
      `/api/subtopic/${courseware._id}`,
      courseware,
      config
    );

    dispatch({
      type: SUBTOPIC_UPDATE_SUCCESS,
      payload: data,
    });
    dispatch({ type: SUBTOPIC_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    if (message === 'Not authorized, token failed') {
      dispatch(logout());
    }
    dispatch({
      type: SUBTOPIC_UPDATE_FAIL,
      payload: message,
    });
  }
};

export const listSubTopics = (id) => async (dispatch) => {
  try {
    dispatch({
      type: SUBTOPIC_LIST_REQUEST,
    });

    const { data } = await axios.get(`/api/subtopic`);

    dispatch({
      type: SUBTOPIC_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: SUBTOPIC_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
