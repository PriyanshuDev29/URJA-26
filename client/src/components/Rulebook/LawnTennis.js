import React from 'react';

const LawnTennisRules = () => {
    const lawnTennisRulebook = {
        sections: {
            // ... (rest of the sections data)
            matchStructure: {
                heading: 'Match Structure',
                rules: [
                    'Matches will follow a best-of-3 sets format.',
                    'Each set will be played to 6 games, with a 2-game advantage required to win a set.',
                    'In case of a 6–6 score, a tie-breaker game will decide the set (first to 7 points, win by 2).',
                    'Final matches may follow a best-of-5 sets format, subject to the organizing committee.'
                ]
            },
            teamComposition: {
                heading: 'Team Composition',
                rules: [
                    'Men’s and Women’s singles & doubles categories will be held.',
                    'Each team must register a minimum of 2 players (for singles) and up to 4 players (for singles + doubles).',
                    'Substitution of players is not allowed once a match has started.'
                ]
            },
            scoringSystem: {
                heading: 'Scoring System',
                rules: [
                    'Standard tennis scoring applies: Love (0), 15, 30, 40, and Game.',
                    'A player/team must win by 2 consecutive points if the score reaches Deuce (40–40).',
                    'Tie-breaks are played first to 7 points with a 2-point advantage.'
                ]
            },
            serviceRules: {
                heading: 'Service Rules',
                rules: [
                    'The server must serve diagonally into the opponent’s service box.',
                    'Each player is allowed 2 attempts (1st and 2nd serve) to deliver a valid serve.',
                    "A 'let' serve (ball touches net but lands in the correct service box) is replayed without penalty."
                ]
            },
            conduct: {
                heading: 'Conduct & Fair Play',
                rules: [
                    'Players must respect the umpire’s decisions at all times.',
                    'Coaching during the match is not permitted unless allowed by tournament rules.',
                    'Unsportsmanlike behavior (racquet abuse, verbal abuse, delay of play) may result in warnings, point penalties, or disqualification.'
                ]
            },
            equipment: {
                heading: 'Equipment & Court Specifications',
                rules: [
                    'Matches will be played with ITF-approved tennis balls.',
                    'Players must wear non-marking tennis shoes and proper sports attire.',
                    'Court dimensions and net height will follow standard ITF regulations.'
                ]
            }
        }
    };

    return (
        <div className="sport-rules-container">
            <h2>Rules for Lawn Tennis</h2> {/* This is the new heading */}
            {Object.values(lawnTennisRulebook.sections).map((section, index) => (
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

export default LawnTennisRules;