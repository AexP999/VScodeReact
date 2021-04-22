import {
  ADD_PRODUCTS_TO_WISHLIST,
  REMOVE_PRODUCTS_FROM_WISHLIST,
} from '../action-types';

const addProductToWishlist = id => ({
  type: ADD_PRODUCTS_TO_WISHLIST,
  payload: id,
});
const removeProductFromWishlist = id => ({
  type: REMOVE_PRODUCTS_FROM_WISHLIST,
  payload: id,
});

const toggleItemInWishlist = id => (dispatch, getState) => {
  const {wishlist: {productsInWishlist}} = getState ();

  const alreadyExists = !!productsInWishlist.find (el => el === id);
  dispatch (
    alreadyExists ? removeProductFromWishlist (id) : addProductToWishlist (id)
  );
};

export {addProductToWishlist, removeProductFromWishlist, toggleItemInWishlist};
