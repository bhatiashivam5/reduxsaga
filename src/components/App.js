import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getUsersRequest } from '../actions/users';
import { Header } from './Header';
import UsersList from './UsersList';

const App = props => {
  const { getUsersRequest, users } = props;
  useEffect(() => {
    getUsersRequest();
  }, [getUsersRequest]);

  return (
    <>
      <Header />
      <UsersList users={users.items} />
    </>
  );
};

export default connect(
  ({ users }) => ({ users }),
  {
    getUsersRequest
  }
)(App);
