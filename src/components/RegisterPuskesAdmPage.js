import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './RegisterAdminPage.css'; // Import the CSS file for RegisterAdminPage
import logoPuskesmas from "../assets/puskes.png";
import stei from "../assets/stei.png";
import sith from "../assets/sith.png";
import kirei from "../assets/kirei.png";
import invisible from "../assets/invisible.png";
import visible from "../assets/visible.png";
import invisible2 from "../assets/invisible.png";
import visible2 from "../assets/visible.png";

const RegisterAdminPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const [nik, setNIK] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);
  const [nama, setNama] = useState('');
  const [statusjabatan, setJabatan] = useState('');
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    navigate('/dashboardpkm');
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const togglePasswordVisibility2 = () => {
    setShowPassword2(!showPassword2);
  };

  return (
    <div className="register-super-admin">
      <div className="div-2">
        <div className="overlap">
          <div className="div-wrapper">
            <div className="group-5">
              <div className="group-6">
                <h1 className="text-wrapper">Daftar Akun Pengguna</h1>
                <p className="p">Halaman Web Proyek Antropometri (Super Admin)</p>
              </div>
            </div>
          </div>
          <form className="register-form" onSubmit={handleRegister}>
            <label>
              Nama:
              <input
                className="input-field"
                type="text"
                value={nama}
                onChange={(e) => setNama(e.target.value)}
                placeholder="Masukkan nama lengkap"
                required
              />
            </label>
            <br />
            <label>
              ID Pengguna:
              <input
                className="input-field"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Masukkan ID pengguna"
                required
              />
            </label>
            <br />
            <label>
              NIK:
              <input
                className="input-field"
                type="number"
                value={nik}
                onChange={(e) => setNIK(e.target.value)}
                placeholder="Masukkan NIK"
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
                <option value="Nakes">Nakes</option>
                <option value="Anak">Anak</option>
              </select>
            </label>
            <br />
            <div className="overlap-group">
                    <div className="group-21">
                      <label className="group-text">Masukkan kata sandi:</label>
                      <input
                        type={showPassword ? "text" : "password"}
                        className="text-input"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Masukkan kata Sandi"
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
            <div className="overlap-group2">
                    <div className="group-22">
                      <label className="group-text">Masukkan ulang kata sandi:</label>
                      <input
                        type={showPassword ? "text" : "password"}
                        className="text-input"
                        value={password2}
                        onChange={(e) => setPassword2(e.target.value)}
                        placeholder="Masukkan ulang kata sandi"
                        required
                      />
                    </div>
                    <img
                      className="invisible2"
                      alt={showPassword2 ? "Visible2" : "Invisible2"}
                      src={showPassword2 ? visible2 : invisible2}
                      onClick={togglePasswordVisibility2}
                    />
            </div>
            <div className="overlap-group-wrapper">
                <div className="overlap-group-2">
                  <button type="submit">Daftar</button>
                </div>
              </div>
          </form>
        </div>
        <div className="group-7">
          <img className="stei-itb" alt="Stei itb" src={stei} />
          <img className="logo-SITH-FC" alt="Logo SITH FC" src={sith} />
          <img className="logo-kupu" alt="Logo kupu" src={kirei} />
        </div>
        <div className="small-team">
          <img
            className="logo-puskesmas"
            alt="Logo puskesmas"
            src={logoPuskesmas}
          />
        </div>
      </div>
    </div>
  );
};

export default RegisterAdminPage;
