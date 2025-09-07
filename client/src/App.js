import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home.js';
import Team from './components/Team.js';
import Sports from './components/Sports.js';
import Pool from './components/Pool.js';
import Navbar from './components/Navbar'; // Add this import
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/team" element={<Team />} />
        <Route path="/sports" element={<Sports />} />
        <Route path="/Pool" element={<Pool />} />
      </Routes>
    </Router>
  );
}

export default App;