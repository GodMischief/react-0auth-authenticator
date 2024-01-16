import React from 'react';
import ReactDOM from 'react-dom';

// Import the main stylesheet and the App component
import './index.css';
import App from './App';

// Import Auth0Provider from '@auth0/auth0-react' for authentication
import { Auth0Provider } from '@auth0/auth0-react';

// Retrieve Auth0 credentials from environment variables
const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

// Render the main application within Auth0Provider for authentication
ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={window.location.origin}
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
