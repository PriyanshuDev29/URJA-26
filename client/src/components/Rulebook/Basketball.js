import React from 'react';

const BasketballRules = () => {
    const basketballRulebook = {
        sections: {
            // ... (rest of the sections data)
            matchStructure: {
                heading: 'Match Structure',
                rules: [
                    'Each game consists of 4 quarters of 10 minutes each (FIBA standard) with a 5-minute halftime break.',
                    'If the game ends in a tie, overtime of 5 minutes will be played until a winner is decided.'
                ]
            },
            teamComposition: {
                heading: 'Team Composition',
                rules: [
                    'Each team consists of 12 players, with 5 players on the court at any time.',
                    'Unlimited substitutions are allowed during stoppages in play.'
                ]
            },
            scoringSystem: {
                heading: 'Scoring System',
                rules: [
                    'Field goals inside the 3-point line = 2 points.',
                    'Field goals beyond the 3-point line = 3 points.',
                    'Free throws = 1 point each.'
                ]
            },
            gameRules: {
                heading: 'Game Rules',
                rules: [
                    'The game is played according to FIBA rules.',
                    'Dribbling is mandatory while moving; traveling and double dribble are violations.',
                    'Personal fouls, technical fouls, and unsportsmanlike conduct are penalized according to FIBA standards.',
                    'A team is disqualified if a player receives 5 personal fouls or 2 technical fouls.'
                ]
            },
            timeouts: {
                heading: 'Timeouts',
                rules: [
                    'Each team is allowed 2 timeouts in the first half and 3 timeouts in the second half.',
                    'Timeouts last for 1 minute each.'
                ]
            },
            conduct: {
                heading: 'Conduct & Fair Play',
                rules: [
                    'Players, coaches, and officials must adhere to principles of fair play and sportsmanship.',
                    'Unsportsmanlike conduct may result in point deductions, ejection, or disqualification.'
                ]
            },
            equipment: {
                heading: 'Equipment',
                rules: [
                    'Games will be played with an official FIBA-approved basketball.',
                    'Players must wear jerseys, shorts, and appropriate basketball shoes.',
                    'Use of jewelry or any unsafe equipment is prohibited.'
                ]
            }
        }
    };

    return (
        <div className="sport-rules-container">
            <h2>Rules for Basketball</h2> {/* This is the new heading */}
            {Object.values(basketballRulebook.sections).map((section, index) => (
                <div key={index}>
                    <h3>{section.heading}</h3>
                    <ul>
                        {section.rules.map((rule, ruleIndex) => (
                            <li key={ruleIndex}>{rule}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default BasketballRules;