import { combineReducers } from 'redux';
import users from './users';
import todos from './todos';

export default combineReducers({
  todos,
  users,
});
