import React from 'react';

const VolleyballRules = () => {
    const volleyballRulebook = {
        sections: {
            // ... (rest of the sections data)
            matchStructure: {
                heading: 'Match Structure',
                rules: [
                    'Matches will be played as the best of 3 sets.',
                    'A set is won by the first team to reach 25 points, with a minimum lead of 2 points.',
                    'The final set (if needed) is played to 15 points, with a minimum lead of 2 points.'
                ]
            },
            teamComposition: {
                heading: 'Team Composition',
                rules: [
                    'Each team consists of 6 players on the court at a time.',
                    'A maximum of 12 players can be registered per team.',
                    'Substitutions are allowed at any dead ball situation.'
                ]
            },
            scoringSystem: {
                heading: 'Scoring System',
                rules: [
                    'Rally scoring is used; a point is awarded on every rally, regardless of which team served.',
                    'The team that wins the rally gets a point and the right to serve.'
                ]
            },
            gameRules: {
                heading: 'Game Rules',
                rules: [
                    "Each team can touch the ball a maximum of three times to return it to the opponent's side.",
                    'A player cannot touch the ball twice in a row.',
                    'The ball can be hit with any part of the body above the waist.',
                    'Blocking a serve is not allowed.',
                    'Players must rotate one position clockwise after winning the serve.'
                ]
            },
            conduct: {
                heading: 'Conduct & Fair Play',
                rules: [
                    'Players must respect the referee’s decisions.',
                    'Any unsportsmanlike conduct, including verbal abuse or taunting, will be penalized.'
                ]
            },
            equipment: {
                heading: 'Equipment',
                rules: [
                    'Matches will be played with an official volleyball.',
                    'Players must wear appropriate sports attire.',
                    'The net height and court dimensions will follow standard international rules.'
                ]
            }
        }
    };

    return (
        <div className="sport-rules-container">
            <h2>Rules for Volleyball</h2> {/* This is the new heading */}
            {Object.values(volleyballRulebook.sections).map((section, index) => (
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

export default VolleyballRules;