import React from 'react';

const BadmintonRules = () => {
    const badmintonRulebook = {
        sections: {
            // ... (rest of the sections data)
            mensTeamEvent: {
                heading: 'Men’s Team Event',
                teamSize: 'Minimum 6 players, maximum 7 players per team',
                matchFormat: [
                    'Each tie consists of 5 matches.',
                    'Each match is best of 3 games, 15 points each (with deuce & advantage until 21-21; first to 22 wins).',
                    'Sequence of matches: 1st Singles → 2nd Singles → 1st Doubles → 3rd Singles → 2nd Doubles.',
                    'Only two players are allowed to repeat (can play both singles and doubles).',
                    'Each match won = +1 point, lost = +0.',
                    'Team with higher overall tie score after 5 matches wins and proceeds to the next round.'
                ],
                finalsFormat: [
                    'Semi-finals & finals: Best of 3 games of 21 points each.',
                    'Deuce & advantage until 30-30; first to 31 wins.'
                ]
            },
            womensTeamEvent: {
                heading: 'Women’s Team Event',
                teamSize: 'Minimum 3 players, maximum 5 players per team',
                matchFormat: [
                    'Each tie consists of 3 matches.',
                    'Each match is best of 3 games of 21 points each (with deuce & advantage until 30-30; first to 31 wins).',
                    'Only one player is allowed to repeat (can play both singles and doubles).',
                    'Sequence of matches: 1st Singles → 1st Doubles → 2nd Singles.',
                    'Each match won = +1 point, lost = +0.',
                    'Team with higher score (winning 2 of 3 matches) wins the tie.'
                ]
            },
            tournamentRules: {
                heading: 'Tournament Regulations',
                rules: [
                    'Decisions are made by linesmen; in case of disagreement, referee makes the final call.',
                    'No participating students can act as linesmen if there are no extra linesmen.',
                    'Umpire’s and Sports Head’s decisions are final and binding.',
                    'Each team must submit player order before the match.',
                    'Submitted order cannot be changed later.',
                    'Any participant causing chaos, misunderstanding, or arguments will result in branch disqualification, awarding a point to the opposing team.'
                ]
            }
        }
    };

    return (
        <div className="sport-rules-container">
            <h2>Rules for Badminton</h2> {/* This is the new heading */}
            {Object.values(badmintonRulebook.sections).map((section, index) => (
                <div key={index}>
                    <h3>{section.heading}</h3>
                    {section.teamSize && <p><strong>Team Size:</strong> {section.teamSize}</p>}
                    {section.matchFormat && (
                        <>
                            <h4>Match Format:</h4>
                            <ul>
                                {section.matchFormat.map((rule, ruleIndex) => (
                                    <li key={ruleIndex}>{rule}</li>
                                ))}
                            </ul>
                        </>
                    )}
                    {section.finalsFormat && (
                        <>
                            <h4>Finals Format:</h4>
                            <ul>
                                {section.finalsFormat.map((rule, ruleIndex) => (
                                    <li key={ruleIndex}>{rule}</li>
                                ))}
                            </ul>
                        </>
                    )}
                    {section.rules && (
                        <ul>
                            {section.rules.map((rule, ruleIndex) => (
                                <li key={ruleIndex}>{rule}</li>
                            ))}
                        </ul>
                    )}
                </div>
            ))}
        </div>
    );
};

export default BadmintonRules;