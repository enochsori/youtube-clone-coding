import React from 'react';

const Searchbar = () => {
  const handleSearch = (event) => {
    event.preventDefault();
    console.log('search');
  };

  return (
    <form action='' className='search' onSubmit={handleSearch}>
      <input type='text' className='search-input' placeholder='Search' />
      <button className='submit-btn'>
        <i className='fa-solid fa-magnifying-glass'></i>
      </button>
    </form>
  );
};

export default Searchbar;
