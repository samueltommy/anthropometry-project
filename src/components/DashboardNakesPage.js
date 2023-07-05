import React from 'react';
import { useNavigate } from 'react-router-dom';

const DashboardNakesPage = () => {
  const navigate = useNavigate();

  const handleLogout = (e) => {
    e.preventDefault();
    navigate('/');
  }

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome to the Dashboard Nakes!</p>
      <p>This is a placeholder text to check if the dashboard page is working properly.</p>
      <br />
      <form onSubmit={handleLogout}>
        <button type="submit">Log out</button>
      </form>
    </div>
  );
};

export default DashboardNakesPage;
