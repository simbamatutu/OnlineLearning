import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { courseListReducer } from './reducers/courseReducers';

import { composeWithDevTools } from 'redux-devtools-extension';

const reducer = combineReducers({
  courseList: courseListReducer,
});
const initialState = {};
const middleware = [thunk];
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
