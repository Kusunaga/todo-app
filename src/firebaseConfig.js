// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

// Firebase の設定情報
const firebaseConfig = {
  apiKey: "AIzaSyCHfsa-2ZWEzpjd2smqVpic8yl12q485ko",
  authDomain: "simpletodolist-96a73.firebaseapp.com",
  projectId: "simpletodolist-96a73",
  storageBucket: "simpletodolist-96a73.firebasestorage.app",
  messagingSenderId: "873590652142",
  appId: "1:873590652142:web:6fdf6e43f016f2544cc7ff",
  measurementId: "G-3NHYJ19F48"
};

// Firebase の初期化
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// 認証モジュールのエクスポート
export const auth = getAuth(app);
