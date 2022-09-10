import { useState, useEffect, createContext } from "react";

// Create context
export const VideoContext = createContext(null);

// Creat context provider
const VideoProvider = ({ children, youtube }) => {
  const [items, setItems] = useState([]);

  // Fetching new data wih user input keyowrd
  const fetchVideoDataWithKeyword = (query) => {
    // console.log(query);
    youtube
      .search(query) //
      .then((videos) => setItems(videos));
  };

  // Fetch initial video list by using youtube API
  useEffect(() => {
    youtube
      .mostPopular() //
      .then((videos) => setItems(videos));
  }, []);

  return (
    <VideoContext.Provider
      value={{ items, setItems, fetchVideoDataWithKeyword }}
    >
      {children}
    </VideoContext.Provider>
  );
};

export default VideoProvider;
