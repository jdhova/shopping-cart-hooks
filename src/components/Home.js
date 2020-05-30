import React from 'react';
import blackshirt from '../images/blackshirt.jpeg';
import blueshirt from '../images/blueshirt.jpeg';
import redshirt from '../images/redshirt.jpeg';
import whiteshirt from '../images/whiteshirt.jpeg';

const Home = () => {
  return (
    <div className='main-image'>
      <div className='shirtimg'>
        <img src={blackshirt} alt='Black shirt' />

        <h3>Black shirt</h3>
        <h3>$24.30</h3>
        <a href='#'>Add to Cart</a>
      </div>

      <div className='shirtimg'>
        <img src={blueshirt} alt='Black shirt' />
        <h3>Blue shirt</h3>
        <h3>$22.20</h3>
        <a href='#'>Add to Cart</a>
      </div>

      <div className='shirtimg'>
        <img src={redshirt} alt='Black shirt' />
        <h3>Red shirt</h3>
        <h3>$20.00</h3>
        <a href='#'>Add to Cart</a>
      </div>

      <div className='shirtimg'>
        <img src={whiteshirt} alt='Black shirt' />
        <h3>White shirt</h3>
        <h3>$32.00</h3>
        <a href='#'>Add to Cart</a>
      </div>
    </div>
  );
};

export default Home;
