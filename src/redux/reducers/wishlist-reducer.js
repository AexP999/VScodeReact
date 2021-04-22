import {
  ADD_PRODUCTS_TO_WISHLIST,
  REMOVE_PRODUCTS_FROM_WISHLIST,
} from '../action-types';

const initialState = {
  productsinWishlist: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCTS_TO_WISHLIST: {
      return {
        ...state,
        products: action.payload,
      };
    }
    case REMOVE_PRODUCTS_FROM_WISHLIST: {
      return {
        ...state,
      };
    }

    default:
      return state;
  }
};
export default reducer;
