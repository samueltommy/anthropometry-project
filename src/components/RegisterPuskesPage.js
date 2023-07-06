import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './RegisterPuskesPage.css'; // Import the CSS file for RegisterPuskesPage

const RegisterPuskesPage = () => {
  const [puskesmas, setPuskesmas] = useState('');
  const [lokasi, setLokasi] = useState('');
  const [noPuskesmas, setNoPuskesmas] = useState('');
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
          Nama Puskesmas:
          <input
            className="input-field"
            type="text"
            value={puskesmas}
            onChange={(e) => setPuskesmas(e.target.value)}
            placeholder="Enter puskesmas name"
            required
          />
        </label>
        <br />
        <label>
          Lokasi:
          <input
            className="input-field"
            type="text"
            value={lokasi}
            onChange={(e) => setLokasi(e.target.value)}
            placeholder="Enter location"
            required
          />
        </label>
        <br />
        <label>
          No. Puskesmas:
          <input
            className="input-field"
            type="number"
            value={noPuskesmas}
            onChange={(e) => setNoPuskesmas(e.target.value)}
            placeholder="Enter Puskesmas number"
            required
          />
        </label>
        <br />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegisterPuskesPage;
