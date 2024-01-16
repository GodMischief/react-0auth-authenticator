// Import necessary dependencies
import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import LoginButton from "./components/LoginButton";
import LogoutButton from "./components/LogoutButton";
import Profile from "./components/Profile";
import Header from "./components/Header";
import { useAuth0 } from "@auth0/auth0-react";

// Define the main App component
function App() {
  // Destructure properties from useAuth0 hook
  const { isLoading, error, isAuthenticated } = useAuth0();

  // Render the component
  return (
    <Router>
      <div>
        <Header />
        <main className="column">
          {error && <p>Authentication Error</p>}
          {!error && isLoading && <p>Loading...</p>}
          {!error && !isLoading && (
            <Routes>
              <Route
                path="/"
                element={
                  !isLoading && !error && !isAuthenticated ? (
                    <LoginButton />
                  ) : (
                    <Navigate to="/profile" replace state={{ from: '/' }} />
                  )
                }
              />

              <Route
                path="/profile"
                element={
                  <>
                    <LogoutButton />
                    <Profile />
                  </>
                }
              />
            </Routes>
          )}
        </main>
      </div>
    </Router>
  );
}

// Export the App component
export default App;
