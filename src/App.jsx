import React, {useState} from 'react';
import './App.css'
import {createStore} from 'redux'
import {useDispatch, useSelector, } from 'react-redux'

const INC = 'INC';
const DEC = 'DEC';
const RESET = 'RESET';
const CUST_INC = 'CUST_INC';

const initialState = {counter: 0}

const reducer = (state = initialState, action) => {
   switch (action.type) {
      case INC:
         return {...state, counter: state.counter + 1};

      case DEC:
         return {...state, counter: state.counter - 1};

      case RESET:
         return {...state, counter: 0};

      case CUST_INC:
         return {...state, counter: state.counter + action.payload};

      default:
         return state;
   }

}


export const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())


const App = () => {

   const [onInputCust, setonInputCust] = useState('')

   const dispatch = useDispatch()
   const counter = useSelector(({counter}) => counter)

   console.log(onInputCust);


   const handleSubmit = (e) => {
      e.preventDefault();
      // const {target: [{value: custInc}]} = e;
      console.log(e);
   }

   return (
      <div className='App'>
         <h1>Counter again</h1>
         <button onClick={() => dispatch({type: CUST_INC, payload: Number(onInputCust)})}>CUST_INC</button>
         <button onClick={() => dispatch({type: INC})}> + </button>
         <button onClick={() => dispatch({type: DEC})}> - </button>
         <button onClick={() => dispatch({type: RESET})}>RESET</button>
         <h2>{counter}</h2>

         <input value={onInputCust} onChange={({target: {value}}) => setonInputCust(value)} name='onInput' type="number" />
         <button onClick={handleSubmit}>Custom+</button>
      </div >
   );
}
export default App