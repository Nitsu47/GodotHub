import React, { useState } from 'react';
import RegisterForm from './registerForm';
import LoginForm from './loginForm';
import '../../styles/auth.css';

const Auth = ({ isRegistering, onClose }) => {
  const [registering, setRegistering] = useState(isRegistering);
  const [error, setError] = useState(null);

  const handleSuccess = () => {
    alert(registering ? 'User registered successfully' : 'Logged in successfully');
    onClose();
  };

  const handleError = (message) => {
    setError(message);
  };

  return (
    <div className="auth-modal-content">
      <button onClick={onClose} className="close-modal">X</button>
      <h2>{registering ? 'Register' : 'Login'}</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {registering ? (
        <RegisterForm onSuccess={handleSuccess} onError={handleError} />
      ) : (
        <LoginForm onSuccess={handleSuccess} onError={handleError} />
      )}
      <button onClick={() => setRegistering(!registering)}>
        {registering ? 'Switch to Login' : 'Switch to Register'}
      </button>
    </div>
  );
};

export default Auth;
