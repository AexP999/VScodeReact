import {
  START_PRODUCTS_LOADING,
  END_PRODUCTS_LOADING,
  SET_PRODUCTS,
} from '../action-types';

const startProductsLoading = () => ({type: START_PRODUCTS_LOADING});
const endProductsLoading = () => ({type: END_PRODUCTS_LOADING});
const setProducts = payload => ({type: SET_PRODUCTS, payload});

export {startProductsLoading, endProductsLoading, setProducts};
