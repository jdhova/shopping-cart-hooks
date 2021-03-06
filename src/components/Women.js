import React from 'react';

import pinkgown from '../images/pinkgown.jpeg';
import bluegown from '../images/bluegown.jpeg';
import redgown from '../images/redgown.jpeg';
import blackgown from '../images/blackgown.jpeg';
import { addBasket } from '../actions/addAction';
import { removeBasket } from '../actions/addAction';

import { connect } from 'react-redux';

const Women = (props) => {
  return (
    <div className='main-image'>
      <div className='shirtimg'>
        <img src={pinkgown} alt='Pink gown' />
        <h3>Pink gown</h3>
        <h3>$240.30</h3>
        <a
          onClick={() => props.addBasket('pinkgown')}
          className='addtocart'
          href='#'
        >
          Add to Basket
        </a>{' '}
        <br></br>
        <a
          onClick={() => props.removeBasket('pinkgown')}
          className='addtocart'
          href='#'
        >
          Remove from Basket
        </a>
      </div>

      <div className='shirtimg'>
        <img src={bluegown} alt='Blue gown' />
        <h3>Blue gown</h3>
        <h3>$134.20</h3>
        <a
          onClick={() => props.addBasket('bluegown')}
          className='addtocart'
          href='#'
        >
          Add to Basket
        </a>
        <br></br>
        <a
          onClick={() => props.removeBasket('bluegown')}
          className='addtocart'
          href='#'
        >
          Remove from Basket
        </a>
      </div>

      <div className='shirtimg'>
        <img src={redgown} alt='Red gown' />
        <h3>Red gown</h3>
        <h3>$550.00</h3>
        <a
          onClick={() => props.addBasket('redgown')}
          className='addtocart'
          href='#'
        >
          Add to Basket
        </a>
        <br></br>
        <a
          onClick={() => props.removeBasket('redgown')}
          className='addtocart'
          href='#'
        >
          Remove from Basket
        </a>
      </div>

      <div className='shirtimg'>
        <img src={blackgown} alt='Black gown' />
        <h3>Black gown</h3>
        <h3>$142.00</h3>
        <a
          onClick={() => props.addBasket('blackgown')}
          className='addtocart'
          href='#'
        >
          Add to Basket
        </a>
        <br></br>
        <a
          onClick={() => props.removeBasket('blackgown')}
          className='addtocart'
          href='#'
        >
          Remove from Basket
        </a>
      </div>
    </div>
  );
};

export default connect(null, { addBasket, removeBasket })(Women);
