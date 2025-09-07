import React from 'react';

const FootballRules = () => {
    const footballRulebook = {
        // ... (rest of the data)
        overview: {
            title: 'URJA Football Rulebook – NIT Jamshedpur',
            baseRules: 'Unless otherwise stated, matches will be played according to FIFA laws.',
            note: 'The referee’s decision is final in all cases. No protests will be entertained.'
        },
        sections: {
            matchFormat: {
                heading: 'Match Format',
                rules: [
                    'All categories will play 11-a-side.',
                    'Each match consists of two 20-minute halves (max), with a 5-minute halftime break.',
                    'Referees may add stoppage time at their discretion.',
                    'Heading the ball is permitted in all divisions.',
                    'A minimum of 7 players must remain on the field for a team to continue the match.',
                    'A maximum of 5 registered substitutions are allowed per game.'
                ]
            },
            scoringSystem: {
                heading: 'Points System',
                rules: ['Win = 3 points', 'Draw = 1 point', 'Loss = 0 points']
            },
            groupAndChampionship: {
                heading: 'Group & Championship Stages',
                rules: [
                    'Number of games played depends on the number of teams in the group.',
                    'During group stages, draws remain as draws (1 point each).',
                    'Tie-breakers in group standings will be decided by:',
                    '1) Goal Differential',
                    '2) Goals Scored',
                    '3) Most wins',
                    '4) Head-to-head match result',
                    '5) Coin toss'
                ]
            },
            playerEquipment: {
                heading: 'Player Equipment',
                rules: [
                    'Players must wear proper attire: jersey, shorts, boots, and shin guards.',
                    'Ornaments such as rings, necklaces, etc. are strictly prohibited for safety reasons.',
                    'Players can only play for one team per their branch.'
                ]
            },
            teamComposition: {
                heading: 'Team Composition',
                rules: [
                    'Teams may register as many players as they want.',
                    'Maximum 16 players can be in uniform for a game.',
                    'Only 11 players are allowed on the field at one time.',
                    'Maximum 5 substitutes allowed on the bench.',
                    'Recommended team size: No more than 16 players per team.'
                ]
            },
            medicalAndLiability: {
                heading: 'Medical & Liability',
                rules: [
                    'A medical team will be on site during tournament play hours.',
                    'Medical staff may prioritize hospital transport if necessary.',
                    'Final decision lies with medical personnel and the player’s guardian (if any).'
                ]
            }
        }
    };

    return (
        <div className="sport-rules-container">
            <h2>Rules for Football</h2> {/* This is the new heading */}
            {Object.values(footballRulebook.sections).map((section, index) => (
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

export default FootballRules;