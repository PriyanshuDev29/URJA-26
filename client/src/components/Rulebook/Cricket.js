import React from 'react';

const CricketRules = () => {
    const cricketRulebook = {
        sections: {
            // ... (rest of the sections data)
            matchStructure: {
                heading: 'Match Structure',
                rules: [
                    'The tournament will follow a 10-over format per side.',
                    'Each innings will last a maximum of 10 overs, unless the batting team is bowled out earlier.',
                    'Standard T20 rules will apply, with modifications as decided by the organizing committee.'
                ]
            },
            teamComposition: {
                heading: 'Team Composition',
                rules: [
                    'Each team must field 11 playing members.',
                    'A maximum of 5 substitutes are allowed per match (for injuries or fielding substitutions only).',
                    'Minimum of 7 players are required on the field for a team to continue the match.'
                ]
            },
            oversBowling: {
                heading: 'Overs & Bowling Restrictions',
                rules: [
                    'Each bowler may bowl a maximum of 2 overs in a 10-over match.',
                    'No bowler is permitted to bowl consecutive overs in the same innings unless unavoidable (e.g., due to injury).'
                ]
            },
            battingRules: {
                heading: 'Batting Rules',
                rules: [
                    'Standard dismissal modes apply: bowled, caught, LBW, run-out, stumped, hit-wicket.',
                    'In case of a tied score, the result may be decided by a Super Over or other tie-breaker rules defined by the organizers.'
                ]
            },
            powerplay: {
                heading: 'Powerplay Rules',
                rules: [
                    'The first 3 overs of each innings will be a mandatory powerplay.',
                    'During the powerplay, a maximum of 2 fielders are allowed outside the 30-yard circle.',
                    'From overs 4–10, a maximum of 5 fielders are allowed outside the 30-yard circle.'
                ]
            },
            scoringSystem: {
                heading: 'Scoring System',
                rules: [
                    'Runs will be scored as per standard cricket laws (including extras such as wides, no-balls, and byes).',
                    'In case of tied league points, Net Run Rate (NRR) will be considered for qualification.'
                ]
            },
            conduct: {
                heading: 'Conduct & Fair Play',
                rules: [
                    'Players must adhere to the Spirit of Cricket and maintain sportsmanship.',
                    'Umpire decisions are final and binding.',
                    'Misconduct (abuse, dissent, unfair play) may lead to penalties, including dismissal from the match or tournament.'
                ]
            },
            equipment: {
                heading: 'Equipment & Ground Rules',
                rules: [
                    'Matches will be played with a standard white cricket ball approved by the organizers.',
                    'Players must wear appropriate cricket gear (pads, gloves, helmets for batters).',
                    'Ground dimensions and pitch markings will comply with standard T20 rules, adjusted for the venue if required.'
                ]
            }
        }
    };

    return (
        <div className="sport-rules-container">
            <h2>Rules for Cricket</h2> {/* This is the new heading */}
            {Object.values(cricketRulebook.sections).map((section, index) => (
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

export default CricketRules;