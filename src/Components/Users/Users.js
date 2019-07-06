import React from 'react';
import UserItem from './Useritem';
import Spinner from './Layout/spinner';
import PropTypes from 'prop-types';

const User = ({ users, loading }) => {
  console.log(loading);
  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div style={userStyle}>
        {users.map(user => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  }
};

User.PropTypes = {
  users: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired
};

const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  grridGap: '1rem'
};

export default User;
