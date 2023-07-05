import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import DashboardAdmPage from './components/DashboardAdmPage';
import DashboardPuskesPage from './components/DashboardPuskesPage';
import DashboardNakesPage from './components/DashboardNakesPage';
import DashboardUserPage from './components/DashboardUserPage';
import RegisterPage from './components/RegisterPage';

const App = () => {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboardadm" element={<DashboardAdmPage />} />
        <Route path="/dashboardpkm" element={<DashboardPuskesPage />} />
        <Route path="/dashboardnakes" element={<DashboardNakesPage />} />
        <Route path="/dashboarduser" element={<DashboardUserPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </Router>
  );
};

const WelcomePage = () => {
  return (
    <div>
      <h1>Welcome to Your App!</h1>
      <p>Some introductory text or information about your application.</p>
      <p>Please log in or register to access the dashboard.</p>
      <a href="/login">Log In</a>
    </div>
  );
};

export default App;
