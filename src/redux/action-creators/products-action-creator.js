import {
  START_PRODUCTS_LOADING,
  END_PRODUCTS_LOADING,
  SET_PRODUCTS,
} from '../action-types';

const startProductsLoading = () => ({type: START_PRODUCTS_LOADING});
const endProductsLoading = () => ({type: END_PRODUCTS_LOADING});
const setProducts = payload => ({type: SET_PRODUCTS, payload});

const loadProducts = () => async dispatch => {
  try {
    dispatch (startProductsLoading ());
    const resp = await fetch ('https://fakestoreapi.com/products');
    const json = await resp.json ();
    dispatch (setProducts (json));
    console.log (json);
  } catch (e) {
    console.error ('ошибка', e);
  } finally {
    dispatch (endProductsLoading ());
  }
};

export {startProductsLoading, endProductsLoading, setProducts, loadProducts};
