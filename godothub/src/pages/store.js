import React from 'react';
import GameCards from '../modules/game_cards';
import '../styles/store.css';


function Store({ games, developer }) {
  return (
    <div className="store-container">
      <h1 className="store-title">Featured Games</h1>
      <GameCards games={games} developer={developer} />
    </div>
  );
}

export default Store;
