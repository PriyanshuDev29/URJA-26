import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import './Footer.css';

const logo = '/urja-logo-white.png';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-main">
                <div className="footer-col footer-about">
                    <img src={logo} alt="URJA Logo" className="footer-logo" />
                    <p className="footer-desc">
                        URJA, NIT Jamshedpur's annual national-level sports festival, is one of the largest of its kind in Eastern India. With a staggering turnout of over 8000+ footfall including students, professionals, educators, and athletes from top colleges across the nation.
                    </p>
                </div>

                <div className="footer-col footer-links">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/team">Team</Link></li>
                        <li><Link to="/sports">Sports</Link></li>
                        <li><Link to="/gallery">Gallery</Link></li>
                        <li><Link to="/pool">Pool</Link></li>
                        <li><Link to="/leaderboard">Leaderboard</Link></li>
                        <li><Link to="/points-table">Points Table</Link></li>
                    </ul>
                </div>

                <div className="footer-col footer-contact-info">
                    <h4>Contact Us</h4>
                    <ul className="footer-contact">
                        <li><FaMapMarkerAlt className="footer-icon" /> National Institute of Technology Jamshedpur,<br /> Adityapur, Jamshedpur,<br /> Jharkhand 831014</li>

                        {/* MODIFICATION: Added the person's name below the phone number */}
                        <li>
                            <FaPhoneAlt className="footer-icon" />
                            <span>
                                +91 8789206563<br />
                                Harshit Singh Rajput (Sports Secretary)
                            </span>
                        </li>

                        <li><FaEnvelope className="footer-icon" /> urja@nitjsr.ac.in</li>
                    </ul>
                </div>

                <div className="footer-col footer-follow">
                    <h4>Follow Us</h4>
                    <div className="footer-social">
                        <a href="https://www.facebook.com/urjanitjsr/" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FaFacebookF /></a>
                        <a href="https://www.instagram.com/urja_nitjsr" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram /></a>
                    </div>
                </div>
            </div>
            <hr className="footer-divider" />

            <div className="footer-copyright">
                © 2026 URJA. All Rights Reserved.
            </div>
        </footer>
    );
}

export default Footer;