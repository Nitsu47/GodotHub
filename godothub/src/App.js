import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import NavBar from "./modules/navbar";
import Store from "./pages/store";
import DeveloperProfile from "./pages/developer_profile";
import UploadGame from "./components/Upload_game";
import GameIn from "./pages/game_details";
import Reviews from "./components/reviews";

function App() {
  const games = [
    {
      id: 1,
      title: "Brotato",
      price: "4.99 US$",
      image: "/brotato.jpg",
      developer: { name: "Developer 1", avatar: "blobfish_dev.jpg" },
    },
    {
      id: 2,
      title: "Halls of Torment",
      price: "4.99 US$",
      image: "/halls_of_torment.jpg",
    },
    {
      id: 3,
      title: "Hanctt Origins",
      price: "Early access",
      image: "/hanctt_origins.jpg",
    },
    { id: 4, title: "Sole Saga", price: "5.99 US$", image: "/sole_saga.jpg" },
    {
      id: 5,
      title: "The Necromancer Cometh",
      price: "11.99 US$",
      image: "/the_necromancer_cometh.jpg",
    },
    {
      id: 6,
      title: "Blastronaut",
      price: "18.99 US$",
      image: "/blastronaut.jpg",
    },
    {
      id: 7,
      title: "Cassette Beasts",
      price: "19.99 US$",
      image: "/cassette_beasts.jpg",
    },
    {
      id: 8,
      title: "Endoparasitic",
      price: "9.99 US$",
      image: "/endoparasitic.jpg",
    },
  ];
  const users = [
    {
      id: 1,
      name: "Pabla",
      review: "una puta mierda",
    },
    {
      id: 1,
      name: "Pabla",
      review: "una puta mierda",
    },

    {
      id: 1,
      name: "Pabla",
      review: "una puta mierda",
    },
  ];

  const developer = {
    name: "Game Dev Studios",
    logo: "blastronaut.jpg",
    description:
      "We are a 4 people team that wants to create the best indie saga in the world!",
    avatar: "favicon.ico",
  };

  const gameData = {
    title: "Hollow Knight",
    description: `Forge your own path in Hollow Knight! An epic action adventure through a vast ruined kingdom of insects and heroes. Explore twisting caverns, battle tainted creatures and befriend bizarre bugs, all in a classic, hand-drawn 2D style.`,
    releaseDate: "FEB 24, 2017",
    developer: "Team Cherry",
    editor: "Team Cherry",
    price: 24.99,
    logo: "brotato.jpg",
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
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Store games={games} />} />
        <Route path="/store" element={<Store games={games} />} />
        <Route
          path="/developer"
          element={<DeveloperProfile developer={developer} />}
        />
        <Route path="/upload" element={<UploadGame />} />
        <Route path="/details" element={<GameIn gameData={gameData} />} />
        <Route path="/reviews" element={<Reviews users={users} />} />
      </Routes>
    </Router>
  );
}

export default App;
