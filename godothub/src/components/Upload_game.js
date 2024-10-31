import React, { useState } from 'react';
import { db, storage } from '../firebase';
import axios from 'axios';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import "../styles/upload_game.css";

const UploadGame = () => {
  const [gameData, setGameData] = useState({
    id: Date.now().toString(16),
    name: '',
    description: '',
    price: '',
    gameFile: null,
    coverImage: null
  });

  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setGameData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    setGameData((prevData) => ({
      ...prevData,
      gameFile: e.target.files[0]
    }));
  };

  const handleCoverImageChange = (e) => {
    const file = e.target.files[0];
    if (file && (file.type === 'image/jpeg' || file.type === 'image/png')) {
      setGameData((prevData) => ({
        ...prevData,
        coverImage: file
      }));
    } else {
      alert("Please select a valid image file (JPG or PNG).");
      e.target.value = null;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!gameData.gameFile || !gameData.coverImage) {
      alert("Please choose both a game file and a cover image.");
      return;
    }

    if (gameData.price < 0) {
      alert("Price must be a positive number");
      return;
    }

    setIsUploading(true);

    try {
      // Cover Image
      const coverImageRef = ref(storage, `coverImages/${gameData.coverImage.name}`);
      const coverImageUploadTask = uploadBytesResumable(coverImageRef, gameData.coverImage);

      coverImageUploadTask.on(
        'state_changed',
        (snapshot) => {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setUploadProgress(progress);
        },
        (error) => {
          console.error("Error uploading cover image:", error);
          setIsUploading(false);
        },
        async () => {
          const coverImageUrl = await getDownloadURL(coverImageUploadTask.snapshot.ref);

          // Game file
          const gameFileRef = ref(storage, `games/${gameData.gameFile.name}`);
          const gameFileUploadTask = uploadBytesResumable(gameFileRef, gameData.gameFile);

          gameFileUploadTask.on(
            'state_changed',
            (snapshot) => {
              const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
              setUploadProgress(progress);
            },
            (error) => {
              console.error("Error uploading game file:", error);
              setIsUploading(false);
            },
            async () => {
              const gameFileURL = await getDownloadURL(gameFileUploadTask.snapshot.ref);

              const newGame = {
                name: gameData.name,
                description: gameData.description,
                price: parseFloat(gameData.price),
                gameFileURL,
                coverImageUrl
              };

              // Upload Game in the server
              try {
                const response = await axios.post('http://localhost:3000/games', newGame);
                console.log("Upload successful, response:", response.data);

                alert("Game uploaded successfully!");
                setGameData({ name: '', description: '', price: '', gameFile: null, coverImage: null });
                setUploadProgress(0);
                setIsUploading(false);
              } catch (error) {
                console.error("Error saving game to db.json:", error);
                setIsUploading(false);
              }
            }
          );
        }
      );
    } catch (error) {
      console.error("Error uploading game:", error);
      setIsUploading(false);
    }
  };

  return (
    <div>
      <h2>Upload a New Game</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Game Name:</label>
          <input
            type="text"
            name="name"
            value={gameData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Description:</label>
          <textarea
            name="description"
            value={gameData.description}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Price:</label>
          <input
            type="number"
            name="price"
            value={gameData.price}
            onChange={handleChange}
            min="0.01"
            step="0.01"
            required
          />
        </div>
        <div>
          <label>Game File:</label>
          <input
            type="file"
            onChange={handleFileChange}
            accept=".zip,.rar,.7z"
            required
          />
        </div>
        <div>
          <label>Cover Image (JPG or PNG):</label>
          <input
            type="file"
            onChange={handleCoverImageChange}
            accept=".jpg,.jpeg,.png"
            required
          />
        </div>
        <button type="submit" disabled={isUploading}>Upload Game</button>
        {uploadProgress > 0 && <p>Upload Progress: {uploadProgress.toFixed(2)}%</p>}
      </form>
      {isUploading && <p>Uploading...</p>}
    </div>
  );
};

export default UploadGame;
