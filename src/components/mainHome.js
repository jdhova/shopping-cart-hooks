import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const mainHome = () => {
  return (
    <Fragment>
      <div className='main-home'>
        <div className='home1'>
          <h1>Welcome to our store</h1>
        </div>
        <div className='home2'>
          <ul>
            <li>
              <Link to='/men'>Men </Link>
            </li>

            <li>
              <Link to='/woman'>Women </Link>
            </li>
          </ul>
        </div>
      </div>
      ;
    </Fragment>
  );
};

export default mainHome;
