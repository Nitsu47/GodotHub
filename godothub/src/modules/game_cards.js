import React from "react";
import "../styles/game_cards.css";

const GameCards = ({ games = [], developer }) => {
  return (
    <div className="games-grid">
      {games.map((game) => (
        <div key={game.id} className="game-container">
          <div className="game-card">
            <img src={game.image} alt={game.title} className="game-image" />
          </div>
          {game.developer && developer && (
            <div className="developer-info">
              <img
                src={developer.avatarURL}
                alt="Developer Avatar"
                className="developer-avatar"
              />
              <span className="developer-name">{developer.name}</span>
            </div>
          )}
          <div className="game-info">
            <h2 className="game-title">{game.title}</h2>
            <div className="game-price-wrapper">
              <p className="game-price">{game.price}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GameCards;
