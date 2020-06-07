import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import blackshirt from '../images/blackshirt.jpeg';
import blueshirt from '../images/blueshirt.jpeg';
import redshirt from '../images/redshirt.jpeg';
import whiteshirt from '../images/whiteshirt.jpeg';

const Cart = ({ cartProps }) => {
  // console.log('here', props.cartProps);

  let productsInCart = [];

  Object.keys(cartProps.products).forEach((item) => {
    if (cartProps.products[item].inCart) {
      productsInCart.push(cartProps.products[item]);
    }

    console.log('new', productsInCart);
  });

  const productImages = [blackshirt, blueshirt, redshirt, whiteshirt];

  productsInCart = productsInCart.map((product, index) => {
    console.log('My product is');
    console.log(product);

    return (
      <Fragment key={index}>
        <div className='product'>
          <icon-icon name='close-circle'></icon-icon>{' '}
          <img src={productImages[index]} />
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
    </div>
  );
};

const mapStateToProps = (state) => ({
  cartProps: state.basketState,
});

export default connect(mapStateToProps)(Cart);
