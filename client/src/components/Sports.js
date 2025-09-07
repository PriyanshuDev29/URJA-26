import React, { useState } from 'react';
import './Sports.css';

// Import all the sport content components
import AthleticsRules from './Rulebook/Athletics';
import BadmintonRules from './Rulebook/Badminton';
import BasketballRules from './Rulebook/Basketball';
import ChessRules from './Rulebook/Chess.js';
import CricketRules from './Rulebook/Cricket';
import FootballRules from './Rulebook/Football';
import HockeyRules from './Rulebook/Hockey';
import LawnTennisRules from './Rulebook/LawnTennis';
import TableTennisRules from './Rulebook/TableTennis';
import VolleyballRules from './Rulebook/Volleyball';

function Sports() {
    const [selectedSport, setSelectedSport] = useState('Athletics');

    // List of sports with their emojis, in alphabetical order
    const sportsList = [
        { name: 'Athletics', emoji: '🏃‍♂️' },
        { name: 'Badminton', emoji: '🏸' }, // Added Badminton here
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
        Badminton: BadmintonRules, // Added Badminton component mapping
        Basketball: BasketballRules,
        Chess: ChessRules,
        Cricket: CricketRules,
        Football: FootballRules,
        Hockey: HockeyRules,
        'Lawn Tennis': LawnTennisRules,
        'Table Tennis': TableTennisRules,
        Volleyball: VolleyballRules,
    };

    const handleSportChange = (event) => {
        setSelectedSport(event.target.value);
    };

    // Get the component to render based on the selected sport
    const SelectedSportComponent = SportComponents[selectedSport];

    return (
        <div className="sports-page-content">
            <h1 className="main-sports-heading">Sports</h1>
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
            <div className="sport-content">
                {/* Conditionally render the selected component */}
                {SelectedSportComponent ? <SelectedSportComponent /> : null}
            </div>
        </div>
    );
}

export default Sports;