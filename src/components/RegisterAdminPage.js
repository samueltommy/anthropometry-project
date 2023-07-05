import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

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
    <div>
        <h1>Registration</h1>
        <form onSubmit={handleRegister}>
            <label>
                Username:
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
            </label>
            <br />
            <label>
                Password:
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </label>
            <br />
            <label>
                Name:
                <input
                    type="text"
                    value={nama}
                    onChange={(e) => setNama(e.target.value)}
                />
            </label>
            <br />
            <label>
                Status:
                <select
                    value={statusjabatan}
                    onChange={(e) => setJabatan(e.target.value)}
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
