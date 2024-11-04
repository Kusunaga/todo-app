// src/App.js
import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './Login';
import TodoPage from './TodoPage';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // ログイン成功時に呼び出される関数
  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login onLogin={handleLogin} />} />
        <Route
          path="/todo"
          element={
            isAuthenticated ? <TodoPage /> : <Navigate to="/" replace />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
