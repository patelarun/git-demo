import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from './axios';
import { setUser } from '../actions';

export default function User (props) {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);

  useEffect(() => {
    const requestUser = async (userId) => {
      const response = await axios.get(`/users/${userId}`);
      const setUserAction = setUser(response.data);
      dispatch(setUserAction);
    };
    if (!users.selectedUserId) return;
    requestUser(users.selectedUserId);

  }, [users.selectedUserId, dispatch]);

  const handleChangeName = (event) => {
    const { name, value } = event.target;
    const nextUser = { ...users.user, [name]: value };
    dispatch(setUser(nextUser));
  };

  const requestUpdateUser = async (user) => {
    const response = await axios.put(`/users/${user.id}`, { ...user });
    setUser(response.data);
    props.requestUsers();
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    requestUpdateUser(users.user);
  }

  if (!props.selectedUserId) return "No Data Display";
  if (props.selectedUserId && !users.user) return "Loading";

  return (
    <div>
      <form onSubmit={handleSubmit}>
      <ul>
        <li>{users.user.id}</li>
        <li><input name="name" value={users.user.name} onChange={handleChangeName} /></li>
        <li>{users.user.email}</li>
        <li>{users.user.phone}</li>
        <li><button type="submit">Submit</button></li>
      </ul>
      </form>
    </div>
  );
}
