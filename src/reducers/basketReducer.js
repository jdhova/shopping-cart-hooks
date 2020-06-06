import { ADD_PRODUCT_BASKET, GET_NUMBERS_BASKET } from '../actions/types';

const initialState = {
  basketNumbers: 0,
  cartCost: 0,
  products: {
    blackshirt: {
      name: 'Black Shirt',
      tagName: 'blackshirt',
      price: 24.3,
      numbers: 0,
      inCart: false,
    },
    blueshirt: {
      name: 'Blue Shirt',
      tagName: 'blueshirt',
      price: 22.2,
      numbers: 0,
      inCart: false,
    },
    redshirt: {
      name: 'Red Shirt',
      tagName: 'redshirt',
      price: 20.0,
      numbers: 0,
      inCart: false,
    },
    whiteshirt: {
      name: 'White Hoddie',
      tagName: 'whiteshirt',
      price: 32.0,
      numbers: 0,
      inCart: false,
    },
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT_BASKET:
      return {
        basketNumbers: state.basketNumbers + 1,
        // state.basketProduct:payload: ,
      };
    case GET_NUMBERS_BASKET:
      return {
        ...state,
      };

    default:
      return state;
  }
};
