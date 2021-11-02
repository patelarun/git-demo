import React from 'react';
import axios from './axios';

export default class User extends React.Component {
  state = {}

  requestUser = async (userId) => {
    const response = await axios.get(`/users/${userId}`);
    this.setState({ user: response.data });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.selectedUserId !== this.props.selectedUserId) {
      this.requestUser(this.props.selectedUserId);
    }
  }

  render () {
    const { user } = this.state;
    if (!user) return "Loading";

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
}
