import React from 'react';

const Navbar = () => {
  return (
    <div className='main-nav'>
      <div className='nav-1'>
        <h2>
          Home
          <a href='/' alt='home' />
        </h2>
      </div>
      <div className='nav-2'>
        <h3>
          About <a href='/#' alt='about' />
        </h3>

        <h3>
          Cart <a href='/#' alt='about' />
        </h3>
        <h3>
          Items in cart:<span>0</span>{' '}
        </h3>
        <i className='fas fa-shopping-cart'></i>
      </div>
    </div>
  );
};

export default Navbar;
