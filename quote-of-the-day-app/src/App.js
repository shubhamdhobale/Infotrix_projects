// src/App.js

import React, { useState } from 'react';
import './App.css';
import QuoteDisplay from './components/QuoteDisplay';
import Login from './components/Login';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = (username) => {
    // You can add authentication logic here and set the loggedIn state accordingly.
    // For simplicity, we'll assume successful login.
    setLoggedIn(true);
  };

  return (
    <div className="App">
      <header className="App-header">
        {loggedIn ? <QuoteDisplay /> : <Login onLogin={handleLogin} />}
      </header>
    </div>
  );
}

export default App;
