import React, { useState, useEffect, useRef } from 'react';
import './Sports.css';

// Import all the sport content components
import AthleticsRules from '../Rulebook/Athletics.js';
import BadmintonRules from '../Rulebook/Badminton.js';
import BasketballRules from '../Rulebook/Basketball.js';
import ChessRules from '../Rulebook/Chess.js';
import CricketRules from '../Rulebook/Cricket.js';
import FootballRules from '../Rulebook/Football.js';
import HockeyRules from '../Rulebook/Hockey.js';
import LawnTennisRules from '../Rulebook/LawnTennis.js';
import TableTennisRules from '../Rulebook/TableTennis.js';
import VolleyballRules from '../Rulebook/Volleyball.js';

function Sports() {
    const [selectedSport, setSelectedSport] = useState('Athletics');
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    // List of sports with their emojis, in alphabetical order
    const sportsList = [
        { name: 'Athletics', emoji: '🏃‍♂️' },
        { name: 'Badminton', emoji: '🏸' },
        { name: 'Basketball', emoji: '🏀' },
        { name: 'Chess', emoji: '♟️' },
        { name: 'Cricket', emoji: '🏏' },
        { name: 'Football', emoji: '⚽' },
        { name: 'Hockey', emoji: '🏑' },
        { name: 'Lawn Tennis', emoji: '🎾' },
        { name: 'Table Tennis', emoji: '🏓' },
        { name: 'Volleyball', emoji: '🏐' },
    ];

    // A mapping object to choose which component to render
    const SportComponents = {
        Athletics: AthleticsRules,
        Badminton: BadmintonRules,
        Basketball: BasketballRules,
        Chess: ChessRules,
        Cricket: CricketRules,
        Football: FootballRules,
        Hockey: HockeyRules,
        'Lawn Tennis': LawnTennisRules,
        'Table Tennis': TableTennisRules,
        Volleyball: VolleyballRules,
    };

    // Screen resize listener
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Click outside listener for the dropdown
    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropdownOpen(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [dropdownRef]);

    const handleSportChange = (event) => {
        setSelectedSport(event.target.value);
    };

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleSelectSport = (sportName) => {
        setSelectedSport(sportName);
        setIsDropdownOpen(false);
    };

    const SelectedSportComponent = SportComponents[selectedSport];
    const selectedSportData = sportsList.find(sport => sport.name === selectedSport);

    return (
        <div className="sports-page-content">
            <h1 className="main-sports-heading">Sports</h1>

            {isMobile ? (
                // Mobile Layout: Custom Dropdown
                <div className="sports-dropdown-container" ref={dropdownRef}>
                    <div className="selected-option" onClick={toggleDropdown}>
                        <span className="selected-text">{selectedSportData.emoji} {selectedSportData.name}</span>
                        <span className={`dropdown-arrow ${isDropdownOpen ? 'open' : ''}`}></span>
                    </div>
                    {isDropdownOpen && (
                        <div className="dropdown-options">
                            {sportsList.map((sport) => (
                                <div
                                    key={sport.name}
                                    className="dropdown-item"
                                    onClick={() => handleSelectSport(sport.name)}
                                >
                                    {sport.emoji} {sport.name}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            ) : (
                // Desktop and Tablet Layout: Radio Buttons
                <div className="sports-radio-container">
                    {sportsList.map((sport) => (
                        <label key={sport.name} className="sport-radio-label">
                            <input
                                type="radio"
                                name="sport"
                                value={sport.name}
                                checked={selectedSport === sport.name}
                                onChange={handleSportChange}
                                className="sport-radio-input"
                            />
                            <span className="sport-radio-text">
                                <span className="sport-emoji">{sport.emoji}</span>
                                {sport.name}
                            </span>
                        </label>
                    ))}
                </div>
            )}

            <div className="sport-content">
                {SelectedSportComponent ? <SelectedSportComponent /> : null}
            </div>
        </div>
    );
}

export default Sports;