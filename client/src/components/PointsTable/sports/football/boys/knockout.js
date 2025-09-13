// src/components/PointsTable/sports/basketball/boys/knockout.js

export const footballBoysKnockout = {
    rounds: [
        {
            name: "Semi-finals",
            matches: [
                { id: "SF1", team1: "A1", team2: "B2", winner: "", score1: "", score2: "" },
                { id: "SF2", team1: "A2", team2: "B1", winner: "", score1: "", score2: "" },
            ]
        },
        {
            name: "Final",
            matches: [
                { id: "F1", team1: "Winner SF1", team2: "Winner SF2", winner: "", score1: "", score2: "" },
            ]
        },
        {
            name: "Winner",
            matches: [
                { id: "W1", team1: "Winner", team2: null, winner: "", score1: null, score2: null },
            ]
        }
    ]
};