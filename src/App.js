import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';  // Ensure your global styles are being applied
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import DataUpload from './components/DataUpload';
import Results from './components/Results';

const App = () => {
  return (
    <Router>
      <div>
        {/* Navigation Links */}
        <nav>
          <ul className="nav-links">
            <li><Link to="/">LOGIN</Link></li>
            <li><Link to="/dashboard">DASHBOARD</Link></li>
            <li><Link to="/upload">DATA UPLOAD</Link></li>
            <li><Link to="/results">RESULT</Link></li>
          </ul>
        </nav>

        {/* Define Routes */}
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/upload" element={<DataUpload />} />
          <Route path="/results" element={<Results />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;