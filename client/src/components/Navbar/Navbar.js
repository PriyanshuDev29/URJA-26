import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const logo = '/urja-logo-white.png';

function Navbar() {
    return (
        <nav className="navbar">
            <img src={logo} alt="URJA Logo" className="navbar-logo" />

            <ul>
                <li><Link to="/" className="home-link">Home</Link></li>
                <li><Link to="/team" className="team-link">Team</Link></li>
                <li><Link to="/sports" className="sports-link">Sports</Link></li>
                <li><Link to="/pool" className="pool-link">Pool</Link></li>
                <li><Link to="/points-table" className="points-table-link">Points Table</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;