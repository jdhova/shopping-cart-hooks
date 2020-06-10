import { ADD_PRODUCT_BASKET, REMOVE_PRODUCT_BASKET } from './types';

export const addBasket = (productName) => {
  return (dispatch) => {
    // console.log('adding to basket');
    // console.log('product is: ', productName);
    dispatch({
      type: ADD_PRODUCT_BASKET,
      payload: productName,
    });
  };
};

export const removeBasket = (productName) => {
  return (dispatch) => {
    dispatch({
      type: REMOVE_PRODUCT_BASKET,
      payload: productName,
    });
  };
};

// step 1 Create a function for adding 2 products
/// step 2 create each functon for each additional if possible
// if not possibme make a reuseable function.

// create anoteher type statment for each fuction in actions

// move to the reducer and create a case statement for the additionals

// check documentations and see what you can find.

// use conditionals to check how many in cart before
// adding or removing  IMPORTANT.
