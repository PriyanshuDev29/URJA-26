// src/components/PointsTable/sports/basketball/boys/knockout.js

export const chessBoysKnockout = {
    rounds: [
        {
            name: "Semi-finals",
            matches: [
                { id: "SF1", team1: "Winner QF1", team2: "Winner QF2", winner: "Winner QF1", score1: "78", score2: "77" },
                { id: "SF2", team1: "Winner QF3", team2: "Winner QF4", winner: "Winner QF4", score1: "62", score2: "70" },
            ]
        },
        {
            name: "Final",
            matches: [
                { id: "F1", team1: "Winner SF1", team2: "Winner SF2", winner: "Winner SF1", score1: "85", score2: "83" },
            ]
        },
        {
            name: "Winner",
            matches: [
                { id: "W1", team1: "Winner SF1", team2: null, winner: "Winner SF1", score1: null, score2: null },
            ]
        }
    ]
};