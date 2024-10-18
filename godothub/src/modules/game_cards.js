import React from 'react';

const GameCard = ({ game }) => (
  <div className="game-card">
    <img src={game.image} alt={game.title} />
    <h3>{game.title}</h3>
    <p>{game.price}</p>
    <button>Buy Now</button>
  </div>
);

export default GameCard;
