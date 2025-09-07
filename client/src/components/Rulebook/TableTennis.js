import React from 'react';

const TableTennisRules = () => {
    const tableTennisRulebook = {
        sections: {
            // ... (rest of the sections data)
            matchStructure: {
                heading: 'Match Structure',
                rules: [
                    'Matches will be played as the best of 5 games.',
                    'Each game is played to 11 points.',
                    'A player must win by 2 points to win a game.'
                ]
            },
            teamComposition: {
                heading: 'Team Composition',
                rules: [
                    "Men's and Women's singles and doubles categories will be held.",
                    'Teams must register a minimum of 2 players for singles and up to 4 players for singles + doubles.',
                    'No player substitution is allowed after a match has started.'
                ]
            },
            scoringSystem: {
                heading: 'Scoring System',
                rules: [
                    'Points are scored on every rally.',
                    "At 10-10, the score is 'Deuce', and a player must win by two consecutive points to win the game."
                ]
            },
            serviceRules: {
                heading: 'Service Rules',
                rules: [
                    'The server must toss the ball at least 16 cm high.',
                    'The service must be visible to the opponent.',
                    "The ball must first hit the server's side of the table and then the opponent's side.",
                    'The server alternates every two points.',
                    "A 'let' is called if the ball touches the net during service and lands in the opponent's court; the serve is replayed."
                ]
            },
            gameRules: {
                heading: 'Game Rules',
                rules: [
                    'The ball must be hit as soon as it bounces on your side of the table.',
                    'The racket must be held in a way that the back of the hand is visible during service.',
                    'Volleying the ball (hitting it before it bounces on your side) is not allowed.',
                    'The edge of the table is considered in play; a hit on the side of the table is not.'
                ]
            },
            conduct: {
                heading: 'Conduct & Fair Play',
                rules: [
                    'Players must not hide the service with their body or free arm.',
                    'Disruptive behavior or verbal abuse will not be tolerated.',
                    "The umpire's decision is final."
                ]
            }
        }
    };

    return (
        <div className="sport-rules-container">
            <h2>Rules for Table Tennis</h2> {/* This is the new heading */}
            {Object.values(tableTennisRulebook.sections).map((section, index) => (
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

export default TableTennisRules;