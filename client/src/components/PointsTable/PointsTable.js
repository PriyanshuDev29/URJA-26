import React, { useState, useEffect, useRef } from 'react';
import './PointsTable.css';

const sportsDataMap = {
    'Basketball': {
        genders: ['Boys', 'Girls'],
        pools: {
            'Boys': ['Pool A', 'Pool B'],
            'Girls': ['Pool A']
        },
        stages: ['Group Stage', 'Knockout']
    },
    'Chess': {
        genders: ['Boys', 'Girls'],
        pools: {
            'Boys': ['Pool A', 'Pool B'],
            'Girls': ['Pool A']
        },
        stages: ['Group Stage', 'Knockout']
    },
    'Cricket': {
        genders: ['Boys'],
        pools: {
            'Boys': ['Pool A', 'Pool B'],
        },
        stages: ['Group Stage', 'Knockout']
    },
    'Football': {
        genders: ['Boys'],
        pools: {
            'Boys': ['Pool A', 'Pool B'],
        },
        stages: ['Group Stage', 'Knockout']
    },
    'Hockey': {
        genders: ['Boys'],
        pools: {
            'Boys': ['Pool A']
        },
        stages: ['Group Stage', 'Knockout']
    },
    'Lawn Tennis': {
        genders: ['Boys', 'Girls'],
        pools: {
            'Boys': ['Pool A'],
            'Girls': ['Pool A']
        },
        stages: ['Group Stage', 'Knockout']
    },
    'Table Tennis': {
        genders: ['Boys', 'Girls'],
        pools: {
            'Boys': ['Pool A', 'Pool B'],
            'Girls': ['Pool A']
        },
        stages: ['Group Stage', 'Knockout']
    },
    'Volleyball': {
        genders: ['Boys', 'Girls'],
        pools: {
            'Boys': ['Pool A', 'Pool B'],
            'Girls': ['Pool A']
        },
        stages: ['Group Stage', 'Knockout']
    },
};


const formatString = (str) => {
    if (!str) return '';
    return str
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
};

