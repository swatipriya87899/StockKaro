import React from 'react';
import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import DashboardLayout from './Pages/DashboardLayout/DashboardLayout';
import Home from './Pages/Home/Home';
import Markets from './Pages/Markets/Markets';
import Transaction from './Pages/Transaction/Transaction';
import Profile from './Pages/Profile/Profile';
import Settings from './Pages/Settings/Settings';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Routes with leftbar */}
        <Route
          path="/*"
          element={
            <DashboardLayout>
              <Routes>
                {/* Add other routes with leftbar here */}
                <Route path="/" element={<Home />} />
                <Route path="/markets" element={<Markets />} />
                <Route path="/transaction" element={<Transaction />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/settings" element={<Settings />} />
              </Routes>
            </DashboardLayout>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
