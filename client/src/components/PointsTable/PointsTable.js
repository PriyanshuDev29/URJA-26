import React, { useState, useEffect, useRef } from 'react';
import './PointsTable.css';

const sportsDataMap = {
    'Basketball': {
        genders: ['Boys', 'Girls'],
        pools: {
            'Boys': ['Pool A', 'Pool B'],
            'Girls': ['Pool A']
        },
        stages: ['Group Stage', 'Knockout'] // Added stages
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
        genders: ['Boys', 'Girls'],
        pools: {
            'Boys': ['Pool A', 'Pool B'],
            'Girls': ['Pool A']
        },
        stages: ['Group Stage', 'Knockout']
    },
    'Football': {
        genders: ['Boys', 'Girls'],
        pools: {
            'Boys': ['Pool A', 'Pool B'],
            'Girls': ['Pool A']
        },
        stages: ['Group Stage', 'Knockout']
    },
    'Hockey': {
        genders: ['Boys', 'Girls'],
        pools: {
            'Boys': ['Pool A', 'Pool B'],
            'Girls': ['Pool A']
        },
        stages: ['Group Stage', 'Knockout']
    },
    'Lawn Tennis': {
        genders: ['Boys', 'Girls'],
        pools: {
            'Boys': ['Pool A', 'Pool B'],
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
                    {match.winner !== 'Upcoming Match' && (
                        <p className="match-result">
                            {match.winner} won by {match.winBy}
                        </p>
                    )}
                    <p className="match-venue">Venue: {match.venue}</p>
                    <a href={match.scorecardUrl} className="scorecard-link">Scorecard</a>
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

    return (
        <div className="dropdown-wrapper" ref={dropdownRef}>
            <label>{label}:</label>
            <div className={`custom-dropdown-button ${isOpen ? 'open' : ''}`} onClick={toggleOpen}>
                {formatString(value)}
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

// New KnockoutBracket component
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

    const handleSportChange = (event) => {
        const newSport = event.target.value;
        setSelectedSport(newSport);

        const genders = sportsDataMap[newSport]?.genders || [];
        if (genders.length > 0) {
            setSelectedGender(genders[0]);
            const pools = sportsDataMap[newSport]?.pools[genders[0]] || [];
            if (pools.length > 0) {
                setSelectedPool(pools[0]);
            } else {
                setSelectedPool('');
            }
        }
        setSelectedStage('Group Stage');
    };

    const handleGenderChange = (event) => {
        const newGender = event.target.value;
        setSelectedGender(newGender);
        const pools = sportsDataMap[selectedSport]?.pools[newGender] || [];
        if (pools.length > 0) {
            setSelectedPool(pools[0]);
        } else {
            setSelectedPool('');
        }
        setSelectedStage('Group Stage');
    };

    const handlePoolChange = (event) => {
        setSelectedPool(event.target.value);
    };

    const handleStageChange = (event) => {
        setSelectedStage(event.target.value);
    };


    const genders = sportsDataMap[selectedSport]?.genders || [];
    const pools = sportsDataMap[selectedSport]?.pools[selectedGender] || [];
    const stages = sportsDataMap[selectedSport]?.stages || [];

    return (
        <div className="points-table-page">
            <h1 className="main-points-heading">Points Table</h1>
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