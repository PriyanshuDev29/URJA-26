import React from 'react';

const AthleticsRules = () => {
    const athleticsRulebook = {
        sections: {
            // ... (rest of the sections data)
            events: {
                heading: 'Events',
                rules: [
                    'The athletics meet will include track events (sprints, middle distance, long distance, hurdles, relay) and field events (long jump, high jump, shot put, discus, javelin).',
                    'Each participant may compete in a maximum of 3 events, including a combination of track and field events.',
                    'Relay teams must consist of 4 members.'
                ]
            },
            eligibility: {
                heading: 'Eligibility',
                rules: [
                    'Participants must represent their respective branches.',
                    'Athletes must register before the start of the event and submit age and identity proof if required.',
                    'All participants must wear appropriate athletic attire and shoes.'
                ]
            },
            competitionRules: {
                heading: 'Competition Rules',
                rules: [
                    'Track events follow standard IAAF rules including lane discipline, starting procedures, and false start regulations.',
                    'Field events will follow standard measurement rules; each athlete gets 3 attempts in qualifying rounds and additional attempts in finals.',
                    'Relays must use proper baton exchange zones; violations lead to disqualification.',
                    'All results are final as declared by the officials.'
                ]
            },
            scoring: {
                heading: 'Scoring',
                rules: [
                    'Points will be awarded for positions: 1st = 5 points, 2nd = 3 points, 3rd = 1 point (for team scoring).',
                    'Team trophies will be decided based on total points from all events.'
                ]
            },
            conduct: {
                heading: 'Conduct & Fair Play',
                rules: [
                    "Athletes must respect the officials' decisions at all times.",
                    'Misbehavior, unfair play, or unsportsmanlike conduct may result in disqualification.',
                    'Athletes must report to the marshals 15 minutes before their scheduled events.'
                ]
            },
            equipment: {
                heading: 'Equipment',
                rules: [
                    'Track shoes with spikes are allowed for track events; field event shoes must comply with safety standards.',
                    'All measurement equipment (stopwatches, tape, javelin, discus, shot) will be provided by organizers.',
                    'Athletes are not allowed to use personal equipment unless approved by the officials.'
                ]
            }
        }
    };

    return (
        <div className="sport-rules-container">
            <h2>Rules for Athletics</h2> {/* This is the new heading */}
            {Object.values(athleticsRulebook.sections).map((section, index) => (
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

export default AthleticsRules;