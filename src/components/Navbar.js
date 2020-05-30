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
          About <a href='/about' alt='about' />
        </h3>

        <h3>
          Cart <a href='/about' alt='about' />
        </h3>
        <i class='fas fa-shopping-cart'></i>
      </div>
    </div>
  );
};

export default Navbar;
