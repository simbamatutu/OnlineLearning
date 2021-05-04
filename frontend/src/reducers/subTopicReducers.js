import {
  SUBTOPIC_CREATE_FAIL,
  SUBTOPIC_CREATE_REQUEST,
  SUBTOPIC_CREATE_RESET,
  SUBTOPIC_CREATE_SUCCESS,
  SUBTOPIC_LIST_FAIL,
  SUBTOPIC_LIST_REQUEST,
  SUBTOPIC_LIST_RESET,
  SUBTOPIC_LIST_SUCCESS,
  SUBTOPIC_UPDATE_FAIL,
  SUBTOPIC_UPDATE_REQUEST,
  SUBTOPIC_UPDATE_RESET,
  SUBTOPIC_UPDATE_SUCCESS,
} from '../constants/subtopicContants';

export const subTopicCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case SUBTOPIC_CREATE_REQUEST:
      return { loading: true };
    case SUBTOPIC_CREATE_SUCCESS:
      return { loading: false, success: true, subTopic: action.payload };
    case SUBTOPIC_CREATE_FAIL:
      return { loading: false, error: action.payload };
    case SUBTOPIC_CREATE_RESET:
      return {};
    default:
      return state;
  }
};
export const subTopicUpdateReducer = (state = { subTopic: {} }, action) => {
  switch (action.type) {
    case SUBTOPIC_UPDATE_REQUEST:
      return { loading: true };
    case SUBTOPIC_UPDATE_SUCCESS:
      return { loading: false, success: true, subTopic: action.payload };
    case SUBTOPIC_UPDATE_FAIL:
      return { loading: false, error: action.payload };
    case SUBTOPIC_UPDATE_RESET:
      return { subTopic: {} };
    default:
      return state;
  }
};

export const subTopicListReducer = (state = { subTopics: [] }, action) => {
  switch (action.type) {
    case SUBTOPIC_LIST_REQUEST:
      return { loading: true };
    case SUBTOPIC_LIST_SUCCESS:
      return { loading: false, subTopics: action.payload };
    case SUBTOPIC_LIST_FAIL:
      return { loading: false, error: action.payload };
    case SUBTOPIC_LIST_RESET:
      return { subTopics: [] };
    default:
      return state;
  }
};
