import {applyMiddleware, createStore, compose} from 'redux';
import {reducer} from './reducers';
// import {INC, INC_CUSTOM, DEC, RESET} from './action-types';
import thunk from 'redux-thunk';
import {loadProducts} from './action-creators';

const logger = store => next => action => {
  // console.log ('action', action);
  const result = next (action);
  console.log ('result', result);
  console.log ('next state', store.getState ());
  return result;
};

// const protectCounter = store => next => action => {
//   const actionsForCounter = [INC, INC_CUSTOM, DEC, RESET];
//   const {isAllowedToChange} = store.getState ().counter1;

//   if (!isAllowedToChange && actionsForCounter.includes (action.type)) {
//     console.log ('you are not allowed');
//     return;
//   }
//   next (action);
// };

const persistor = store => next => action => {
  next (action);
  const {wishlist, cart} = store.getState ();
  // console.log ('counter1', counter1);

  localStorage.setItem ('wishlist', JSON.stringify (wishlist));
  localStorage.setItem ('cart', JSON.stringify (cart));
};

// const customThunk = store => next => action => {
//   if (typeof action === 'function') {
//     action (store.dispatch);
//   } else {
//     next (action);
//   }
// };

export const middlewares = [thunk, persistor, logger];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore (
  reducer,
  /* preloadedState, */ composeEnhancers (
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__ (),
    applyMiddleware (...middlewares)
  )
);

// const fetchFn = async dispatch => {};

// store.dispatch (loadProducts ());
