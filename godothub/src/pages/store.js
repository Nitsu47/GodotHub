import React from 'react';
import GameCard from '../modules/game_cards';
import '../styles/store.css';

function Store({ games }) {
  return (
    <div className="store-container">
      <h1 className="store-title">Featured Games</h1>
      <div className="games-grid">
        {games.map((game) => (
          <div key={game.id} className="game-item">
            <div className="game-card">
              <img src={game.image} alt={game.title} className="game-image" />
            </div>
            <div className="game-info">
              <h2 className="game-title">{game.title}</h2>
              <div className="game-price-wrapper">
                <p className="game-price">{game.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Store;
