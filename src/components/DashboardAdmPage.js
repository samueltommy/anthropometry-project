import React from 'react';
import { useNavigate } from 'react-router-dom';

const DashboardAdmPage = () => {
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    navigate('/registeradmin');
  };

  const handleRegPuskes = (e) => {
    e.preventDefault();
    navigate('/registerpuskes');
  }

  const handleLogout = (e) => {
    e.preventDefault();
    navigate('/');
  }

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome to the Dashboard!</p>
      <p>This is a placeholder text to check if the dashboard page is working properly.</p>
      <br />
      <form onSubmit={handleRegister}>
        <p>Register new user,</p>
        <button type="submit">Register</button>
        <br />
      </form>
      <form onSubmit={handleRegPuskes}>
        <p>Register new puskesmas,</p>
        <button type="submit">Register</button>
      </form>
      <form onSubmit={handleLogout}>
        <br />
        <button type="submit">Log out</button>
      </form>
    </div>
  );
};

export default DashboardAdmPage;
