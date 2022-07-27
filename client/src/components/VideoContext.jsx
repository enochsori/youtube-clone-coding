import { useState, useEffect, createContext } from 'react';

// Create context
export const VideoContext = createContext(null);
// Deconstruction for youtube api key in dotenv
const { REACT_APP_YOUTUBE_DATA_API_KEY } = process.env;

// Creat context provider
const VideoProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const [keyword, setKeyWord] = useState(null);

  useEffect(() => {
    const fetchVideoData = async () => {
      if (keyword === null) {
        const res = await fetch(
          `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=${REACT_APP_YOUTUBE_DATA_API_KEY}`
        );
        const data = await res.json();
        console.log(data);
        setItems(data.items);
      } else {
        const res = await fetch(
          `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${keyword}&key=${REACT_APP_YOUTUBE_DATA_API_KEY}`
        );
        const data = await res.json();
        console.log(data);
      }
    };
    fetchVideoData();
  }, [keyword]);

  return (
    <VideoContext.Provider value={{ items, setItems, setKeyWord }}>
      {children}
    </VideoContext.Provider>
  );
};

export default VideoProvider;
