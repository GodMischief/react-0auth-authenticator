// src/components/LoginButton.js
import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

// Component definition
const LoginButton = () => {
  // Auth0 hook to handle authentication
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  // Options for the login process
  const loginOptions = {
    prompt: 'login',
    rememberLastLogin: true,
  };

  // Render login button if user is not authenticated
  return (
    !isAuthenticated && (
      <div className='signin'>
        <h1>Welcome to Authenticator</h1>
        
        {/* Login button triggering authentication redirect */}
        <button className='signin-btn' onClick={() => loginWithRedirect(loginOptions)}>
          Get Started
        </button>
      </div>
    )
  );
};

// Exporting the LoginButton component
export default LoginButton;
