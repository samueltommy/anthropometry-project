import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './RegisterPuskesAdmPage.css'; // Import the CSS file for RegisterPuskesPage

const RegisterPuskesPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [nama, setNama] = useState('');
  const [statusjabatan, setJabatan] = useState('');
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    navigate('/dashboardpkm');
  };

  return (
    <div>
      <h1>Registration</h1>
      <form onSubmit={handleRegister}>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
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
            placeholder="Password"
            required
          />
        </label>
        <br />
        <label>
          Name:
          <input
            type="text"
            value={nama}
            onChange={(e) => setNama(e.target.value)}
            placeholder="Name"
            required
          />
        </label>
        <br />
        <label>
          Status:
          <select
            value={statusjabatan}
            onChange={(e) => setJabatan(e.target.value)}
            required
          >
            <option value="">Select status</option>
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

export default RegisterPuskesPage;
