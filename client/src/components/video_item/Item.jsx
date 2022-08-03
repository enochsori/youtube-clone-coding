import { Link } from 'react-router-dom';
import styles from './item.module.css';

const Item = ({ item }) => {
  // const handleDisplayDetail = (event) => {
  //   console.log(item.channelId);
  // };
  return (
    <Link className={styles.container} to={`/detail/${item.channelId}`}>
      <li>
        <div className={styles.video}>
          <img
            className={styles.thumbnail}
            src={item.thumbnails.medium.url}
            alt='video thumbnail'
          />
          <div className={styles.metadata}>
            <p className={styles.title}>{item.title}</p>
            <p className={styles.channel}>{item.channelTitle}</p>
          </div>
        </div>
      </li>
    </Link>
  );
};

export default Item;
