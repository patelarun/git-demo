import axios from 'axios';
import { setUser, setUsers, setCharacterFields, setCharacterFilters } from '../actions';

const client = axios.create({
  baseURL: 'https://the-one-api.dev/v2',
});

client.defaults.headers.common['Authorization'] = 'Bearer JOm5bP8gzfPvH8uPHCQp';

export const requestBooks = () => async (dispatch) => {
  try {
    const response = await client.get('/book');
    dispatch(setUsers(response.data.docs));
  } catch (err) {
    // logs the error whatever error occured in try block
    console.log(err);
  }
}

export const requestCharacters = (prevFilters) => async (dispatch) => {
  try {
    const params = {
      limit: prevFilters.limit,
      page: prevFilters.page,
      sort: `${prevFilters.orderBy}:${prevFilters.order}`,
    };
    const { data: { docs, ...filters } } = await client.get('/character', { params });
    dispatch(setCharacterFields({ records: docs }));
    dispatch(setCharacterFilters(filters));
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
    dispatch(requestBooks());
  } catch (err) {
    console.log(err);
    // show snackbar error message that something went wrong
  }
}
