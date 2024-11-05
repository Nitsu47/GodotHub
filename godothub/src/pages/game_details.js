import React from "react";
import Reviews from "../components/reviews";
import "../styles/game_details.css";

const gameData = {
  title: "Hollow Knight",
  description: `Forge your own path in Hollow Knight! An epic action adventure through a vast ruined kingdom of insects and heroes. Explore twisting caverns, battle tainted creatures and befriend bizarre bugs, all in a classic, hand-drawn 2D style.`,
  releaseDate: "FEB 24, 2017",
  developer: "Team Cherry",
  editor: "Team Cherry",
  price: 24.99,
  logo: "hollowknight.png",
  log: "hollow2.png",
  agerating: "Fantacy Violence Mild Blood",
  img: "esrb.png",
  rating: "ESRB",
  publisher: "Team Cherry",
  Franchise: "Hollow Knight",
  reviews: [
    {
      user: "Alice",
      comment: "Amazing game, loved every moment!",
      rating: 5,
    },
    { user: "Bob", comment: "Great art style and gameplay!", rating: 4 },
    {
      user: "Charlie",
      comment: "Found it a bit challenging, but enjoyable.",
      rating: 4,
    },
  ],
};

const GameIn = ({ users }) => {
  return (
    <div className="body">
      <div className="header">
        <div className="title-img">
          <h1 className="game-name">{gameData.title}</h1>
          <img src={gameData.logo} className="game-logo" />
        </div>
        <aside className="aside">
          <section className="game-review">
            <img src={gameData.log} className="game-r" />
          </section>
          <section className="game-description">
            <p>{gameData.description}</p>
          </section>
          <div className="game-info">
            <ul className="ul">
              <li>Release Date: {gameData.releaseDate}</li>
              <li>Developer: {gameData.developer}</li>
              <li>Editor: {gameData.editor}</li>
              <li>Price: ${gameData.price}</li>
            </ul>
          </div>
          <a href={gameData.logo} download={gameData.title}>
            <button className="buy-now">Buy Now - ${gameData.price}</button>
          </a>
        </aside>
      </div>
      <div className="agereating">
        <div className="agereating-a">
          <img src={gameData.img} className="reating" />
          <p>{gameData.agerating}</p>
        </div>
        <div className="game-details">
          <p>Title: {gameData.title}</p>
          <p>Release Date: {gameData.releaseDate}</p>
          <p>Developer: {gameData.developer}</p>
          <p>Publisher: {gameData.publisher}</p>
          <p>Franchise: {gameData.franchise}</p>
          <p>Editor: {gameData.editor}</p>
          <p>Price: ${gameData.price}</p>
        </div>
      </div>

      <section className="reviews">
        <p>Reviews</p>
        <p>
          {" "}
          <Reviews users={users} />
        </p>
      </section>
    </div>
  );
};

export default GameIn;
