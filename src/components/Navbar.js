import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getNumbers } from '../actions/getAction';
import { Link } from 'react-router-dom';

const Navbar = (props) => {
  useEffect(() => {
    getNumbers();
  }, []);

  return (
    <div className='main-nav'>
      <div className='nav-1'>
        <h2>
          Home
          <Link to='/'></Link>
        </h2>
      </div>
      <div className='nav-2'>
        <nav>
          <h2>Shop</h2>
          <ul>
            <li>
              {' '}
              <Link to='/'>Home</Link>
            </li>
            <li>
              {' '}
              <Link to='/cart'>
                <span>Cart: {props.basketProps.basketNumbers}</span>
              </Link>
            </li>
          </ul>
        </nav>

        {/* <i className='fas fa-shopping-cart'></i> */}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  basketProps: state.basketState,
});

export default connect(mapStateToProps, { getNumbers })(Navbar);
