import { useState } from 'react';
import './App.css';
import UserForm from './components/UserForm';
import UserGallery from './components/UserGallery';

function App() {
  const [users, setUsers] = useState([]);

  const send = async (user) => {
    const options = {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(user),
    };

    const res = await fetch('http://localhost:4000/createUser', options);
    const data = await res.json();
    setUsers(data.users);
  };

  const removeUser = async (index) => {
    const res = await fetch('http://localhost:4000/remove/' + index);
    const data = await res.json();

    setUsers(data.users);
  };

  return (
    <div className="">
      <UserForm send={send} />
      <UserGallery users={users} removeUser={removeUser} />
    </div>
  );
}

export default App;
