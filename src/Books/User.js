import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setUser } from '../actions';
import { requestUser, requestUpdateUser } from '../thunks/users';

export default function User (props) {
  const dispatch = useDispatch();
  const { selectedUserId, user } = useSelector((state) => state.users);

  useEffect(() => {
    if (!selectedUserId) return;
    dispatch(requestUser(selectedUserId));
  }, [selectedUserId, dispatch]);

  const handleChangeName = (event) => {
    const { name, value } = event.target;
    const nextUser = { ...user, [name]: value };
    dispatch(setUser(nextUser));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(requestUpdateUser(user));
  }

  if (!selectedUserId) return "No Data Display";
  if (selectedUserId && !user) return "Loading";

  return (
    <div>
      <form onSubmit={handleSubmit}>
      <ul>
        <li>{user.id}</li>
        <li><input name="name" value={user.name} onChange={handleChangeName} /></li>
        <li>{user.email}</li>
        <li>{user.phone}</li>
        <li><button type="submit">Submit</button></li>
      </ul>
      </form>
    </div>
  );
}
