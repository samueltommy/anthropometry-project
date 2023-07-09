import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css'; // Import the CSS file for styling
import logoPuskesmas from "../assets/puskes.png";
import stei from "../assets/stei.png";
import sith from "../assets/sith.png";
import kirei from "../assets/kirei.png";
import invisible from "../assets/invisible.png";
import visible from "../assets/visible.png";

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    // Check if fields are empty
    if (!username || !password) {
      setError('Please fill in all fields');
      return;
    }

    // Perform authentication logic here
    const users = [
      { username: 'admin', password: 'admin', dashboard: '/dashboardadm' },
      { username: 'adminpuskes', password: 'adminpuskes', dashboard: '/dashboardpkm' },
      { username: 'nakes', password: 'nakes', dashboard: '/dashboardnakes' },
      { username: 'natasha', password: 'natasha', dashboard: '/dashboarduser' },
    ];

    const authenticatedUser = users.find((user) => user.username === username && user.password === password);

    if (authenticatedUser) {
      // Set loading state while redirecting
      setIsLoading(true);

      // Simulate a delay before redirecting to the dashboard
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Authentication successful
      navigate(authenticatedUser.dashboard);
    } else {
      // Authentication failed
      setError('Invalid username or password');
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleRememberMe = () => {
    setRememberMe(!rememberMe);
  };

  return (
    <div className="login-page">
      <div className="div">
        <div className="small-team">
          <img className="logo-puskesmas" alt="Logo puskesmas" src={logoPuskesmas} />
        </div>
        <div className="div-wrapper">
          <div className="group-2">
            <div className="group-3">
              <div className="group-4">
                <h1 className="text-wrapper">Masuk</h1>
                <div className="text-wrapper-2">Halaman Web Proyek Antropometri</div>
              </div>
              <div className="text-wrapper-3">Selamat Datang !</div>
              <div className="group-5">
                <div className="group-21">
                  <label className="group-text">Masukkan ID Pengguna</label>
                  <input
                    type="text"
                    className="text-input"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="ID Pengguna"
                    required
                  />
                </div>
                <div className="overlap-group-wrapper">
                  <div className="overlap-group">
                    <div className="group-21">
                      <label className="group-text">Masukkan kata sandi</label>
                      <input
                        type={showPassword ? "text" : "password"}
                        className="text-input"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Kata Sandi"
                        required
                      />
                    </div>
                    <img
                      className="invisible"
                      alt={showPassword ? "Visible" : "Invisible"}
                      src={showPassword ? visible : invisible}
                      onClick={togglePasswordVisibility}
                    />
                  </div>
                </div>
                <div className="group-6">
                  <div className="checkbox-wrapper">
                    <input
                      type="checkbox"
                      id="rememberMe"
                      className="checkbox-input"
                      checked={rememberMe}
                      onChange={() => setRememberMe(!rememberMe)}
                    />
                    <label htmlFor="rememberMe" className="checkbox-label">Ingat saya</label>
                    </div>
                    <a href="/" className="forgot-password-link">Lupa kata sandi ?</a>
                </div>
                <div className="overlap-wrapper">
                  <div className="overlap">
                    <button className="login-button" type="submit" onClick={handleLogin} disabled={isLoading}>
                      {isLoading ? 'Logging in...' : 'Masuk'}
                    </button>
                    {error && <p className="error-message">{error}</p>}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="overlap-2">
          <div className="group-7">
            <img className="logo-SITH-FC" alt="Logo SITH FC" src={sith} />
            <img className="stei-itb" alt="Stei itb" src={stei} />
            <img className="logo-kupu" alt="Logo kupu" src={kirei} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
