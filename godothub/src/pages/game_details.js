import React, { useState } from 'react';
import './game_details.css';

const GamePage = () => {
  const [gameData, setGameData] = useState({
    title: 'Hollow Knight',
    description: `Forge your own path in Hollow Knight! An epic action adventure through a vast ruined kingdom of insects and heroes. Explore twisting caverns, battle tainted creatures and befriend bizarre bugs, all in a classic, hand-drawn 2D style.`,
    releaseDate: 'FEB 24, 2017',
    developer: 'Team Cherry',
    editor: 'Team Cherry',
    price: 24.99,
    reviews: [
      {
        quote: `"It's a deep dive into a dark place, and a brilliantly rich experience."`,
        score: '9/10',
        source: 'Game Informer'
      },
      {
        quote: `"Truly a masterpiece of gaming if there ever was one, and certainly art worthy of being in a museum."`,
        score: '10/10',
        source: 'Destructoid'
      },
      {
        quote: `"Best Platformer 2017 - The joy of Hollow Knight is the joy of discovery, always hard-earned, never handed to you."`,
        score: '92/100',
        source: 'PC Gamer'
      }
    ]
  });

  const updatePrice = (newPrice) => {
    setGameData({ ...gameData, price: newPrice });
  };

  return (
    <div className="game-page">
      <header>
        <div className="game-logo">
          <img src="path/to/logo.png" alt="Godot Hub Logo" />
        </div>
        <nav>
          <a href="#store">Store</a>
          <a href="#game-jams">Game Jams</a>
          <a href="#upload">Upload Game</a>
          <input type="text" placeholder="Search" />
          <button>Sign In</button>
          <button>Register</button>
        </nav>
      </header>
      
      <main>
        <section className="game-details">
          <img src="path/to/hollow-knight-cover.jpg" alt="Hollow Knight" className="game-cover" />
          <div className="game-description">
            <h1>{gameData.title}</h1>
            <p>{gameData.description}</p>
            <p><strong>Release date:</strong> {gameData.releaseDate}</p>
            <p><strong>Developer:</strong> {gameData.developer}</p>
            <p><strong>Editor:</strong> {gameData.editor}</p>
            <button className="buy-now">BUY NOW</button>
            <p className="price">${gameData.price}</p>
          </div>
        </section>

        <section className="reviews">
          <h2>Reviews</h2>
          {gameData.reviews.map((review, index) => (
            <div key={index} className="review">
              <blockquote>{review.quote}</blockquote>
              <p><strong>{review.score}</strong> - {review.source}</p>
            </div>
          ))}
        </section>
      </main>
      
      <footer>
        <div className="rating-info">
          <p><strong>Fantasy Violence</strong></p>
          <p><strong>Mild Blood</strong></p>
          <p><strong>Age rating for ESRB</strong></p>
        </div>
        <div className="game-info">
          <p><strong>Title:</strong> {gameData.title}</p>
          <p><strong>Genre:</strong> Action, Adventure, Indie</p>
          <p><strong>Developer:</strong> {gameData.developer}</p>
          <p><strong>Franchise:</strong> Hollow Knight</p>
          <p><strong>Release date:</strong> {gameData.releaseDate}</p>
        </div>
      </footer>
    </div>
  );
};

export default GamePage;
