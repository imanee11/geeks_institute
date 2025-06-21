import React, { useEffect, useState } from 'react';
import Customers from './components/Customers';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('/users')
      .then(res => res.json())
      .then(data => setUsers(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.username}</li>
        ))}
      </ul>
      <h1>Welcome</h1>
      <Customers />

    </div>
  );
}

export default App;
