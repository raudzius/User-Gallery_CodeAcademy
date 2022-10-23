import React from 'react';
import UserCard from './UserCard';

const UserGallery = ({ users, removeUser }) => {
  return (
    <div className="p-50 d-flex flex-wrap">
      {users.map((user, index) => (
        <UserCard key={index} user={user} index={index} removeUser={removeUser} />
      ))}
    </div>
  );
};

export default UserGallery;
