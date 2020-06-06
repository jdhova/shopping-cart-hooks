import React, { Fragment } from 'react';
import { connect } from 'react-redux';

const Cart = ({ cartProps }) => {
  // console.log('here', props.cartProps);

  let productsInCart = [];

  Object.keys(cartProps.products).forEach((item) => {
    if (cartProps.products[item].inCart) {
      productsInCart.push(cartProps.products[item]);
    }

    console.log('new', productsInCart);
  });

  // productsInCart = productsInCart.map((product, index) => {
  //   console.log('My product is');
  //   console.log(product);
  //   return (
  //     <Fragment key={index}>
  //       <div className='product'>
  //         <ion-icon
  //           onClick={() => clearProduct(product.tagName)}
  //           name='close-circle'
  //         ></ion-icon>
  //         <img src={productImages(product)} />
  //         <span className='sm-hide'>{product.name}</span>
  //       </div>
  //       <div className='price sm-hide'>${product.price},00</div>
  //       <div className='quantity'>
  //         <ion-icon
  //           onClick={() => productQuantity('decrease', product.tagName)}
  //           className='decrease'
  //           name='arrow-back-circle-outline'
  //         ></ion-icon>
  //         <span>{product.numbers}</span>
  //         <ion-icon
  //           onClick={() => productQuantity('increase', product.tagName)}
  //           className='increase'
  //           name='arrow-forward-circle-outline'
  //         ></ion-icon>
  //       </div>
  //       <div className='total'>${product.numbers * product.price},00</div>
  //     </Fragment>
  //   );
  // });

  return <div>working</div>;
};

const mapStateToProps = (state) => ({
  cartProps: state.basketState,
});

export default connect(mapStateToProps)(Cart);
