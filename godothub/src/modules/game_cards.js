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
            <h2 className="game-title">{game.name}</h2>
            <div className="game-price-wrapper">
              <p className="game-price">{"$ " + game.price}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GameCards;
