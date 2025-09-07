import React from 'react';

const HockeyRules = () => {
    const hockeyRulebook = {
        sections: {
            // ... (rest of the sections data)
            matchStructure: {
                heading: 'Match Structure',
                rules: [
                    'Each match will consist of 4 quarters of 15 minutes each, with a 2-minute break between quarters and a 10-minute halftime.',
                    "If a knockout match ends in a draw, extra time of 7 minutes each way will be played with 'Golden Goal' rule.",
                    'If still tied, the match will be decided by a Penalty Shoot-Out (5 attempts per team, sudden death if tied).'
                ]
            },
            teamComposition: {
                heading: 'Team Composition',
                rules: [
                    'Each team will consist of 11 players on the field, including the goalkeeper.',
                    'Teams may register up to 5 substitutes per match.',
                    'A minimum of 7 players must be present on the field for the match to continue.'
                ]
            },
            scoringSystem: {
                heading: 'Scoring System',
                rules: [
                    'Each goal scored within the playing field counts as 1 point.',
                    'Goals can only be scored from within the shooting circle.',
                    'The team with the most goals at the end of the match wins.'
                ]
            },
            playRules: {
                heading: 'Play Rules',
                rules: [
                    'Obstruction, high sticks, and dangerous play are not allowed.',
                    'Free hits and penalty corners will be awarded for specific rule violations.',
                    'Green, yellow, and red cards are used for disciplinary actions.'
                ]
            },
            substitutionRules: {
                heading: 'Substitution Rules',
                rules: [
                    'Rolling substitutions are allowed during stoppages and play, provided players enter and exit within the designated substitution area.',
                    'Goalkeeper substitution is allowed at any time, but must be done in the designated area.'
                ]
            },
            conduct: {
                heading: 'Conduct & Fair Play',
                rules: [
                    'Players must respect umpire decisions at all times.',
                    'Misconduct (violent behavior, dissent, or deliberate rule violations) may result in green, yellow, or red cards.',
                    'Teams must be ready to start on time; delays may result in penalties or default.'
                ]
            },
            equipment: {
                heading: 'Equipment & Field Specifications',
                rules: [
                    'Matches will be played with FIH-approved hockey balls and sticks.',
                    'Players must wear shin guards, mouth guards, and appropriate shoes.',
                    'Goalkeepers must wear full protective gear, including helmet, pads, gloves, and chest protector.',
                    'Field dimensions, goal size, and markings will follow FIH standards.'
                ]
            }
        }
    };

    return (
        <div className="sport-rules-container">
            <h2>Rules for Hockey</h2> {/* This is the new heading */}
            {Object.values(hockeyRulebook.sections).map((section, index) => (
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

export default HockeyRules;