import React from 'react';
import {INC, RESET, INC_CUSTOM, DEC} from './redux/action-types';
import {useDispatch, useSelector} from 'react-redux'
import './App.css'



function App() {



   const counter = useSelector(({counter}) => counter)
   console.log('counter', counter);

   const dispatch = useDispatch()

   const incCust = React.useRef()

   const onSubmit = (e) => {
      e.preventDefault()
      console.log(incCust.current.value);
      // const {target: [{value: incCust}]} = e;
   }

   return (
      <div className='App'>
         <h1>{counter}</h1>
         <button onClick={() => dispatch({type: INC_CUSTOM, payload: +incCust.current.value})}>INC_CUSTOM</button>
         <button onClick={() => dispatch({type: INC})}>INC</button>
         <button onClick={() => dispatch({type: DEC})}>DEC</button>
         <button onClick={() => dispatch({type: RESET})}>RESET</button>
         <br />
         <br />
         {/* <form onSubmit={onSubmit}> */}
         <input ref={incCust} type="number" placeholder='enter custom inc' />
         <button onClick={onSubmit} >INC_Custom</button>

         {/* </form> */}
      </div>
   );
}

export default App;