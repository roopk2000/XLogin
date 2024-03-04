import React, { useState } from "react";
import "./App.css";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim() === "" || password.trim() === "") {
      setErrorMessage("Please enter both username and password");
    } else if (username === "user" && password === "password") {
      setLoggedIn(true);
      setErrorMessage("");
    } else {
      setErrorMessage("Invalid username or password");
    }
  };

  return (
    <div className="login-page">
      {loggedIn ? (
        <div>
          <h2>Welcome, {username}</h2>
          <button onClick={() => setLoggedIn(false)}>Logout</button>
        </div>
      ) : (
        <div>
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {errorMessage && <p className="error-message">{errorMessage}</p>}
            <button type="submit">Login</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default LoginPage;
