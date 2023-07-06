import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './RegisterAdminPage.css'; // Import the CSS file for RegisterAdminPage

const RegisterAdminPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [nama, setNama] = useState('');
  const [statusjabatan, setJabatan] = useState('');
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    navigate('/dashboardadm');
  };

  return (
    <div className="register-container">
      <h1>Registration</h1>
      <form onSubmit={handleRegister}>
        <label>
          Username:
          <input
            className="input-field"
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
            className="input-field"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
          />
        </label>
        <br />
        <label>
          Name:
          <input
            className="input-field"
            type="text"
            value={nama}
            onChange={(e) => setNama(e.target.value)}
            placeholder="Enter your name"
            required
          />
        </label>
        <br />
        <label>
          Status:
          <select
            className="input-field"
            value={statusjabatan}
            onChange={(e) => setJabatan(e.target.value)}
            required
          >
            <option value="">Select status</option>
            <option value="Admin">Admin</option>
            <option value="Admin Puskesmas">Admin Puskesmas</option>
            <option value="Nakes">Nakes</option>
            <option value="Anak">Anak</option>
          </select>
        </label>
        <br />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegisterAdminPage;
