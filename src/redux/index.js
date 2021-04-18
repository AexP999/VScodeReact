import {applyMiddleware, createStore} from 'redux';
import {reducer} from './reducers';
import {
    INC,
    INC_CUSTOM,
    DEC,
    RESET ,
} from './action-types'

const logger = (store) => (next) => (action) => {
  console.log('action', action,);
  const result = next(action)
  console.log('result', result,);
  console.log('next state', store.getState())
    return result
}

const protectCounter = (store) => (next) => (action) => {
  const actionsForCounter = [
    INC,
    INC_CUSTOM,
    DEC,
    RESET ,
]
  const {isAllowedToChange} = store.getState().counter1
  
  if (!isAllowedToChange && actionsForCounter.includes(action.type)) {
    console.log('you are not allowed');
    return
  }

  next(action)

  console.log('action', action,);
  const result = next(action)
  console.log('result', result,);
  console.log('next state', store.getState())
    return result
}

const middlewares = [protectCounter,logger];

export const store = createStore(reducer,
  applyMiddleware(...middlewares)
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// middleware(store)(next)(action)

