import React, { useState } from 'react';
import { registerUser } from './authService';

const RegisterForm = ({ onSuccess, onError }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [avatar, setAvatar] = useState(null);

  const handleAvatarChange = (e) => {
    setAvatar(e.target.files[0]);
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await registerUser(email, password, displayName, avatar);
      onSuccess && onSuccess();
    } catch (error) {
      console.error("Error registering user:", error);
      onError && onError(error.message);
    }
  };

  return (
    <form onSubmit={handleRegister}>
      <input 
        type="email" 
        placeholder="Email" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
      />
      <input 
        type="password" 
        placeholder="Password" 
        value={password} 
        onChange={(e) => setPassword(e.target.value)} 
      />
      <input 
        type="text" 
        placeholder="Username" 
        value={displayName} 
        onChange={(e) => setDisplayName(e.target.value)} 
      />
      <input 
        type="file" 
        accept="image/*" 
        onChange={handleAvatarChange} 
      />
      <button type="submit">Register</button>
    </form>
  );
};

export default RegisterForm;
