import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

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
    <div>
        <h1>Registration</h1>
        <form onSubmit={handleRegister}>
            <label>
                Nama Puskesmas:
                <input
                    type="text"
                    value={puskesmas}
                    onChange={(e) => setPuskesmas(e.target.value)}
                />
            </label>
            <br />
            <label>
                Lokasi:
                <input
                    type="text"
                    value={lokasi}
                    onChange={(e) => setLokasi(e.target.value)}
                />
            </label>
            <br />
            <label>
                No. Puskesmas:
                <input
                    type="text"
                    value={noPuskesmas}
                    onChange={(e) => setNoPuskesmas(e.target.value)}
                />
            </label>
            <br />
            <button type="submit">Register</button>
        </form>

    </div>
  );
  };

  export default RegisterPuskesPage;
