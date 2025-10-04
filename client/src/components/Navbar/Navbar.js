// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import './Navbar.css';

// const logo = '/urja-logo-white.png';

// function Navbar() {
//     const [isOpen, setIsOpen] = useState(false);

//     const toggleMenu = () => {
//         setIsOpen(!isOpen);
//     };

//     return (
//         <nav className="navbar">
//             <img src={logo} alt="URJA Logo" className="navbar-logo" />

//             <div className="hamburger" onClick={toggleMenu}>
//                 <div className="line"></div>
//                 <div className="line"></div>
//                 <div className="line"></div>
//             </div>

//             <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
//                 <li><Link to="/" className="home-link" onClick={toggleMenu}>Home</Link></li>
//                 <li><Link to="/team" className="team-link" onClick={toggleMenu}>Team</Link></li>
//                 <li><Link to="/sports" className="sports-link" onClick={toggleMenu}>Sports</Link></li>
//                 <li><Link to="/pool" className="pool-link" onClick={toggleMenu}>Pool</Link></li>
//                 <li><Link to="/points-table" className="points-table-link" onClick={toggleMenu}>Points Table</Link></li>
//                 <li><Link to="/gallery" className="gallery-link" onClick={toggleMenu}>Gallery</Link></li>
//             </ul>
//         </nav>
//     );
// }

// export default Navbar;


//Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const logo = '/urja-logo-white.png';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    // Close the menu when a link is clicked
    const handleLinkClick = () => {
        if (isOpen) {
            setIsOpen(false);
        }
    };

    return (
        <nav className="navbar">
            <Link to="/" onClick={handleLinkClick}>
                <img src={logo} alt="URJA Logo" className="navbar-logo" />
            </Link>

            {/* The "open" class is added here when the menu is active */}
            <div className={`hamburger ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>

            <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
                <li><Link to="/" className="home-link" onClick={handleLinkClick}>Home</Link></li>
                <li><Link to="/team" className="team-link" onClick={handleLinkClick}>Team</Link></li>
                <li><Link to="/sports" className="sports-link" onClick={handleLinkClick}>Sports</Link></li>
                <li><Link to="/pool" className="pool-link" onClick={handleLinkClick}>Pool</Link></li>
                <li><Link to="/points-table" className="points-table-link" onClick={handleLinkClick}>Points Table</Link></li>
                <li><Link to="/gallery" className="gallery-link" onClick={handleLinkClick}>Gallery</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;