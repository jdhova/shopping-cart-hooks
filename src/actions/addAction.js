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

// CHECK DISCOUNT CODE

// Create box to take input,
//add function to the box
// send function to action to check and execute with type
// create case statement with reducer
// pass to cart and implement /
// implement on state.

// we using the onsubmit button event handler to check the e.target.value

// check the code that comes n before execution.
