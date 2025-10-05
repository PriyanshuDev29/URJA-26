import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home.js';
import Team from './components/Team/Team.js';
import Sports from './components/Sports/Sports.js';
import Pool from './components/Pool/Pool.js';
import PointsTable from './components/PointsTable/PointsTable.js';
import Navbar from './components/Navbar/Navbar'; // Add this import
import LeaderBoard from './components/LeaderBoard/LeaderBoard.js';
import './App.css';
import Gallery from './components/Gallery/Gallery.js';
import Footer from './components/Footer/Footer.js';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/team" element={<Team />} />
        <Route path="/sports" element={<Sports />} />
        <Route path="/pool" element={<Pool />} />
        <Route path="/points-table" element={<PointsTable />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/leaderboard" element={<LeaderBoard />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;