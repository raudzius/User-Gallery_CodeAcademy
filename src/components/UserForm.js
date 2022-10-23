import React, { useRef } from 'react';

const UserForm = ({ send }) => {
  const nameRef = useRef();
  const photoRef = useRef();
  const genderRef = useRef();

  const addUser = () => {
    const user = {
      name: nameRef.current.value,
      photo: photoRef.current.value,
      gender: genderRef.current.value,
    };

    send(user);
  };

  return (
    <div>
      <input ref={nameRef} type="text" placeholder="name" />
      <input ref={photoRef} type="text" placeholder="photo" />
      <select ref={genderRef} name="" id="">
        <option value="male">male</option>
        <option value="female">female</option>
      </select>
      <button onClick={addUser}>Add User</button>
    </div>
  );
};

export default UserForm;
