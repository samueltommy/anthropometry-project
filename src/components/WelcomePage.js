import React from 'react';
import { useNavigate } from 'react-router-dom';

const WelcomePage = () => {
  const navigate = useNavigate();

  const handleWelcome = (e) => {
    e.preventDefault();
    navigate('/login');
  };

  return (
    <div>
        <h1>Welcome to Your App!</h1>
        <p>Some introductory text or information about your application.</p>
        <p>Please log in or register to access the dashboard.</p>
        <a href="/login">Log In</a>
    </div>
  );
};

export default WelcomePage;