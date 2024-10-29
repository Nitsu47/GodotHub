import React, { useState } from 'react';
import { db, storage } from '../firebase';
import { collection, addDoc } from 'firebase/firestore';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import "../styles/upload_game.css";

const UploadGame = () => {
  const [gameData, setGameData] = useState({
    name: '',
    description: '',
    price: '',
    gameFile: null
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!gameData.gameFile) {
      alert("Please choose a game file to upload");
      return;
    }
    
    if (gameData.price <= 0) {
      alert("Price must be a positive number");
      return;
    }

    setIsUploading(true);

    try {
      const storageRef = ref(storage, `games/${gameData.gameFile.name}`);
      const uploadTask = uploadBytesResumable(storageRef, gameData.gameFile);

      uploadTask.on(
        'state_changed',
        (snapshot) => {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setUploadProgress(progress);
        },
        (error) => {
          console.error("Error uploading file:", error);
          setIsUploading(false);
        },
        async () => {
          const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);

          await addDoc(collection(db, 'games'), {
            name: gameData.name,
            description: gameData.description,
            price: parseFloat(gameData.price),
            gameFileURL: downloadURL,
            createdAt: new Date()
          });

          alert("Game uploaded successfully!");
          setGameData({ name: '', description: '', price: '', gameFile: null });
          setUploadProgress(0);
          setIsUploading(false);
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
        <button type="submit" disabled={isUploading}>Upload Game</button>
        {uploadProgress > 0 && <p>Upload Progress: {uploadProgress.toFixed(2)}%</p>}
      </form>
      {isUploading && <p>Uploading...</p>}
    </div>
  );
};

export default UploadGame;
