import {
  COURSEWARE_CREATE_FAIL,
  COURSEWARE_CREATE_REQUEST,
  COURSEWARE_CREATE_RESET,
  COURSEWARE_CREATE_SUCCESS,
  COURSEWARE_DETAILS_FAIL,
  COURSEWARE_DETAILS_REQUEST,
  COURSEWARE_DETAILS_SUCCESS,
  COURSEWARE_LIST_FAIL,
  COURSEWARE_LIST_REQUEST,
  COURSEWARE_LIST_RESET,
  COURSEWARE_LIST_SUCCESS,
  COURSEWARE_UPDATE_FAIL,
  COURSEWARE_UPDATE_REQUEST,
  COURSEWARE_UPDATE_RESET,
  COURSEWARE_UPDATE_SUCCESS,
} from '../constants/coursewarecontants';

export const coursewareDetailsReducer = (
  state = { courseware: {} },
  action
) => {
  switch (action.type) {
    case COURSEWARE_DETAILS_REQUEST:
      return { ...state, loading: true };
    case COURSEWARE_DETAILS_SUCCESS:
      return { loading: false, courseware: action.payload };
    case COURSEWARE_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
export const coursewareCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case COURSEWARE_CREATE_REQUEST:
      return { loading: true };
    case COURSEWARE_CREATE_SUCCESS:
      return { loading: false, success: true, courseware: action.payload };
    case COURSEWARE_CREATE_FAIL:
      return { loading: false, error: action.payload };
    case COURSEWARE_CREATE_RESET:
      return {};
    default:
      return state;
  }
};
export const coursewareUpdateReducer = (state = { courseware: {} }, action) => {
  switch (action.type) {
    case COURSEWARE_UPDATE_REQUEST:
      return { loading: true };
    case COURSEWARE_UPDATE_SUCCESS:
      return { loading: false, success: true, courseware: action.payload };
    case COURSEWARE_UPDATE_FAIL:
      return { loading: false, error: action.payload };
    case COURSEWARE_UPDATE_RESET:
      return { courseware: {} };
    default:
      return state;
  }
};

export const coursewareListReducer = (state = { coursewares: [] }, action) => {
  switch (action.type) {
    case COURSEWARE_LIST_REQUEST:
      return { loading: true };
    case COURSEWARE_LIST_SUCCESS:
      return { loading: false, coursewares: action.payload };
    case COURSEWARE_LIST_FAIL:
      return { loading: false, error: action.payload };
    case COURSEWARE_LIST_RESET:
      return { coursewares: [] };
    default:
      return state;
  }
};
