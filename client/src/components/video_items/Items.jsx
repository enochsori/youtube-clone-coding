import { useContext } from "react";
import { VideoContext } from "../VideoContext";
import Item from "../video_item/Item";
import styles from "./items.module.css";

const Items = () => {
  const { items } = useContext(VideoContext);

  return (
    <ul className={styles.videos}>
      {items.map((item) => (
        <Item key={item.id} item={item.snippet} />
      ))}
    </ul>
  );
};

export default Items;
