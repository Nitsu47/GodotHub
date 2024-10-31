import React, { useEffect, useState } from 'react';
import axios from 'axios';
import GameCards from '../modules/game_cards';
import '../styles/store.css';

function Store() {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await axios.get('http://localhost:3000/games');
        setGames(response.data);
      } catch (err) {
        setError('Failed to fetch games: ${err.message}');
      } finally {
        setLoading(false);
      }
    };

    fetchGames();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="store-container">
      <h1 className="store-title">Featured Games</h1>
      <GameCards games={games} />
    </div>
  );
}

export default Store;
