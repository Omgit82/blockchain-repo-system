import React from 'react';
import './Results.css';

const resultsData = [
  { name: 'Alice', emoji: '👩‍💼', votes: 45 },
  { name: 'Bob', emoji: '👨‍💼', votes: 30 },
  { name: 'Charlie', emoji: '🧑‍💼', votes: 25 },
];

function Results() {
  const totalVotes = resultsData.reduce((sum, candidate) => sum + candidate.votes, 0);

  return (
    <div className="results-container">
      <h1>📊 Voting Results</h1>
      <div className="results-list">
        {resultsData.map((candidate, index) => {
          const percentage = ((candidate.votes / totalVotes) * 100).toFixed(1);
          return (
            <div className="result-bar" key={index}>
              <div className="info">
                <span>{candidate.emoji} {candidate.name}</span>
                <span>{candidate.votes} votes ({percentage}%)</span>
              </div>
              <div className="bar">
                <div
                  className="fill"
                  style={{ width: `${percentage}%` }}
                ></div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Results;
