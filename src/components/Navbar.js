import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getNumbers } from '../actions/getAction';

const Navbar = (props) => {
  useEffect(() => {
    getNumbers();
  }, []);

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
          Items in cart:<span>{props.basketProps.basketNumbers}</span>{' '}
        </h3>
        <i className='fas fa-shopping-cart'></i>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  basketProps: state.basketState,
});

export default connect(mapStateToProps, { getNumbers })(Navbar);
