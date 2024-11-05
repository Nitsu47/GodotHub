import React from "react";
import GameCard from "../modules/game_cards";

const DeveloperProfile = ({ developer }) => (
  <div className="developer-profile">
    <div className="developer-header">
      <img
        src={developer.logo}
        alt={`${developer.name} logo`}
        className="developer-logo"
      />
      <div className="developer-info">
        <img src={developer.avatar} />
        <h1>{developer.name}</h1>
        <button>Follow +</button>
      </div>
    </div>

    <div className="developer-content">
      <aside className="developer-sidebar">
        <div className="about-team">
          <h3>About Our Team</h3>
          <p>{developer.description}</p>
        </div>
      </aside>

      <main className="developer-main">
        <nav className="profile-nav">
          <ul>
            <li>Games</li>
            <li>Tutorials</li>
            <li>Posts</li>
          </ul>
        </nav>

        <section className="games-list"></section>
      </main>

      <aside className="similar-games">
        <h3>Similar Games</h3>
      </aside>
    </div>
  </div>
);

export default DeveloperProfile;
