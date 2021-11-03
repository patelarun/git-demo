import React, { useState, useEffect } from 'react';
import axios from './axios';

export default function User (props) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const requestUser = async (userId) => {
      const response = await axios.get(`/users/${userId}`);
      setUser(response.data);
    };
    if (!props.selectedUserId) return;
    requestUser(props.selectedUserId);

  }, [props.selectedUserId]);

  const handleChangeName = (event) => {
    const { name, value } = event.target;
    const nextUser = { ...user, [name]: value };
    setUser(nextUser);
  };

  const requestUpdateUser = async (user) => {
    const response = await axios.put(`/users/${user.id}`, { ...user });
    setUser(response.data);
    props.requestUsers();
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    requestUpdateUser(user);
  }

  if (!props.selectedUserId) return "No Data Display";
  if (props.selectedUserId && !user) return "Loading";

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
