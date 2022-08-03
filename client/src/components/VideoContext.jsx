import { useState, useEffect, createContext } from "react";

// Create context
export const VideoContext = createContext(null);
// Deconstruction for youtube api key in dotenv
const { REACT_APP_YOUTUBE_DATA_API_KEY } = process.env;

// Creat context provider
const VideoProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchVideoData = async () => {
      const res = await fetch(
        `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=${REACT_APP_YOUTUBE_DATA_API_KEY}`
      );
      const data = await res.json();
      setItems(data.items);
    };
    fetchVideoData();
  }, []);

  return (
    <VideoContext.Provider value={{ items, setItems }}>
      {children}
    </VideoContext.Provider>
  );
};

export default VideoProvider;
