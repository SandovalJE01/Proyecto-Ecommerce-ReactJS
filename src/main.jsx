import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";


import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

const firebaseConfig = {
  apiKey: "AIzaSyCWvl5uVu6N9QvjaTcbR3xHA6fxOUbJG0I",
  authDomain: "app-ecommerce-reactjs.firebaseapp.com",
  projectId: "app-ecommerce-reactjs",
  storageBucket: "app-ecommerce-reactjs.appspot.com",
  messagingSenderId: "767123776398",
  appId: "1:767123776398:web:5ea86319ccadd2f7e5fadf",
   measurementId: "G-DRG0JH849F"
};

initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

//analytics = getAnalytics(app);
