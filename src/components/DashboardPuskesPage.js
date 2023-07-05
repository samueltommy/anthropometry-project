import React from 'react';
import { useNavigate } from 'react-router-dom';

const DashboardPuskesPage = () => {
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    navigate('/register');
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome to the Dashboard!</p>
      <p>This is a placeholder text to check if the dashboard page is working properly.</p>
      <br />
      <form onSubmit={handleRegister}>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default DashboardPuskesPage;
