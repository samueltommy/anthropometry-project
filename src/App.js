import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import WelcomePage from './components/WelcomePage';
import LoginPage from './components/LoginPage';
import DashboardAdmPage from './components/DashboardAdmPage';
import DashboardPuskesPage from './components/DashboardPuskesPage';
import DashboardNakesPage from './components/DashboardNakesPage';
import DashboardUserPage from './components/DashboardUserPage';
import RegisterAdmPage from './components/RegisterAdminPage';
import RegisterPuskesAdmPage from './components/RegisterPuskesAdmPage';
import RegisterPuskesPage from './components/RegisterPuskesPage';

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
        <Route path="/registeradmin" element={<RegisterAdmPage />} />
        <Route path="/registerpuskesadm" element={<RegisterPuskesAdmPage />} />
        <Route path="/registerpuskes" element={<RegisterPuskesPage />} />
      </Routes>
    </Router>
  );
};

export default App;
