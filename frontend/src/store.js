import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import {
  courseCreateReducer,
  courseDeleteReducer,
  courseDetailsReducer,
  courseListReducer,
  courseUpdateReducer,
} from './reducers/courseReducers';

import { composeWithDevTools } from 'redux-devtools-extension';
import {
  userLoginReducer,
  userRegisterReducer,
  userDetailsReducer,
  userUpdateProfileReducer,
  userListReducer,
  userDeleteReducer,
  userUpdateReducer,
} from './reducers/userReducers';
import {
  coursewareCreateReducer,
  coursewareDetailsReducer,
  coursewareListReducer,
  coursewareUpdateReducer,
} from './reducers/coursewareReducers';

import {
  subTopicCreateReducer,
  subTopicListReducer,
  subTopicUpdateReducer,
  sectionDetailsReducer,
} from './reducers/subTopicReducers';
const reducer = combineReducers({
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userDetails: userDetailsReducer,
  userUpdateProfile: userUpdateProfileReducer,
  userList: userListReducer,
  userDelete: userDeleteReducer,
  userUpdate: userUpdateReducer,
  courseList: courseListReducer,
  courseDelete: courseDeleteReducer,
  courseCreate: courseCreateReducer,
  courseDetails: courseDetailsReducer,
  coursewareCreate: coursewareCreateReducer,

  coursewareDetails: coursewareDetailsReducer,
  sectionDetails: sectionDetailsReducer,

  coursewareUpdate: coursewareUpdateReducer,
  coursewareList: coursewareListReducer,
  courseUpdate: courseUpdateReducer,
  subTopicCreate: subTopicCreateReducer,
  subTopicUpdate: subTopicUpdateReducer,
  subTopicList: subTopicListReducer,
});

const userInfoFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null;
const initialState = {
  userLogin: { userInfo: userInfoFromStorage },
};
const middleware = [thunk];
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
