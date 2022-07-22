import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import fontawesome free version to use icons
import '@fortawesome/fontawesome-free/js/all.js';
import VideoProvider from './components/VideoContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <VideoProvider>
      <App />
    </VideoProvider>
  </React.StrictMode>
);
