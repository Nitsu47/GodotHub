import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Store from './pages/store';
import DeveloperProfile from './pages/developer_profile';

function App() {
  const games = [
    { id: 1, title: 'Brotato', price: '4.99 US$', image: '/brotato.jpg' },
    { id: 2, title: 'Halls of Torment', price: '4.99 US$', image: '/halls_of_torment.jpg' },
    { id: 3, title: 'Hanctt Origins', price: 'Early access', image: '/hanctt_origins.jpg' },
    { id: 4, title: 'Sole Saga', price: '5.99 US$', image: '/sole_saga.jpg' },
    { id: 5, title: 'The Necromancer Cometh', price: '11.99 US$', image: '/the_necromancer_cometh.jpg' },
    { id: 6, title: 'Blastronaut', price: '18.99 US$', image: '/blastronaut.jpg' },
    { id: 7, title: 'Cassette Beasts', price: '19.99 US$', image: '/cassette_beasts.jpg' },
    { id: 8, title: 'Endoparasitic', price: '9.99 US$', image: '/endoparasitic.jpg' },
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
        <Route path="/" element={<Store games={games} />} />
        <Route path="/store" element={<Store games={games} />} />
        <Route path="/developer/:id" element={<DeveloperProfile developer={developer} />} />
      </Routes>
    </Router>
  );
}

export default App;
