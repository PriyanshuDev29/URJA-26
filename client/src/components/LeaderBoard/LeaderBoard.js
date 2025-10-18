import React, { useState, useEffect } from 'react';
import './LeaderBoard.css';

// --- DATA REMAINS THE SAME ---
const teamsData = [
  {
    name: 'PIE',
    totalPoints: 255,
    breakdown: { 'Athletics': 25, 'Badminton': 30, 'Basketball': 20, 'Chess': 15, 'Cricket': 35, 'Football': 40, 'Handball': 25, 'Hockey': 20, 'Table Tennis': 20, 'Volleyball': 25 }
  },
  {
    name: 'CSE',
    totalPoints: 300,
    breakdown: { 'Athletics': 35, 'Badminton': 35, 'Basketball': 30, 'Chess': 25, 'Cricket': 40, 'Football': 45, 'Handball': 30, 'Hockey': 25, 'Table Tennis': 15, 'Volleyball': 20 }
  },
  {
    name: 'ECE',
    totalPoints: 215,
    breakdown: { 'Athletics': 20, 'Badminton': 25, 'Basketball': 25, 'Chess': 20, 'Cricket': 30, 'Football': 25, 'Handball': 20, 'Hockey': 15, 'Table Tennis': 20, 'Volleyball': 15 }
  },
  {
    name: 'CIVIL',
    totalPoints: 190,
    breakdown: { 'Athletics': 9, 'Badminton': 0, 'Basketball': 15, 'Chess': 0, 'Cricket': 0, 'Football': 20, 'Handball': 15, 'Hockey': 0, 'Table Tennis': 11, 'Volleyball': 120 }
  },
  {
    name: 'META',
    totalPoints: 180,
    breakdown: { 'Athletics': 15, 'Badminton': 20, 'Basketball': 15, 'Chess': 10, 'Cricket': 25, 'Football': 30, 'Handball': 20, 'Hockey': 15, 'Table Tennis': 15, 'Volleyball': 15 }
  },
  {
    name: 'MECH',
    totalPoints: 165,
    breakdown: { 'Athletics': 10, 'Badminton': 15, 'Basketball': 20, 'Chess': 15, 'Cricket': 20, 'Football': 25, 'Handball': 15, 'Hockey': 20, 'Table Tennis': 10, 'Volleyball': 15 }
  },
  {
    name: 'EE',
    totalPoints: 170,
    breakdown: { 'Athletics': 20, 'Badminton': 10, 'Basketball': 10, 'Chess': 20, 'Cricket': 15, 'Football': 20, 'Handball': 25, 'Hockey': 20, 'Table Tennis': 15, 'Volleyball': 15 }
  },
  {
    name: 'ECM',
    totalPoints: 175,
    breakdown: { 'Athletics': 15, 'Badminton': 20, 'Basketball': 15, 'Chess': 15, 'Cricket': 20, 'Football': 30, 'Handball': 10, 'Hockey': 25, 'Table Tennis': 10, 'Volleyball': 15 }
  }
];
// ---------------------------

const LeaderBoard = () => {
  const [selectedTeam, setSelectedTeam] = useState(null);

  const sortedTeams = [...teamsData].sort((a, b) => b.totalPoints - a.totalPoints);
  const topThree = sortedTeams.slice(0, 3);
  const rest = sortedTeams.slice(3);

  const podiumOrder = [topThree[1], topThree[0], topThree[2]].filter(Boolean);

  const handleTeamClick = (team) => {
    setSelectedTeam(team); // Directly set the team to open the modal
  };

  const closeModal = () => {
    setSelectedTeam(null);
  };

  // Close modal when pressing the Escape key
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.keyCode === 27) {
        closeModal();
      }
    };
    window.addEventListener('keydown', handleEsc);

    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, []);


  const getPodiumClasses = (index) => {
    if (index === 1) return 'podium-item first-place';
    if (index === 0) return 'podium-item second-place';
    if (index === 2) return 'podium-item third-place';
    return 'podium-item';
  };

  const getMedalEmoji = (index) => {
    if (index === 1) return '🏆';
    if (index === 0) return '🥈';
    if (index === 2) return '🥉';
    return '';
  };

  const getTextColorClass = (index) => {
    if (index === 1) return 'first-place-text';
    if (index === 0) return 'second-place-text';
    if (index === 2) return 'third-place-text';
    return '';
  };

  return (
    <div className="leaderboard-page">
      {/* --- CHANGED: Modal now triggers for ANY selected team --- */}
      {selectedTeam && (
        <>
          <div className="modal-overlay" onClick={closeModal}></div>
          <div className="breakdown-section">
            <button className="close-button" onClick={closeModal}>&times;</button>
            <div className="breakdown-title">{selectedTeam.name}</div>
            <div className="breakdown-grid">
              {Object.entries(selectedTeam.breakdown).map(([sport, points]) => (
                <div
                  key={sport}
                  className={`breakdown-item ${points === 0 ? 'zero-points' : ''}`}
                >
                  <span className="breakdown-sport">{sport}</span>
                  <span className="breakdown-points">{points}</span>
                </div>
              ))}
            </div>
          </div>
        </>
      )}

      <div className="leaderboard-container">
        <div className="title-section">
          <div className="main-title">LEADERBOARD</div>
          <div className="subtitle">URJA'26 • SPORTSFEST 2025</div>
        </div>

        <div className="podium">
          {podiumOrder.map((team, index) => (
            <div key={team.name} className="podium-column">
              <div className="podium-team">
                <div className={`podium-team-name ${getTextColorClass(index)}`}>
                  {team.name}
                </div>
                <div className={`podium-team-points ${getTextColorClass(index)}`}>
                  {team.totalPoints}
                </div>
                {/* --- ADDED: Details button for podium teams --- */}
                <button className="details-button" onClick={() => handleTeamClick(team)}>
                  Details
                </button>
                <div className={getPodiumClasses(index)}>
                  <div className="podium-trophy">{getMedalEmoji(index)}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {rest.length > 0 && (
          <div className="other-teams-section">
            <div className="other-teams-list">
              {rest.map((team, index) => (
                <div key={team.name} className="list-item-wrapper">
                  <div className="list-item">
                    <div className="list-rank">{index + 4}</div>
                    <div className="list-name">{team.name}</div>
                    <div className="list-points">{team.totalPoints}</div>
                    {/* --- ADDED: Details button for list teams --- */}
                    <button className="details-button" onClick={() => handleTeamClick(team)}>
                      Details
                    </button>
                  </div>
                  {/* --- REMOVED: Inline breakdown section is no longer needed --- */}
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="scoring-rules">
          <div className="scoring-title">SCORING SYSTEM</div>
          <div>1st Place: 5 points • 2nd Place: 3 points • 3rd Place: 1 point</div>
          <div className="scoring-subtitle">
            Team trophies awarded based on total points from all events
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeaderBoard;