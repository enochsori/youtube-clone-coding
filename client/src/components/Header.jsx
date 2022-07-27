import Searchbar from './Searchbar';
import './header.css';

const Header = () => {
  return (
    <div className='header'>
      <i className='fa-brands fa-youtube logo'></i>
      <span className='title'>Youtube</span>

      <Searchbar />
    </div>
  );
};

export default Header;
