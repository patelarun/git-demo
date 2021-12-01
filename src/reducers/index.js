import { combineReducers } from 'redux';
import users from './users';
import todos from './todos';
import books from './books';

export default combineReducers({
  books,
  todos,
  users,
});
