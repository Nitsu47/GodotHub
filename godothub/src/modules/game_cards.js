import React from 'react';
import '../styles/game_cards.css';

const GameCards = ({ games }) => {
  return (
    <div className="games-grid">
      {games.map((game) => (
        <div key={game.id} className="game-container">
          <div className="game-card">
            <img src={game.coverImageUrl} alt={game.name} className="game-image" />
          </div>
          <div className="game-info">
            <div className="developer-info">
              <a href={game.developerProfileUrl} target="_blank" rel="noopener noreferrer">
                <img src={game.developerAvatarUrl} alt={game.developerName} className="developer-avatar" />
              </a>
              <div>
                <p className="developer-name">{game.developerName}</p>
                <h2 className="game-title">{game.name}</h2>
              </div>
            </div>
            <div className="game-price-wrapper">
              <p className="game-price">{game.price > 0 ? `$${game.price}` : 'FREE'}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GameCards;
