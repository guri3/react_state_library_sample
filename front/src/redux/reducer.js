import { combineReducers } from 'redux';
import app from './modules/app';
import todos from './modules/todos';

const rootReducer = combineReducers({
  app,
  todos
});

export default rootReducer;
