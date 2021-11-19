import axios from 'axios';
import { setUser, setUsers } from '../actions';

const client = axios.create({
  baseURL: 'http://localhost:3008',
});

export const requestUsers = () => async (dispatch) => {
  try {
    const response = await client.get('/users');
    dispatch(setUsers(response.data));
  } catch (err) {
    // logs the error whatever error occured in try block
    console.log(err);
  }
}

export const requestUser = (userId) => async (dispatch) => {
  try {
    const response = await client.get(`/users/${userId}`);
    dispatch(setUser(response.data));
  } catch (err) {
    console.log(err);
    // show snackbar error message that something went wrong
  }
}

export const requestUpdateUser = (user) => async (dispatch) => {
  try {
    const response = await client.put(`/users/${user.id}`, { ...user });
    dispatch(setUser(response.data));
    dispatch(requestUsers());
  } catch (err) {
    console.log(err);
    // show snackbar error message that something went wrong
  }
}
