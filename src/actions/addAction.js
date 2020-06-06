import { ADD_PRODUCT_BASKET } from './types';

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
