import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Store from './pages/store';
import DeveloperProfile from './pages/developer_profile';

function App() {
  const games = [
    { id: 1, title: 'Brotato', price: '$4.99', image: '' },
    { id: 2, title: 'Halls of Torment', price: '$4.99', image: '' },
  ];

  const developer = {
    name: 'placeholder',
    logo: 'path_to_logo',
    description: 'We are a team of 4 people creating indie games.',
    socialLinks: [
      { name: 'Twitter', url: 'https://twitter.com/placeholder' },
      { name: 'Instagram', url: 'https://www.instagram.com/placeholder' }
    ],
    games: games
  };

  return (
    <Router>
      <Routes>
        <Route path="/store" element={<Store games={games} />} />
        <Route path="/developer/:id" element={<DeveloperProfile developer={developer} />} />
      </Routes>
    </Router>
  );
}

export default App;
