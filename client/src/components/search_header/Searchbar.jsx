import { useContext, useState, useRef } from "react";
import styles from "./searchbar.module.css";
import { VideoContext } from "../VideoContext";

const Searchbar = () => {
  const { fetchVideoDataWithKeyword } = useContext(VideoContext);
  const [userInput, setUserInput] = useState(null);

  const inputRef = useRef();

  const handleSearch = (event) => {
    event.preventDefault();
    fetchVideoDataWithKeyword(userInput);
    inputRef.current.value = "";
  };

  return (
    <form action='' className={styles.search} onSubmit={handleSearch}>
      <input
        ref={inputRef}
        type='text'
        className={styles.input}
        placeholder='Search'
        onChange={(event) => setUserInput(event.target.value)}
      />
      <button className={styles.button}>
        <img
          className={styles.buttonImage}
          src='/images/search.png'
          alt='search button'
        />
      </button>
    </form>
  );
};

export default Searchbar;
