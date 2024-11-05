import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import axios from 'axios';
import { AuthProvider } from './components/auth/authContext';
import NavBar from './modules/navbar';
import Store from './pages/store';
import DeveloperProfile from './pages/developer_profile';
import UploadGame from './components/Upload_game';
import Auth from './components/auth/auth';

function App() {
  const [games, setGames] = useState([]);
  const [developers, setDevelopers] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await axios.get('https://godot-hub.firebaseio.com/games.json');
        setGames(Object.values(response.data));
      } catch (error) {
        console.error('Error fetching games:', error);
      }
    };

    const fetchDevelopers = async () => {
      try {
        const response = await axios.get('https://godot-hub.firebaseio.com/developers.json');
        setDevelopers(Object.values(response.data));
      } catch (error) {
        console.error('Error fetching developers:', error);
      }
    };

    fetchGames();
    fetchDevelopers();

    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsAuthenticated(!!user);
    });

    return () => unsubscribe();
  }, []);

  return (
    <AuthProvider>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Store games={games} />} />
          <Route path="/store" element={<Store games={games} />} />
          <Route path="/developer/:id" element={<DeveloperProfile developers={developers} />} />
          <Route path="/upload" element={isAuthenticated ? <UploadGame /> : <Auth />} />
          <Route path="/auth" element={<Auth />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;