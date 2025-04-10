import React, { useState } from 'react';
import './Vote.css';

const candidates = [
  { id: 1, name: 'Alice', emoji: '👩‍💼' },
  { id: 2, name: 'Bob', emoji: '👨‍💼' },
  { id: 3, name: 'Charlie', emoji: '🧑‍💼' },
];

function Vote() {
  const [selectedCandidate, setSelectedCandidate] = useState(null);
  const [message, setMessage] = useState('');

  const handleVote = () => {
    if (selectedCandidate) {
      setMessage(`✅ You voted for ${selectedCandidate.emoji} ${selectedCandidate.name}`);
    } else {
      setMessage('⚠️ Please select a candidate to vote!');
    }
  };

  return (
    <div className="vote-container">
      <h1>🗳️ Cast Your Vote</h1>
      <div className="candidates-list">
        {candidates.map((candidate) => (
          <div
            key={candidate.id}
            className={`candidate-card ${selectedCandidate?.id === candidate.id ? 'selected' : ''}`}
            onClick={() => setSelectedCandidate(candidate)}
          >
            <span className="emoji">{candidate.emoji}</span>
            <span className="name">{candidate.name}</span>
          </div>
        ))}
      </div>
      <button className="vote-button" onClick={handleVote}>Submit Vote</button>
      {message && <p className="vote-message">{message}</p>}
    </div>
  );
}

export default Vote;
