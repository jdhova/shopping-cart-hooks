import React, { useReducer } from 'react';
import cartContext from './cartContext';
import cartReducer from './cartReducer';
import { ADD_PRODUCT_BASKET } from '../types';

export const addBasket = (productName) => {
  return (dispatch) => {
    dispatch({
      type: ADD_PRODUCT_BASKET,
      payload: productName,
    });
  };
};
