import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css'; // Import the CSS file for styling

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
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
      // Set loading state while redirecting
      setIsLoading(true);

      // Simulate a delay before redirecting to the dashboard
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Authentication successful
      navigate(authenticatedUser.dashboard);
    } else {
      // Authentication failed
      setError('Invalid username or password');
    }
  };

  return (
    <div className="login-container">
      <div className="login-content">
        <h1>Login</h1>
        <form onSubmit={handleLogin}>
          <label>
            Username:
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
              required
            />
          </label>
          <br />
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />
          </label>
          <br />
          <button className="login-button" type="submit" disabled={isLoading}>
            {isLoading ? 'Logging in...' : 'Login'}
          </button>
          {error && <p className="error-message">{error}</p>}
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
