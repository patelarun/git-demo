import React from 'react';
import axios from './axios';
import User from './User';

export default class Users extends React.Component {
  state = { selectedUserId: null }

  requestUsers = async () => {
    const response = await axios.get('/users');
    this.setState({ users: response.data });
  }

  componentDidMount() {
    this.requestUsers();
  }

  onClickUser = (userId) => {
    this.setState({ selectedUserId: userId });
  }

  render () {
    if (!this.state.users) return "Loading";

    return (
      <div>
        <ul>
          {this.state.users.map((user) => (
            <li key={user.id} onClick={() => this.onClickUser(user.id)}>
              {user.name}
            </li>
          ))}
        </ul>
        <User requestUsers={this.requestUsers} selectedUserId={this.state.selectedUserId} />
      </div>
    );
  }
}
