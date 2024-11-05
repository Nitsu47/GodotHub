import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { AuthProvider } from './components/auth/authContext';
import NavBar from './modules/navbar';
import Store from './pages/store';
import DeveloperProfile from './pages/developer_profile';
import UploadGame from './components/Upload_game';
import Auth from './components/auth/auth';

function App() {
  const games = [
    { id: 1, title: 'Brotato', price: '4.99 US$', image: '/brotato.jpg', developer: { name: "Developer 1", avatar: "blobfish_dev.jpg" } },
  ];

  const developer = {
    name: 'Game Dev Studios',
    avatarURL: '/blobfish_dev.jpg',
    description: 'We are a team of 4 people creating indie games.',
    socialLinks: [
      { name: 'Twitter', url: 'https://twitter.com/placeholder' },
      { name: 'Instagram', url: 'https://www.instagram.com/placeholder' }
    ]
  };

  return (
    <AuthProvider>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Store games={games} />} />
          <Route path="/store" element={<Store games={games} />} />
          <Route path="/developer/:id" element={<DeveloperProfile developer={developer} />} />
          <Route path="/upload" element={<UploadGame />} />
          <Route path="/auth" element={<Auth />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
