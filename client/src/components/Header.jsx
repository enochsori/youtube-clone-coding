import Searchbar from './Searchbar';

const Header = () => {
  return (
    <div>
      <i className='fa-brands fa-youtube logo'></i>
      <span className='title'>Youtube</span>

      <Searchbar />
    </div>
  );
};

export default Header;
