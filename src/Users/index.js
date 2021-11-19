import React from 'react';
import { connect } from 'react-redux';
import { setUsers, setSelectedUserId } from '../actions';
import { requestUsers } from '../thunks/users';
import User from './User';

class Users extends React.Component {
  state = {}

  componentDidMount() {
    this.props.requestUsers();
  }

  onClickUser = (userId) => {
    this.props.setSelectedUserId(userId);
  }

  render () {
    const { records } = this.props.users;

    return (
      <div>
        <ul>
          {records.map((user) => (
            <li key={user.id} onClick={() => this.onClickUser(user.id)}>
              {user.name}
            </li>
          ))}
        </ul>
        <User requestUsers={this.requestUsers} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  users: state.users,
});

const mapDispatchToProps = {
  setUsers,
  setSelectedUserId,
  requestUsers,
};

const UsersConnectedWithRedux = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersConnectedWithRedux;
