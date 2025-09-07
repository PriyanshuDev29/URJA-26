import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

// Direct path to the logo in the public folder
const logo = '/urja-logo-white.png';

function Navbar() {
    return (
        <nav className="navbar">
            {/* The image is now a static element */}
            <div className="navbar-logo">
                <img src={logo} alt="URJA Logo" />
            </div>

            <ul>
                <li><Link to="/" className="home-link">Home</Link></li>
                <li><Link to="/team" className="team-link">Team</Link></li>
                <li><Link to="/sports" className="sports-link">Sports</Link></li>
                <li><Link to="/pool" className="pool-link">Pool</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;