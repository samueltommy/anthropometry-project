import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import DashboardPage from './components/DashboardPage';

const App = () => {
  // Check if the user is authenticated (e.g., using a token or authentication state)
  const isAuthenticated = true;

  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/login" element={<LoginPage />} />
        {isAuthenticated ? (
          <Route path="/dashboard" element={<DashboardPage />} />
        ) : null}
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
