import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const logo = '/urja-logo-white.png';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    
    useEffect(() => {
        if (isOpen) {
            document.body.classList.add('menu-open');
        } else {
            document.body.classList.remove('menu-open');
        }
        
        // Cleanup on unmount
        return () => {
            document.body.classList.remove('menu-open');
        };
    }, [isOpen]);

    return (
        <nav className="navbar">
            {/* Logo - hidden when menu is open on mobile */}
            <img 
                src={logo} 
                alt="URJA Logo" 
                className={`navbar-logo ${isOpen ? 'hide-logo' : ''}`} 
            />

            {/* Hamburger Menu */}
            <div className={`hamburger ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>

            {/* Navigation Links */}
            <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
                <li><Link to="/" className="home-link" onClick={closeMenu}>Home</Link></li>
                <li><Link to="/team" className="team-link" onClick={closeMenu}>Team</Link></li>
                <li><Link to="/sports" className="sports-link" onClick={closeMenu}>Sports</Link></li>
                <li><Link to="/gallery" className="gallery-link" onClick={closeMenu}>Gallery</Link></li>
                <li><Link to="/pool" className="pool-link" onClick={closeMenu}>Pool</Link></li>
                <li><Link to="/branch-leaderboard" className="branch-leaderboard-link" onClick={closeMenu}>Branch Leaderboard</Link></li>
                <li><Link to="/points-table" className="points-table-link" onClick={closeMenu}>Points Table</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;