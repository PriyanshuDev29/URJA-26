import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
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
                    <div className="footer-social">
                        <a href="https://www.facebook.com/urjanitjsr/" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
                        <a href="https://www.instagram.com/urja_nitjsr" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                    </div>
                </div>

                 <div className="footer-col">
                    <h4>Legal</h4>
                    <ul>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Terms & Conditions</a></li>
                        <li><a href="#">Refund Policy</a></li>
                        <li><a href="#">Shipping Policy</a></li>
                    </ul>
                </div>
                <div className="footer-col">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/team">Team</Link></li>
                        <li><Link to="/sports">Sports</Link></li>
                        <li><Link to="/pool">Pool</Link></li>
                        <li><Link to="/points-table">Points Table</Link></li>
                    </ul>
                </div>
               
                <div className="footer-col">
                    <h4>Contact Us</h4>
                    <ul className="footer-contact">
                        <li><FaMapMarkerAlt className="footer-icon" /> National Institute of Technology Jamshedpur,<br /> Adityapur, Jamshedpur,<br /> Jharkhand 831014</li>
                        <li><FaPhoneAlt className="footer-icon" /> +91 76846785348</li>
                        <li><FaEnvelope className="footer-icon" /> urja@nitjsr.ac.in</li>
                    </ul>
                </div>
            </div>
            <hr className="footer-divider" />
            <div className="footer-bottom-bar">
                <span>
                    Designed & Developed By: <span className="footer-devs">Priyanshu, Anshu Raj and Harshit</span>
                </span>
                <span className="footer-visitors">
                    Visitors: <span className="footer-visitor-count">4536</span>
                </span>
            </div>
            <div className="footer-copyright">
                © {new Date().getFullYear()} NIT Jamshedpur — www.urja.com
            </div>
        </footer>
    );
}

export default Footer;