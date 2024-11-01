import React from "react";
import GameCard from "../modules/game_cards";
import SocialLinks from "../modules/social_links";

const DeveloperProfile = ({ developer }) => (
  <div className="developer-profile">
    <div className="developer-header">
      <img
        src={developer.logo}
        alt={`${developer.name} logo`}
        className="developer-logo"
      />
      <div className="developer-info">
        <h1>{developer.name}</h1>
        <button>Follow +</button>
      </div>
    </div>

    <div className="developer-content">
      <aside className="sidebar">
        <section className="team-info">
          <h2>About Our Team!</h2>
          <p>
            We are a 4 people team that wants to create the best indie saga in
            the world!
          </p>
          <div className="social-links">
            <a href="#">Twitter</a>
            <a href="#">Instagram</a>
            <a href="#">Facebook</a>
          </div>
        </section>
        <section className="contact-info">
          <p>Contact us: placeholder@gmail.com</p>
          <p>Visit our page: www.teamcherry.com.au</p>
          <p>Make a donation:</p>
          <a href="#">Patreon</a>
          <a href="#">Kickstarter</a>
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
            <GameCard
              title="Hollow Knight"
              price="$24.99"
              tags="#metroidvania #2d"
            />
            <GameCard
              title="Silk Song"
              price="$24.99"
              tags="#metroidvania #2d"
            />
          </section>
          <section className="update-log">
            <h3>Update log for v1.5.68.11808</h3>
            <ul>
              <li>Added "Borderless" option to fullscreen in video options</li>
              <li>64-bit is now required...</li>
              <li>Vulkan is now the default...</li>
            </ul>
          </section>
        </section>
      </main>

      <aside className="similar-games">
        <h3>Similar Games</h3>
        {developer.similarGames.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </aside>
    </div>
  </div>
);

export default DeveloperProfile;
