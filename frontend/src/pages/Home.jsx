import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <section className="hero">
        <h1 className="fade-in">🗳️ Web3 Voting System</h1>
        <p className="fade-in delay-1">
          Welcome to the future of elections — secure, transparent, and powered by blockchain 🔐.
        </p>
        <button className="cta-button fade-in delay-2">🚀 Start Voting</button>
      </section>

      <section className="how-it-works">
        <h2>🧭 How It Works</h2>
        <div className="steps">
          <div className="step">
            <h3>🔌 Connect Wallet</h3>
            <p>Verify your identity using MetaMask or any Web3 wallet.</p>
          </div>
          <div className="step">
            <h3>🗳️ Cast Your Vote</h3>
            <p>Choose your favorite candidate securely and anonymously.</p>
          </div>
          <div className="step">
            <h3>📈 See Live Results</h3>
            <p>Real-time result tracking powered by the blockchain ledger.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
