import { useContext } from 'react';
import { VideoContext } from './VideoContext';
import Item from './Item';
import './items.css';

const Items = () => {
  const { items } = useContext(VideoContext);

  console.log(items);

  return (
    <div className='wrapper'>
      {items.map((item) => (
        <Item key={item.id} item={item.snippet} />
      ))}
    </div>
  );
};

export default Items;
