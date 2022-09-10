import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// import fontawesome free version to use icons
import "@fortawesome/fontawesome-free/js/all.js";
import VideoProvider from "./components/VideoContext";
import Youtube from "./service/youtubeService";

// Youtube API key by using dotenv
const { REACT_APP_YOUTUBE_DATA_API_KEY } = process.env;

const youtube = new Youtube(REACT_APP_YOUTUBE_DATA_API_KEY);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <VideoProvider youtube={youtube}>
      <App />
    </VideoProvider>
  </React.StrictMode>
);
