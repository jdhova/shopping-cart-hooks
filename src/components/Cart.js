import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import blackshirt from '../images/blackshirt.jpeg';
import blueshirt from '../images/blueshirt.jpeg';
import redshirt from '../images/redshirt.jpeg';
import whiteshirt from '../images/whiteshirt.jpeg';
import redgown from '../images/redgown.jpeg';
import blackgown from '../images/blackgown.jpeg';
import pinkgown from '../images/pinkgown.jpeg';
import bluegown from '../images/bluegown.jpeg';
import Discount from './discount';

const Cart = ({ cartProps }) => {
  let productsInCart = [];

  Object.keys(cartProps.products).forEach((item) => {
    if (cartProps.products[item].inCart) {
      productsInCart.push(cartProps.products[item]);
    }

    console.log('new', productsInCart);
  });

  const productImages = (product) => {
    if (product.tagName === 'blackshirt') {
      return blackshirt;
    } else if (product.tagName === 'blueshirt') {
      return blueshirt;
    } else if (product.tagName === 'redshirt') {
      return redshirt;
    } else if (product.tagName === 'whiteshirt') {
      return whiteshirt;
    } else if (product.tagName === 'redgown') {
      return redgown;
    } else if (product.tagName === 'bluegown') {
      return bluegown;
    } else if (product.tagName === 'blackgown') {
      return blackgown;
    } else {
      return pinkgown;
    }
  };

  productsInCart = productsInCart.map((product, index) => {
    console.log('My product is');
    console.log(product, product.price);

    return (
      <Fragment key={index}>
        <div className='product'>
          <icon-icon name='close-circle'></icon-icon>{' '}
          <img src={productImages(product)} />
          <span className='sm-hide'>{product.name}></span>
        </div>

        <div className='price sm-hide'>${product.price}</div>
        <div className='quantity'>
          <ion-icon
            className='decrease'
            name='arrow-back-circle-outline'
          ></ion-icon>
          <span>{product.numbers}</span>
          <ion-icon
            className='increase'
            name='arrow-foward-circle-outline'
          ></ion-icon>
        </div>

        <div className='total'>${product.numbers * product.price}</div>
      </Fragment>
    );
  });

  return (
    <Fragment>
      <div className='container-products'>
        <div className='product-header'>
          <h5 className='product-title'>PRODUCT</h5>
          <h5 className='price sm-hide'>PRICE</h5>
          <h5 className='quantity'>QUANTITY</h5>
          <h5 className='total'>TOTAL</h5>
        </div>
        <div className='products'>{productsInCart}</div>
        <div className='basketTotalContainer'>
          <h4 className='basketTotalTitle'>Basket Total</h4>
          <h4 className='basketTotal'>{cartProps.cartCost}</h4>
        </div>
        <Discount />
      </div>
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  cartProps: state.basketState,
});

export default connect(mapStateToProps)(Cart);
