import React from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import {
  incAction,
  decAction,
  resetAction
} from './redux/action-creators';

function App () {
  const counter1 = useSelector(({ counter }) => counter);

  const dispatch = useDispatch();

  console.log('render');
  return (
    <div className='App'>
      <h1>{ counter1 }</h1>
      <button onClick={ () => dispatch(incAction()) }>INC</button>
      <button onClick={ () => dispatch(decAction()) }>DEC</button>
      <button onClick={ () => dispatch(resetAction()) }>RESET</button>
    </div>
  );
};
export default App;