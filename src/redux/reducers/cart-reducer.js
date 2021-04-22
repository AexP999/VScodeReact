import {ADD_PRODUCTS_TO_CART, REMOVE_PRODUCTS_FROM_CART} from '../action-types';

const initialState = {
  productsInCart: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCTS_TO_CART: {
      return {
        ...state,
        products: action.payload,
      };
    }
    case REMOVE_PRODUCTS_FROM_CART: {
      return {
        ...state,
      };
    }

    default:
      return state;
  }
};
export default reducer;
