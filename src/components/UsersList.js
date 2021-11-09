import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';

const UsersList = ({ users }) => {
  console.log(users)
  return (
    
    <ListGroup>
      {users.map(user => {
        return <ListGroupItem key={user.id}>{user.first_name}</ListGroupItem>;
      })}
    </ListGroup>
  );
};

export default UsersList;
