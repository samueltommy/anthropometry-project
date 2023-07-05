import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Perform authentication logic here
    const users = [
      { username: 'admin', password: 'admin', dashboard: '/dashboardadm' },
      { username: 'adminpuskes', password: 'adminpuskes', dashboard: '/dashboardpkm' },
      { username: 'nakes', password: 'nakes', dashboard: '/dashboardnakes' },
      { username: 'natasha', password: 'natasha', dashboard: '/dashboarduser' },
    ];

    const authenticatedUser = users.find((user) => user.username === username && user.password === password);

    if (authenticatedUser) {
      // Authentication successful
      navigate(authenticatedUser.dashboard);
    } else {
      // Authentication failed
      alert('Invalid username or password');
    }
  };


  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
