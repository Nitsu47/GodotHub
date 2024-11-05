import React from 'react';

const LoginPromptModal = ({ onClose }) => {
  return (
    <div className="login-prompt-overlay">
      <div className="login-prompt-modal">
        <h2>Sign in Required</h2>
        <p>Please sign in to upload a game to the platform.</p>
        <button onClick={onClose} className="login-prompt-button">Sign in</button>
      </div>
    </div>
  );
};

export default LoginPromptModal;
