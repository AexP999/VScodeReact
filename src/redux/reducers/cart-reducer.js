import {ADD_PRODUCTS_TO_CART, REMOVE_PRODUCTS_FROM_CART} from '../action-types';

const initFromLs = localStorage.getItem ('cart');

const initialState = initFromLs
  ? JSON.parse (initFromLs)
  : {
      productsInCart: [],
    };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCTS_TO_CART: {
      return {
        ...state,
        productsInCart: [...state.productsInCart, action.payload],
      };
    }
    case REMOVE_PRODUCTS_FROM_CART: {
      return {
        ...state,
        productsInCart: state.productsInCart.filter (
          el => action.payload !== el
        ),
      };
    }

    default:
      return state;
  }
};
export default reducer;
