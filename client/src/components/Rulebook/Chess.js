import React from 'react';

const ChessRules = () => {
    const chessRulebook = {
        sections: {
            // ... (rest of the sections data)
            teamComposition: {
                heading: 'Team Composition',
                rules: [
                    'Each team will consist of 4 main players.',
                    'Each team will play 3 league matches.'
                ]
            },
            matchFormat: {
                heading: 'Match Format',
                rules: [
                    'Matches will be played in a limited time format.',
                    'The objective is to checkmate the opponent’s king or force resignation.'
                ]
            },
            scoringSystem: {
                heading: 'Scoring System',
                rules: ['Win = 1 point', 'Draw = 0.5 point', 'Loss = 0 points']
            },
            standardRules: {
                heading: 'Standard Chess Rules',
                rules: [
                    'All rules of stalemate, en passant, and threefold repetition will be applied.',
                    'All official FIDE rules regarding points, legal/illegal moves, and appeals will be followed.'
                ]
            }
        }
    };

    return (
        <div className="sport-rules-container">
            <h2>Rules for Chess</h2> {/* This is the new heading */}
            {Object.values(chessRulebook.sections).map((section, index) => (
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

export default ChessRules;