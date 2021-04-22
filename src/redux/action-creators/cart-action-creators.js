import {ADD_PRODUCTS_TO_CART, REMOVE_PRODUCTS_FROM_CART} from '../action-types';

const addProductToCart = id => ({
  type: ADD_PRODUCTS_TO_CART,
  payload: id,
});
const removeProductFromCart = id => ({
  type: REMOVE_PRODUCTS_FROM_CART,
  payload: id,
});

const toggleItemInCard = id => (dispatch, getState) => {
  const {cart: {productsInCart}} = getState ();
  console.log ('productsInCart', productsInCart, 'id', id, '{productsInCart}', {
    productsInCart,
  });

  const alreadyExists = !!productsInCart.find (el => el === id);
  dispatch (alreadyExists ? removeProductFromCart (id) : addProductToCart (id));
};

export {addProductToCart, removeProductFromCart, toggleItemInCard};
