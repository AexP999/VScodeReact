import {combineReducers} from 'redux';
import counter1Reducer from './counter-one-reducer';
import counter2Reducer from './counter-two-reducer';
import userReducer from './users-reducer';
import productsReducer from './products-reducer';

export const reducer = combineReducers ({
  counter1: counter1Reducer,
  counter2: counter2Reducer,
  userReducer,
  products: productsReducer,
});
