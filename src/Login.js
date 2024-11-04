// src/Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from './firebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth';


function Login({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === 'admin' && password === 'admin') {
      onLogin(); // ログイン成功時に onLogin を呼び出す
      navigate('/todo'); // ログイン成功後に /todo ページへ遷移
    } else {
      alert('ユーザー名またはパスワードが間違っています');
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>ログイン</h1>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="ユーザー名"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="パスワード"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">ログイン</button>
      </form>
    </div>
  );
}

export default Login;
