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

  if (!props.selectedUserId) return "No Data Display";
  if (props.selectedUserId && !user) return "Loading";

  return (
    <div>
      <ul>
        <li>{user.id}</li>
        <li>{user.name}</li>
        <li>{user.email}</li>
        <li>{user.phone}</li>
      </ul>
    </div>
  );
}
