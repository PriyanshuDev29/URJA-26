import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const logo = '/urja-logo-white.png';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar">
            <img src={logo} alt="URJA Logo" className="navbar-logo" />

            <div className="hamburger" onClick={toggleMenu}>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>

            <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
                <li><Link to="/" className="home-link" onClick={toggleMenu}>Home</Link></li>
                <li><Link to="/team" className="team-link" onClick={toggleMenu}>Team</Link></li>
                <li><Link to="/sports" className="sports-link" onClick={toggleMenu}>Sports</Link></li>
                <li><Link to="/pool" className="pool-link" onClick={toggleMenu}>Pool</Link></li>
                <li><Link to="/points-table" className="points-table-link" onClick={toggleMenu}>Points Table</Link></li>
                <li><Link to="/leaderboard" onClick={toggleMenu}>Leaderboard</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;