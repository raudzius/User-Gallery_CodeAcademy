import React from 'react';

const UserCard = ({ user, index, removeUser }) => {
  const userColor = user.gender === 'male' ? '#8cadc2' : '#b08cc2';

  return (
    <div className="card" style={{ backgroundColor: userColor }}>
      <img src={user.photo} alt={user.name + ' photo'} />
      <h4>{user.name}</h4>
      <button onClick={() => removeUser(index)}>Delete</button>
    </div>
  );
};

export default UserCard;
