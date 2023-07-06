import React from 'react';
import { useNavigate } from 'react-router-dom';
import './DashboardAdmPage.css'; // Import the CSS file

const DashboardAdmPage = () => {
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    navigate('/registeradmin');
  };

  const handleRegPuskes = (e) => {
    e.preventDefault();
    navigate('/registerpuskes');
  };

  const handleLogout = (e) => {
    e.preventDefault();
    const shouldLogout = window.confirm('Are you sure you want to log out?');
    if (shouldLogout) {
      navigate('/');
    }
  };

  const babyData = [
    { id: 1, name: 'Baby 1', height: '50 cm', weight: '3.5 kg' },
    { id: 2, name: 'Baby 2', height: '48 cm', weight: '3.2 kg' },
    { id: 3, name: 'Baby 3', height: '52 cm', weight: '3.7 kg' },
  ];

  return (
    <div className="dashboard-container">
      <h1>Dashboard</h1>
      <p>Welcome to the Dashboard Admin!</p>
      <p>This is a placeholder text to check if the dashboard page is working properly.</p>
      <br />
      <h2>Baby Information</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Height</th>
            <th>Weight</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>John</td>
            <td>70cm</td>
            <td>8kg</td>
          </tr>
          <tr>
            <td>Jane</td>
            <td>65cm</td>
            <td>7.5kg</td>
          </tr>
          {/* Add more table rows for additional data */}
        </tbody>
      </table>
      <div className="register-buttons">
        <form onSubmit={handleRegister}>
          <p>Register new user,</p>
          <button type="submit">Register</button>
        </form>
        <form onSubmit={handleRegPuskes}>
          <p>Register new puskesmas,</p>
          <button type="submit">Register</button>
        </form>
      </div>
      <form onSubmit={handleLogout} className="logout-button">
        <button type="submit">Log out</button>
      </form>
    </div>
  );  
};

export default DashboardAdmPage;
