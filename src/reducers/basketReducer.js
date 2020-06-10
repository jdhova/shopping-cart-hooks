import {
  ADD_PRODUCT_BASKET,
  GET_NUMBERS_BASKET,
  REMOVE_PRODUCT_BASKET,
} from '../actions/types';

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
      name: 'White Shirt',
      tagName: 'whiteshirt',
      price: 32.0,
      numbers: 0,
      inCart: false,
    },
    pinkgown: {
      name: 'Pink Gown',
      tagName: 'pinkgown',
      price: 240.3,
      numbers: 0,
      inCart: false,
    },
    bluegown: {
      name: 'Blue Gown',
      tagName: 'bluegown',
      price: 134.2,
      numbers: 0,
      inCart: false,
    },
    blackgown: {
      name: 'Blue Gown',
      tagName: 'blackgown',
      price: 142.0,
      numbers: 0,
      inCart: false,
    },
    redgown: {
      name: 'Blue Gown',
      tagName: 'redgown',
      price: 550.0,
      numbers: 0,
      inCart: false,
    },
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT_BASKET:
      let addQuantity = { ...state.products[action.payload] };
      addQuantity.numbers += 1;
      addQuantity.inCart = true;

      return {
        ...state,
        basketNumbers: state.basketNumbers + 1,
        cartCost: addQuantity.price + state.cartCost,
        // cartCost :state.cartCost+ state.products[action.payload].price
        products: {
          ...state.products,
          [action.payload]: addQuantity,
        },
      };

    case REMOVE_PRODUCT_BASKET:
      let removeQuantity = { ...state.products[action.payload] };
      removeQuantity.numbers -= 1;
      if (!removeQuantity.inCart) {
        removeQuantity.inCart = false;
      } else {
        removeQuantity.inCart = true;
      }
      return {
        basketNumbers: state.basketNumbers - 1,
        cartCost: state.cartCost - removeQuantity.price,

        products: {
          ...state.products,
          [action.payload]: removeQuantity,
        },
      };

    case GET_NUMBERS_BASKET:
      return {
        ...state,
      };

    default:
      return state;
  }
};
