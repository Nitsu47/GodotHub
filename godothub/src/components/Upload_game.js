import React, { useState, useContext } from 'react';
import { db, storage } from '../firebase';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import axios from 'axios';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import LoginPromptModal from './login_prompt_modal';
import { AuthContext } from '../components/auth/authContext';
import "../styles/upload_game.css";

const UploadGame = () => {
  const { user } = useContext(AuthContext);
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
  const [showLoginPrompt, setShowLoginPrompt] = useState(false);

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

    // User is authenticated???
    if (!user) {
      setShowLoginPrompt(true);
      return;
    }

    if (!gameData.gameFile || !gameData.coverImage) {
      alert("Please choose both a game file and a cover image.");
      return;
    }

    if (gameData.price < 0) {
      alert("Price must be a positive number or Free");
      return;
    }

    setIsUploading(true);

    try {
      // Cover image
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

          // Game File
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
                id: gameData.id,
                name: gameData.name,
                description: gameData.description,
                price: parseFloat(gameData.price),
                gameFileURL,
                coverImageUrl,
                developerId: user.uid,
                developerName: user.displayName || user.email,
                developerAvatarUrl: user.photoURL || "avatar_placeholder.png",
                developerProfileUrl: `/developers/${user.uid}`
              };

              // Saves game in db
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
    <div className="upload-game-container">
      <h2 className="form-title">Upload a New Game</h2>
      {/* Authentication verification */}
      {!user ? (
        <div className="login-prompt">
          <h2>Please, Log in to upload your game</h2>
          <p>You need to be authenticated. Log in or Register to continue.</p>
          <button onClick={() => setShowLoginPrompt(true)} className="login-button">
            Sign In
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="upload-game-form">
          <div className="form-group">
            <label>Game Name:</label>
            <input
              type="text"
              name="name"
              value={gameData.name}
              onChange={handleChange}
              required
              className="form-input"
            />
          </div>
          <div className="form-group">
            <label>Description:</label>
            <textarea
              name="description"
              value={gameData.description}
              onChange={handleChange}
              required
              className="form-textarea"
            />
          </div>
          <div className="form-group">
            <label>Price:</label>
            <input
              type="number"
              name="price"
              value={gameData.price}
              onChange={handleChange}
              min="0.01"
              step="0.01"
              required
              className="form-input"
            />
          </div>
          <div className="form-group">
            <label>Game File:</label>
            <input
              type="file"
              onChange={handleFileChange}
              accept=".zip,.rar,.7z"
              required
              className="form-file-input"
            />
          </div>
          <div className="form-group">
            <label>Cover Image (JPG or PNG):</label>
            <input
              type="file"
              onChange={handleCoverImageChange}
              accept=".jpg,.jpeg,.png"
              required
              className="form-file-input"
            />
          </div>
          <button type="submit" disabled={isUploading} className="submit-button">
            {isUploading ? "Uploading..." : "Upload Game"}
          </button>
          {uploadProgress > 0 && (
            <div className="progress-bar">
              <div
                className="progress"
                style={{ width: `${uploadProgress}%` }}
              />
            </div>
          )}
        </form>
      )}
    </div>
  );
};

export default UploadGame;
