import React from 'react';
import { useParams } from 'react-router-dom';
import GameCard from '../modules/game_cards';
import SocialLinks from '../modules/social_links';

const DeveloperProfile = ({ developers }) => {
  const { id } = useParams();
  const developer = developers.find(dev => dev.id === id);

  if (!developer) {
    return <div>Developer not found</div>;
  }

  return (
    <div className="developer-profile">
      <div className="developer-header">
        <img src={developer.avatarURL} alt={`${developer.name} logo`} className="developer-logo" />
        <div className="developer-info">
          <h1>{developer.name}</h1>
          <button>Follow +</button>
        </div>
      </div>

      <div className="developer-content">
        <aside className="developer-sidebar">
          <div className="about-team">
            <h3>About Our Team</h3>
            <p>{developer.description}</p>
            <SocialLinks links={developer.socialLinks} />
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

          <section className="games-list">
            <h2>{developer.name}'s Games</h2>
            <div className="game-cards">
              {developer.games.map(game => (
                <GameCard key={game.id} game={game} />
              ))}
            </div>
          </section>
        </main>

        <aside className="similar-games">
          <h3>Similar Games</h3>
          {developer.similarGames.map(game => (
            <GameCard key={game.id} game={game} />
          ))}
        </aside>
      </div>
    </div>
  );
};

export default DeveloperProfile;