import React from "react";
import { useContext, useState, useRef } from "react";
import styles from "./searchbar.module.css";
import { VideoContext } from "./VideoContext";
const { REACT_APP_YOUTUBE_DATA_API_KEY } = process.env;

const Searchbar = () => {
  const { setItems } = useContext(VideoContext);

  const [userInput, setUserInput] = useState(null);

  const fetchVideoDataWithKeyword = async () => {
    const res = await fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${userInput}&key=${REACT_APP_YOUTUBE_DATA_API_KEY}`
    );
    const data = await res.json();
    console.log(data);
    setItems(data.items);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    console.log(userInput);
    fetchVideoDataWithKeyword();
  };

  return (
    <form action="" className={styles.search} onSubmit={handleSearch}>
      <input
        type="text"
        className={styles.input}
        placeholder="Search"
        onChange={(event) => setUserInput(event.target.value)}
      />
      <button className={styles.button}>
        <img
          className={styles.buttonImage}
          src="/images/search.png"
          alt="search button"
        />
      </button>
    </form>
  );
};

export default Searchbar;
