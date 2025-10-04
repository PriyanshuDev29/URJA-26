import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home.js';
import Team from './components/Team/Team.js';
import Sports from './components/Sports/Sports.js';
import Pool from './components/Pool/Pool.js';
import PointsTable from './components/PointsTable/PointsTable.js';
import Navbar from './components/Navbar/Navbar'; // Add this import
import Footer from './components/Footer/Footer.js'; 

import './App.css';

function App() {
  return (
     <div className="App-container">
      <Router>
        <Navbar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/team" element={<Team />} />
            <Route path="/sports" element={<Sports />} />
            <Route path="/pool" element={<Pool />} />
            <Route path="/points-table" element={<PointsTable />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;