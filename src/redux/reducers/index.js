import {combineReducers} from 'redux';

import productsReducer from './products-reducer';
import cartReducer from './cart-reducer';
import wishlistReducer from './wishlist-reducer';

export const reducer = combineReducers ({
  products: productsReducer,
  cart: cartReducer,
  wishlist: wishlistReducer,
});
