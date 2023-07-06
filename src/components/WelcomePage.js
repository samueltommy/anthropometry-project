import React from 'react';
import { useNavigate } from 'react-router-dom';
import './WelcomePage.css'; // Import the CSS file for styling

const WelcomePage = () => {
  const navigate = useNavigate();

  const handleWelcome = (e) => {
    e.preventDefault();
    navigate('/login');
  };

  return (
    <div className="welcome-container">
      <div className="welcome-content">
        <h1>Welcome to Your App!</h1>
        <p>Some introductory text or information about your application.</p>
        <p>Please log in or register to access the dashboard.</p>
        <button className="login-button" onClick={handleWelcome}>
          Log In
        </button>
      </div>
    </div>
  );
};

export default WelcomePage;
