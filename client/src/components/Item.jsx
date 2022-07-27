import './item.css';
const Item = ({ item }) => {
  return <div className='wrapper'>{item.channelTitle}</div>;
};

export default Item;
