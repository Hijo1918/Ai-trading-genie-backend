import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import SignalsPage from './pages/SignalsPage';
import PortfolioPage from './pages/PortfolioPage';
import TradesPage from './pages/TradesPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/signals" element={<SignalsPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/trades" element={<TradesPage />} />
        <Route path="*" element={<Navigate to="/dashboard" />} />
      </Routes>
    </Router>
  );
}

export default App;
