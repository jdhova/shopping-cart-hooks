import React from 'react';

import pinkgown from '../images/pinkgown.jpeg';
import bluegown from '../images/bluegown.jpeg';
import redgown from '../images/redgown.jpeg';
import blackgown from '../images/blackgown.jpeg';

const Women = () => {
  return (
    <div className='main-image'>
      <div className='shirtimg'>
        <img src={pinkgown} alt='Pink gown' />
        <h3>Pink gown</h3>
        <h3>$240.30</h3>
        {/* <a
          onClick={() => props.addBasket('blackshirt')}
          className='addtocart'
          href='#'
        >
          Add to Basket
        </a>{' '} */}
      </div>

      <div className='shirtimg'>
        <img src={bluegown} alt='Blue gown' />
        <h3>Blue gown</h3>
        <h3>$134.20</h3>
        {/* <a
          onClick={() => props.addBasket('blueshirt')}
          className='addtocart'
          href='#'
        >
          Add to Basket
        </a> */}
      </div>

      <div className='shirtimg'>
        <img src={redgown} alt='Red shirt' />
        <h3>Red gown</h3>
        <h3>$550.00</h3>
        {/* <a
          onClick={() => props.addBasket('redshirt')}
          className='addtocart'
          href='#'
        >
          Add to Basket
        </a> */}
      </div>

      <div className='shirtimg'>
        <img src={blackgown} alt='Black gown' />
        <h3>Black gown</h3>
        <h3>$142.00</h3>
        {/* <a
          onClick={() => props.addBasket('whiteshirt')}
          className='addtocart'
          href='#'
        >
          Add to Basket
        </a> */}
      </div>
    </div>
  );
};

export default Women;
