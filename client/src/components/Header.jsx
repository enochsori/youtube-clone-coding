import { useNavigate } from "react-router-dom";
import Searchbar from "./Searchbar";
import styles from "./header.module.css";

const Header = () => {
  const navigate = useNavigate();

  const handleNaviateTohome = () => {
    console.log("clicked");
    navigate("/");
  };

  return (
    <header className={styles.header}>
      <div onClick={handleNaviateTohome} className={styles.logo}>
        <img src="/images/logo.png" alt="logo image" className={styles.img} />
        <h1 className={styles.title}>Youtube</h1>
      </div>

      <Searchbar />
    </header>
  );
};

export default Header;
