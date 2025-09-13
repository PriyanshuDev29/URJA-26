// src/ScoreboardsData.js

export const scoreboardsData = {
    'Basketball': {
        'Boys': {
            'Pool A': {
                pointsTable: {
                    headings: ['Team', 'Pld', 'W', 'L', 'Pts'],
                    data: [
                        ['Team A (ME)', 2, 2, 0, 4],
                        ['Team B (CSE)', 2, 1, 1, 2],
                        ['Team C (ECE)', 2, 0, 2, 0],
                    ]
                },
                matches: [
                    { date: '10 September 2025', time: '17:00', teams: ['Team A (ME)', 'Team B (CSE)'], scores: ['80', '75'], winner: 'Team A (ME)', winBy: '5 points', venue: 'Basketball Court', scorecardUrl: '#' },
                    { date: '11 September 2025', time: '18:00', teams: ['Team B (CSE)', 'Team C (ECE)'], scores: ['90', '82'], winner: 'Team B (CSE)', winBy: '8 points', venue: 'Basketball Court', scorecardUrl: '#' }
                ]
            },
            'Pool B': {
                pointsTable: {
                    headings: ['Team', 'Pld', 'W', 'L', 'Pts'],
                    data: [
                        ['Team D (EE)', 2, 2, 0, 4],
                        ['Team E (PIE)', 2, 1, 1, 2],
                        ['Team F (CS)', 2, 0, 2, 0],
                    ]
                },
                matches: [
                    { date: '10 September 2025', time: '19:00', teams: ['Team D (EE)', 'Team E (PIE)'], scores: ['88', '70'], winner: 'Team D (EE)', winBy: '18 points', venue: 'Basketball Court', scorecardUrl: '#' },
                    { date: '11 September 2025', time: '20:00', teams: ['Team E (PIE)', 'Team F (CS)'], scores: ['75', '68'], winner: 'Team E (PIE)', winBy: '7 points', venue: 'Basketball Court', scorecardUrl: '#' }
                ]
            }
        }
    },
    'Chess': {
        'Boys': {
            'Pool A': {
                pointsTable: {
                    headings: ['Player', 'Pld', 'W', 'D', 'L', 'Pts'],
                    data: [
                        ['Player A (ME)', 2, 2, 0, 0, 2],
                        ['Player B (CSE)', 2, 1, 0, 1, 1],
                        ['Player C (ECE)', 2, 0, 0, 2, 0],
                    ]
                },
                matches: [
                    { date: '10 September 2025', time: '14:00', teams: ['Player A (ME)', 'Player B (CSE)'], scores: ['1-0'], winner: 'Player A (ME)', winBy: 'checkmate', venue: 'SAC', scorecardUrl: '#' },
                    { date: '11 September 2025', time: '15:00', teams: ['Player B (CSE)', 'Player C (ECE)'], scores: ['1-0'], winner: 'Player B (CSE)', winBy: 'checkmate', venue: 'SAC', scorecardUrl: '#' }
                ]
            },
            'Pool B': {
                pointsTable: {
                    headings: ['Player', 'Pld', 'W', 'D', 'L', 'Pts'],
                    data: [
                        ['Player D (EE)', 2, 2, 0, 0, 2],
                        ['Player E (PIE)', 2, 1, 0, 1, 1],
                        ['Player F (CS)', 2, 0, 0, 2, 0],
                    ]
                },
                matches: [
                    { date: '10 September 2025', time: '16:00', teams: ['Player D (EE)', 'Player E (PIE)'], scores: ['1-0'], winner: 'Player D (EE)', winBy: 'checkmate', venue: 'SAC', scorecardUrl: '#' },
                    { date: '11 September 2025', time: '17:00', teams: ['Player E (PIE)', 'Player F (CS)'], scores: ['1-0'], winner: 'Player E (PIE)', winBy: 'checkmate', venue: 'SAC', scorecardUrl: '#' }
                ]
            }
        }
    },
    'Cricket': {
        'Boys': {
            'Pool A': {
                pointsTable: {
                    headings: ['Pos', 'Team', 'Pld', 'W', 'L', 'NR', 'Pts', 'NRR'],
                    data: [
                        ['1', 'Team A (ME)', '1', '1', '0', '0', '2', '10.483'],
                        ['2', 'Team B (CSE)', '0', '0', '0', '0', '0', '—'],
                    ]
                },
                matches: [
                    { date: '10 September 2025', time: '18:30 (N)', teams: ['Team B (CSE)', 'Team A (ME)'], scores: ['57/7 (13.1 overs)', '60/1 (4.3 overs)'], winner: 'Team A (ME)', winBy: '9 wickets', venue: 'NIT Jamshedpur Stadium', scorecardUrl: '#' }
                ]
            },
            'Pool B': {
                pointsTable: {
                    headings: ['Pos', 'Team', 'Pld', 'W', 'L', 'NR', 'Pts', 'NRR'],
                    data: [
                        ['1', 'Team C (ECE)', '1', '0', '1', '0', '0', '-10.483'],
                        ['2', 'Team D (EE)', '0', '0', '0', '0', '0', '—'],
                    ]
                },
                matches: [
                    { date: '12 September 2025', time: '18:30 (N)', teams: ['Team C (ECE)', 'Team D (EE)'], scores: ['—', '—'], winner: 'Upcoming Match', winBy: '', venue: 'NIT Jamshedpur Stadium', scorecardUrl: '#' }
                ]
            }
        },
        'Girls': {
            'Pool A': {
                pointsTable: {
                    headings: ['Pos', 'Team', 'Pld', 'W', 'L', 'NR', 'Pts', 'NRR'],
                    data: [
                        ['1', 'Team A (PG)', '1', '1', '0', '0', '2', '8.50'],
                        ['2', 'Team B (ME)', '1', '0', '1', '0', '0', '-8.50'],
                    ]
                },
                matches: [
                    { date: '11 September 2025', time: '14:00', teams: ['Team A (PG)', 'Team B (ME)'], scores: ['110/3', '90/5'], winner: 'Team A (PG)', winBy: '20 runs', venue: 'NIT Jamshedpur Stadium', scorecardUrl: '#' }
                ]
            }
        }
    },
    'Football': {
        'Boys': {
            'Pool A': {
                pointsTable: {
                    headings: ['Team', 'Pld', 'W', 'D', 'L', 'Pts'],
                    data: [
                        ['Team A (ME)', 2, 2, 0, 0, 6],
                        ['Team B (CSE)', 2, 1, 0, 1, 3],
                        ['Team C (ECE)', 2, 0, 0, 2, 0],
                    ]
                },
                matches: [
                    { date: '10 September 2025', time: '16:00', teams: ['Team A (ME)', 'Team B (CSE)'], scores: ['2', '1'], winner: 'Team A (ME)', winBy: '1 Goal', venue: 'Football Ground', scorecardUrl: '#' },
                    { date: '11 September 2025', time: '17:30', teams: ['Team B (CSE)', 'Team C (ECE)'], scores: ['1', '0'], winner: 'Team B (CSE)', winBy: '1 Goal', venue: 'Football Ground', scorecardUrl: '#' }
                ]
            },
            'Pool B': {
                pointsTable: {
                    headings: ['Team', 'Pld', 'W', 'D', 'L', 'Pts'],
                    data: [
                        ['Team D (EE)', 2, 2, 0, 0, 6],
                        ['Team E (PIE)', 2, 1, 0, 1, 3],
                        ['Team F (CS)', 2, 0, 0, 2, 0],
                    ]
                },
                matches: [
                    { date: '10 September 2025', time: '17:00', teams: ['Team D (EE)', 'Team E (PIE)'], scores: ['3', '0'], winner: 'Team D (EE)', winBy: '3 Goals', venue: 'Football Ground', scorecardUrl: '#' },
                    { date: '11 September 2025', time: '18:30', teams: ['Team E (PIE)', 'Team F (CS)'], scores: ['1', '0'], winner: 'Team E (PIE)', winBy: '1 Goal', venue: 'Football Ground', scorecardUrl: '#' }
                ]
            }
        }
    },
    'Hockey': {
        'Boys': {
            'Pool A': {
                pointsTable: {
                    headings: ['Team', 'Pld', 'W', 'D', 'L', 'Pts'],
                    data: [
                        ['Team A (ME)', 2, 2, 0, 0, 6],
                        ['Team B (CSE)', 2, 1, 0, 1, 3],
                        ['Team C (ECE)', 2, 0, 0, 2, 0],
                    ]
                },
                matches: [
                    { date: '10 September 2025', time: '16:30', teams: ['Team A (ME)', 'Team B (CSE)'], scores: ['4', '2'], winner: 'Team A (ME)', winBy: '2 Goals', venue: 'Hockey Ground', scorecardUrl: '#' },
                    { date: '11 September 2025', time: '18:00', teams: ['Team B (CSE)', 'Team C (ECE)'], scores: ['3', '1'], winner: 'Team B (CSE)', winBy: '2 Goals', venue: 'Hockey Ground', scorecardUrl: '#' }
                ]
            },
            'Pool B': {
                pointsTable: {
                    headings: ['Team', 'Pld', 'W', 'D', 'L', 'Pts'],
                    data: [
                        ['Team D (EE)', 2, 2, 0, 0, 6],
                        ['Team E (PIE)', 2, 1, 0, 1, 3],
                        ['Team F (CS)', 2, 0, 0, 2, 0],
                    ]
                },
                matches: [
                    { date: '10 September 2025', time: '17:30', teams: ['Team D (EE)', 'Team E (PIE)'], scores: ['5', '1'], winner: 'Team D (EE)', winBy: '4 Goals', venue: 'Hockey Ground', scorecardUrl: '#' },
                    { date: '11 September 2025', time: '19:00', teams: ['Team E (PIE)', 'Team F (CS)'], scores: ['2', '0'], winner: 'Team E (PIE)', winBy: '2 Goals', venue: 'Hockey Ground', scorecardUrl: '#' }
                ]
            }
        }
    },
    'Lawn Tennis': {
        'Boys': {
            'Pool A': {
                pointsTable: {
                    headings: ['Player', 'Sets Won', 'Sets Lost', 'Matches Won'],
                    data: [
                        ['Harshit Srivastava (CS)', 2, 4, 1, 1],
                        ['Priyanshu Dev (CE)', 2, 4, 1, 1],
                        ['Mrinal Ayush (MM)', 2, 2, 2, 0],
                    ]
                },
                matches: [
                    { date: '10 September 2025', time: '13:00', teams: ['Harshit Srivastava', 'Priyanshu Dev'], scores: ['2', '1'], winner: 'Harshit Srivastava', winBy: '2-1 sets', venue: 'Lawn Tennis Court', scorecardUrl: '#' },
                    { date: '11 September 2025', time: '14:00', teams: ['Priyanshu Dev', 'Mrinal Ayush'], scores: ['1', '2'], winner: 'Mrinal Ayush', winBy: '2-1 sets', venue: 'Lawn Tennis Court', scorecardUrl: '#' }
                ]
            },
            'Pool B': {
                pointsTable: {
                    headings: ['Player', 'Sets Won', 'Sets Lost', 'Matches Won'],
                    data: [
                        ['Nainish Singh (MM)', 2, 4, 1, 1],
                        ['Sagar Gupta (CSE)', 2, 3, 2, 1],
                        ['Chandan Chatterjee (PIE)', 2, 1, 4, 0],
                    ]
                },
                matches: [
                    { date: '10 September 2025', time: '15:00', teams: ['Nainish Singh', 'Sagar Gupta'], scores: ['2', '1'], winner: 'Nainish Singh', winBy: '2-1 sets', venue: 'Lawn Tennis Court', scorecardUrl: '#' },
                    { date: '11 September 2025', time: '16:00', teams: ['Sagar Gupta', 'Chandan Chatterjee'], scores: ['2', '0'], winner: 'Sagar Gupta', winBy: '2-0 sets', venue: 'Lawn Tennis Court', scorecardUrl: '#' }
                ]
            }
        }
    },
    'Table Tennis': {
        'Boys': {
            'Pool A': {
                pointsTable: {
                    headings: ['Player', 'Games Won', 'Games Lost', 'Matches Won'],
                    data: [
                        ['Harshit Srivastava (CS)', 2, 6, 1, 1],
                        ['Priyanshu Dev (CE)', 2, 4, 3, 1],
                        ['Mrinal Ayush (MM)', 2, 1, 7, 0],
                    ]
                },
                matches: [
                    { date: '10 September 2025', time: '12:00', teams: ['Harshit Srivastava', 'Priyanshu Dev'], scores: ['3', '1'], winner: 'Harshit Srivastava', winBy: '3-1 games', venue: 'Table Tennis Hall', scorecardUrl: '#' },
                    { date: '11 September 2025', time: '13:00', teams: ['Priyanshu Dev', 'Mrinal Ayush'], scores: ['3', '0'], winner: 'Priyanshu Dev', winBy: '3-0 games', venue: 'Table Tennis Hall', scorecardUrl: '#' }
                ]
            },
            'Pool B': {
                pointsTable: {
                    headings: ['Player', 'Games Won', 'Games Lost', 'Matches Won'],
                    data: [
                        ['Nainish Singh (MM)', 2, 6, 2, 1],
                        ['Abhishek Bhoutkar (PIE)', 2, 5, 3, 1],
                        ['Chandan Chatterjee (PIE)', 2, 2, 8, 0],
                    ]
                },
                matches: [
                    { date: '10 September 2025', time: '14:00', teams: ['Nainish Singh', 'Abhishek Bhoutkar'], scores: ['3', '2'], winner: 'Nainish Singh', winBy: '3-2 games', venue: 'Table Tennis Hall', scorecardUrl: '#' },
                    { date: '11 September 2025', time: '15:00', teams: ['Abhishek Bhoutkar', 'Chandan Chatterjee'], scores: ['3', '0'], winner: 'Abhishek Bhoutkar', winBy: '3-0 games', venue: 'Table Tennis Hall', scorecardUrl: '#' }
                ]
            }
        }
    },
    'Volleyball': {
        'Boys': {
            'Pool A': {
                pointsTable: {
                    headings: ['Team', 'Pld', 'W', 'L', 'Sets Won', 'Sets Lost'],
                    data: [
                        ['Team A (ME)', 2, 2, 0, '4', '1'],
                        ['Team B (CSE)', 2, 1, 1, '2', '2'],
                        ['Team C (ECE)', 2, 0, 2, '1', '4'],
                    ]
                },
                matches: [
                    { date: '10 September 2025', time: '15:00', teams: ['Team A (ME)', 'Team B (CSE)'], scores: ['2', '0'], winner: 'Team A (ME)', winBy: '2-0 sets', venue: 'Volleyball Court', scorecardUrl: '#' },
                    { date: '11 September 2025', time: '16:00', teams: ['Team B (CSE)', 'Team C (ECE)'], scores: ['2', '1'], winner: 'Team B (CSE)', winBy: '2-1 sets', venue: 'Volleyball Court', scorecardUrl: '#' }
                ]
            },
            'Pool B': {
                pointsTable: {
                    headings: ['Team', 'Pld', 'W', 'L', 'Sets Won', 'Sets Lost'],
                    data: [
                        ['Team D (EE)', 2, 2, 0, '4', '0'],
                        ['Team E (PIE)', 2, 1, 1, '2', '2'],
                        ['Team F (CS)', 2, 0, 2, '0', '4'],
                    ]
                },
                matches: [
                    { date: '10 September 2025', time: '16:00', teams: ['Team D (EE)', 'Team E (PIE)'], scores: ['2', '0'], winner: 'Team D (EE)', winBy: '2-0 sets', venue: 'Volleyball Court', scorecardUrl: '#' },
                    { date: '11 September 2025', time: '17:00', teams: ['Team E (PIE)', 'Team F (CS)'], scores: ['2', '0'], winner: 'Team E (PIE)', winBy: '2-0 sets', venue: 'Volleyball Court', scorecardUrl: '#' }
                ]
            }
        }
    }
};