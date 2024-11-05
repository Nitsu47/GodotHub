import React from "react";
import GameCards from "../modules/game_cards";
import "../styles/developer_profile.css";

const DeveloperProfile = ({ games, developer }) => (
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
      <aside className="sidebar">
        <section className="team-info">
          <h2>About our team!</h2>
          <h2>{developer.description}</h2>
        </section>
        <section className="contact-info">
          <div>
            <h2>Follow us on social media!</h2>
            <h3>TWITTER</h3>
            <h3>INSTAGRAM</h3>
            <h3>FACEBOOK</h3>
          </div>
          <div>
            <h2>Contact us:</h2>
          </div>
          <div>
            <h2>Visit our page:</h2>
          </div>
          <div>
            <h2>Make a donation</h2>
          </div>
        </section>
      </aside>

      <main className="developer-main">
        <nav className="profile-nav">
          <ul>
            <li>Games</li>
            <li>Tutorials</li>
            <li>Posts</li>
          </ul>
        </nav>

        <section className="games-list">
          <section className="featured-games">
            <GameCards games={games} developer={developer} />
          </section>
          <section className="update-log"></section>
        </section>
      </main>

      <aside className="similar-games">
        <h3>Similar Games</h3>
        {(developer.similarGames || []).map((games) => (
          <GameCards key={games.id} game={games} />
        ))}
      </aside>
    </div>
  </div>
);

export default DeveloperProfile;