function ScoreboardTable({ data }) {
    if (!data || !data.headings || !data.data) return null;
    const pointsColumnIndex = data.headings.findIndex(heading => heading.toLowerCase().includes('pts') || heading.toLowerCase().includes('points'));

    const sortedData = [...data.data].sort((a, b) => {
        if (pointsColumnIndex !== -1) {
            const pointsA = parseFloat(a[pointsColumnIndex]);
            const pointsB = parseFloat(b[pointsColumnIndex]);
            return pointsB - pointsA;
        }
        return 0;
    });

    return (
        <div className="scoreboard-table-container">
            <table>
                <thead>
                    <tr>
                        {data.headings.map((heading, index) => (
                            <th key={index}>{heading}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {sortedData.map((row, rowIndex) => (
                        <tr key={rowIndex}>
                            {row.map((cell, cellIndex) => (
                                <td key={cellIndex}>{cell}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

function MatchesList({ matches }) {
    if (!matches || matches.length === 0) return null;
    return (
        <div className="matches-list-container">
            <h3>Matches</h3>
            {matches.map((match, index) => (
                <div className="match-card" key={index}>
                    <p className="match-date">{match.date} | {match.time}</p>
                    <div className="match-details">
                        <div className="match-team team1">
                            <span>{match.teams[0]}</span>
                        </div>
                        <div className="match-score">
                            {match.scores.length > 1 ? (
                                <p>{match.scores[0]} - {match.scores[1]}</p>
                            ) : (
                                <p>{match.scores[0]}</p>
                            )}
                        </div>
                        {match.teams.length > 1 && (
                            <div className="match-team team2">
                                <span>{match.teams[1]}</span>
                            </div>
                        )}
                    </div>
                    {/* {match.winner !== 'Upcoming Match' && (
                        <p className="match-result">
                            {match.winner} won by {match.winBy}
                        </p>
                    )} */}
                    <p className="match-venue">Venue: {match.venue}</p>
                    {/* <a href={match.scorecardUrl} className="scorecard-link">Scorecard</a> */}
                </div>
            ))}
        </div>
    );
}

function Dropdown({ label, options, value, onChange }) {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    const toggleOpen = () => setIsOpen(!isOpen);

    const handleOptionClick = (option) => {
        onChange({ target: { value: option } });
        setIsOpen(false);
    };

    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [dropdownRef]);

    const displayValue = value ? formatString(value) : (options.length > 0 ? formatString(options[0]) : label);

    return (
        // --- CHANGE: Add active-dropdown class when open ---
        <div className={`dropdown-wrapper ${isOpen ? 'active-dropdown' : ''}`} ref={dropdownRef}>
            <label>{label}:</label>
            <div className={`custom-dropdown-button ${isOpen ? 'open' : ''}`} onClick={toggleOpen}>
                {displayValue}
                <span className="dropdown-arrow"></span>
            </div>
            {isOpen && (
                <ul className="dropdown-menu">
                    {options.map((option) => (
                        <li key={option} onClick={() => handleOptionClick(option)} className={option === value ? 'selected' : ''}>
                            {formatString(option)}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

function KnockoutBracket({ data }) {
    if (!data || !data.rounds || data.rounds.length === 0) {
        return <p className="no-data-message">No knockout bracket data available for this selection.</p>;
    }

    return (
        <div className="knockout-bracket-container">
            {data.rounds.map((round, roundIndex) => (
                <div key={round.name} className={`bracket-round round-${roundIndex}`}>
                    <h3>{round.name}</h3>
                    <div className="round-matches">
                        {round.matches.map((match) => (
                            <div key={match.id} className="bracket-match">
                                {match.team1 && (
                                    <div className="bracket-team">
                                        <span className="team-name">{match.team1}</span>
                                        <span className="team-score">{match.score1}</span>
                                    </div>
                                )}
                                {match.team2 && (
                                    <div className="bracket-team">
                                        <span className="team-name">{match.team2}</span>
                                        <span className="team-score">{match.score2}</span>
                                    </div>
                                )}
                                {match.winner && <p className="match-winner">Winner: {match.winner}</p>}
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}


function PointsTable() {
    const [selectedSport, setSelectedSport] = useState('Basketball');
    const [selectedGender, setSelectedGender] = useState('Boys');
    const [selectedPool, setSelectedPool] = useState('Pool A');
    const [selectedStage, setSelectedStage] = useState('Group Stage');
    const [currentData, setCurrentData] = useState(null);

    // NEW STATE FOR MOBILE DROPDOWN:
    const [isMobileSportDropdownOpen, setIsMobileSportDropdownOpen] = useState(false);
    const mobileDropdownRef = useRef(null);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);


    const sportsList = [
        { name: 'Basketball', emoji: '🏀' },
        { name: 'Chess', emoji: '♟️' },
        { name: 'Cricket', emoji: '🏏' },
        { name: 'Football', emoji: '⚽' },
        { name: 'Hockey', emoji: '🏑' },
        { name: 'Lawn Tennis', emoji: '🎾' },
        { name: 'Table Tennis', emoji: '🏓' },
        { name: 'Volleyball', emoji: '🏐' }
    ];

    // --- State Management and Data Fetching Logic ---

    // Effect to handle dynamic pool selection when sport/gender/stage changes
    useEffect(() => {
        const poolsForCurrentGender = sportsDataMap[selectedSport]?.pools[selectedGender] || [];

        if (selectedStage === 'Group Stage') {
            if (poolsForCurrentGender.length > 0 && !poolsForCurrentGender.includes(selectedPool)) {
                setSelectedPool(poolsForCurrentGender[0]);
            } else if (poolsForCurrentGender.length === 0) {
                setSelectedPool('');
            }
        } else if (selectedStage === 'Knockout') {
            setSelectedPool('');
        }
    }, [selectedSport, selectedGender, selectedStage, selectedPool]);


    // Effect to import the data based on current selections
    useEffect(() => {
        const importData = async () => {
            setCurrentData(null);

            if (!selectedSport || !selectedGender || (selectedStage === 'Group Stage' && !selectedPool)) {
                return;
            }

            try {
                const sportFolderPath = selectedSport.toLowerCase().replace(' ', '-');
                const genderFolderPath = selectedGender.toLowerCase().replace(' ', '-');
                let module;
                let dataKey;

                if (selectedStage === 'Group Stage') {
                    const poolFolderPath = selectedPool.toLowerCase().replace(' ', '-');
                    module = await import(`./sports/${sportFolderPath}/${genderFolderPath}/${poolFolderPath}.js`);
                    dataKey = Object.keys(module)[0];
                } else { // Knockout Stage
                    module = await import(`./sports/${sportFolderPath}/${genderFolderPath}/knockout.js`);
                    dataKey = Object.keys(module)[0];
                }
                setCurrentData(module[dataKey]);

            } catch (error) {
                console.error(`Failed to load data for ${selectedSport} - ${selectedGender} - ${selectedStage} (${selectedStage === 'Group Stage' ? selectedPool : 'knockout'}):`, error);
                setCurrentData(null);
            }
        };

        importData();
    }, [selectedSport, selectedGender, selectedPool, selectedStage]);

    // Effect to handle resize and close dropdown on outside click
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        window.addEventListener('resize', handleResize);

        function handleClickOutside(event) {
            if (mobileDropdownRef.current && !mobileDropdownRef.current.contains(event.target)) {
                setIsMobileSportDropdownOpen(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            window.removeEventListener('resize', handleResize);
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    // --- Handler Functions ---

    const handleSportChange = (event) => {
        const newSport = event.target.value;
        setSelectedSport(newSport);
        setIsMobileSportDropdownOpen(false); // Close dropdown after selection

        const genders = sportsDataMap[newSport]?.genders || [];
        if (genders.length > 0) {
            setSelectedGender(genders[0]);
        }
    };

    const handleGenderChange = (event) => {
        const newGender = event.target.value;
        setSelectedGender(newGender);
    };

    const handlePoolChange = (event) => {
        setSelectedPool(event.target.value);
    };

    const handleStageChange = (event) => {
        setSelectedStage(event.target.value);
    };

    const toggleMobileSportDropdown = () => {
        setIsMobileSportDropdownOpen(!isMobileSportDropdownOpen);
    }

    // Helper function to render the mobile dropdown's selected value (with emoji)
    const renderSelectedSport = () => {
        const sport = sportsList.find(s => s.name === selectedSport);
        return sport ? `${sport.emoji} ${sport.name}` : selectedSport;
    }


    const genders = sportsDataMap[selectedSport]?.genders || [];
    const pools = sportsDataMap[selectedSport]?.pools[selectedGender] || [];
    const stages = sportsDataMap[selectedSport]?.stages || [];

    // --- JSX Render ---

    return (
        <div className="points-table-page">
            <h1 className="main-points-heading">Points Table</h1>

            {/* MOBILE SPORT DROPDOWN (Shown when isMobile is true) */}
            {isMobile && (
                <div className="sports-mobile-dropdown-nav" ref={mobileDropdownRef}>
                    <div
                        className={`custom-dropdown-button ${isMobileSportDropdownOpen ? 'open' : ''}`}
                        onClick={toggleMobileSportDropdown}
                    >
                        {renderSelectedSport()}
                        <span className="dropdown-arrow"></span>
                    </div>
                    {isMobileSportDropdownOpen && (
                        <ul className="dropdown-menu">
                            {sportsList.map((sport) => (
                                <li
                                    key={sport.name}
                                    // Simulate the event object expected by handleSportChange
                                    onClick={() => handleSportChange({ target: { value: sport.name } })}
                                    className={sport.name === selectedSport ? 'selected' : ''}
                                >
                                    {sport.emoji} {sport.name}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            )}

            {/* RADIO BUTTONS (Shown when isMobile is false) */}
            {!isMobile && (
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

            <div className="dropdowns-container">
                {genders.length > 0 && (
                    <Dropdown
                        label="Gender"
                        options={genders}
                        value={selectedGender}
                        onChange={handleGenderChange}
                    />
                )}
                {stages.length > 0 && (
                    <Dropdown
                        label="Stage"
                        options={stages}
                        value={selectedStage}
                        onChange={handleStageChange}
                    />
                )}
                {selectedStage === 'Group Stage' && pools.length > 0 && (
                    <Dropdown
                        label="Pool"
                        options={pools}
                        value={selectedPool}
                        onChange={handlePoolChange}
                    />
                )}
            </div>

            <div className="scoreboard-container">
                {currentData ? (
                    <>
                        <h2>
                            {selectedSport} - {formatString(selectedGender)} |&nbsp;
                            {selectedStage === 'Group Stage' ? formatString(selectedPool) : formatString(selectedStage)}
                        </h2>
                        {selectedStage === 'Group Stage' ? (
                            <>
                                <ScoreboardTable data={currentData.pointsTable} />
                                <MatchesList matches={currentData.matches} />
                            </>
                        ) : (
                            <KnockoutBracket data={currentData} />
                        )}
                    </>
                ) : (
                    <p className="no-data-message">No data available for this selection. Make sure the corresponding data file exists.</p>
                )}
            </div>
        </div>
    );
}

export default PointsTable;