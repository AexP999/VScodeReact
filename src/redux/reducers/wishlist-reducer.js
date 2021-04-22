import {
  ADD_PRODUCTS_TO_WISHLIST,
  REMOVE_PRODUCTS_FROM_WISHLIST,
} from '../action-types';

const initFromLs = localStorage.getItem ('wishlist');

const initialState = initFromLs
  ? JSON.parse (initFromLs)
  : {
      productsInWishlist: [],
    };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCTS_TO_WISHLIST: {
      return {
        ...state,
        productsInWishlist: [...state.productsInWishlist, action.payload],
      };
    }
    case REMOVE_PRODUCTS_FROM_WISHLIST: {
      return {
        ...state,
        productsInWishlist: state.productsInWishlist.filter (
          el => action.payload !== el
        ),
      };
    }

    default:
      return state;
  }
};
export default reducer;
