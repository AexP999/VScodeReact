// useEffect позволяет отслеживать значение counter. CLG в функциях inc dec показывает 
// предыдущее значение. setCounter действует асинхронно.
// 

import React, { useState } from 'react';
import './App.css';

function calculatedValue () {
  console.log('calculatedValue');
  return Math.trunc(Math.random() * 100);
};

// const initData = [
//   { title: 'Cold counter', dn: 50 },
//   { title: 'Middle counter', dn: 100 },
//   { title: 'Hot counter', dn: 150 }
// ];

const COLORS = [ 'black', 'white', 'red', 'grey', 'yellow' ];

function App () {

  const [ counter, setCounter ] = useState(calculatedValue);
  // const [ data, setData ] = useState({ ...initData });
  const [ el, setEl ] = useState(0);
  const [ elem, setElem ] = useState({ name: '', color: '', age: 0, habits: '' });


  const inc = () => {
    setCounter(prev => {
      return prev + 1;
    }
    );

  };

  const dec = () => {
    setCounter(counter - 1);
  };

  const reset = () => {
    const counter = calculatedValue;
    setEl(0);
    setCounter(counter);
    // setData('');
  };


  const handleElem = (name22) => {
    return ({ target: { value } }) => {
      setElem(prev => ({ ...prev, [ name22 ]: value }));
    };

  };

  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      await saveFormData();
      alert('Your registration was successfull');
    } catch(error) {
      alert(`Registration faied. ${ error.message }`);

    }
  };

  const saveFormData = async () => {
    const response = await fetch('api/registration', {
      method: 'POST',
      body: JSON.stringify(elem)
    });

    if(response.status !== 200) {
      throw new Error(`Request failed: ${ response.status }`);
    }
  };



  console.log('elem', elem);

  console.log('render');
  return (
    <div className="App">
      <h1>Hooks tests</h1>
      <h4>Counter: { counter }</h4>
      <button onClick={ inc } className="btn btn-success">Inc</button>
      <button onClick={ dec } className="btn btn-warning">Dec</button>
      <button onClick={ reset } className="btn btn-danger">Reset</button>

      <hr />

      <form onSubmit={ onSubmit } >
        <h2>Register your cat</h2>
        <label >Name :</label>
        <input type="text" required value={ elem.name } onChange={ handleElem('name') }
        />

        <label>Color :</label>
        <select value={ elem.color } required onChange={ handleElem('color') }>
          <option value="">Select color</option>
          { COLORS.map(color => <option key={ color }>{ color }</option>) }
        </select>

        <label >Age :</label>
        <input type="number" required min='1' value={ elem.age } onChange={ handleElem('age') }
        />

        <label >Habits :</label>
        <textarea value={ elem.habits } onChange={ handleElem('habits') }
        />

        <button type='submit'>Submit</button>

      </form>

    </div >
  );
};

export default App;

// // useState callback style тре використовувать якщо треба використовувать попереднє значенння.
// // якщо setCounter юзает counter, треба


// import React, { useState } from 'react';
// import './App.css';

// function App () {
//   const [ counter, setCounter ] = useState(0);
//   const inc = () => {
//     setCounter(prev => {
//       console.log('prev1', prev + 1);
//       return (prev + 1);
//     }); //колбек он сохраняет значения в массив и выводит по порядку
//     setCounter(prev => {
//       console.log('prev2', prev + 2);
//       return (prev + 1);
//     }); //колбек он сохраняет значения в массив и выводит по порядку

//     console.log('counter inc', counter);


//   };
//   const dec = () => {
//     setCounter(counter - 1);

//     console.log('counter dec', counter);
//   };
//   console.log('render');
//   return (
//     <div className="App">
//       <button onClick={ dec }>-</button>
//       <span>{ counter }</span>
//       <button onClick={ inc }>+</button>
//     </div>
//   );
// }

// export default App;

//======useMemo======

// import React, { useMemo, useState } from 'react';
// import './App.css';

// const fn = (a, b) => {
//   console.log('called');
//   return Math.pow(a, b);
// };

// function App (props) {
//   const [ counter, setCounter ] = useState(0);
//   const [ counter1, setCounter1 ] = useState(0);

//   const inc = () => {
//     setCounter(prev => prev + 1);
//     console.log('counter inc', counter);
//   };


//   //на кожном реренде вичисляеться функція fn, а нам це не треба, а раптом там велике обчислювання. тому useMemo. Перелічивати коли змінюється [counter]
//   const inc1 = () => {
//     setCounter1(prev => prev + 1);
//     console.log('counter1', counter1);
//   };

//   const compexLogic = useMemo(() => fn(4, counter1), [ counter1 ]);
//   console.log('render', compexLogic);
//   return (
//     <div className="App">

//       <button onClick={ inc }>{ counter }</button>
//       <button onClick={ inc1 }>inc1 { counter1 }</button>

//     </div>
//   );
// }

// export default App;

//====memo====   ====useCallback=====
// проверяет пропсы у Child . если пропсы не изменились, то не ререндерим Child. если меняется парент и ререндерит, то чайлд не меняется

// import React, { useCallback, useMemo, useState } from 'react';
// import './App.css';

// const fn = (a, b) => {
//   console.log('called');
//   return Math.pow(a, b);
// };
// const Child = React.memo(() => {
//   const [ counter3, setCounter3 ] = useState(0);
//   console.log('Child rerender');
//   return (
//     <>
//       <h1>child comp</h1>
//       <button onClick={ () => setCounter3(counter3 + 1) }>{ counter3 }</button>
//     </>
//   );
// });

// function App (props) {
//   const [ counter, setCounter ] = useState(0);
//   const [ counter1, setCounter1 ] = useState(0);

//   const inc = useCallback(() => {
//     setCounter(prev => prev + 1);
//     console.log('counter inc', counter);
//   }, []);
//   //[] означає створи і більш не міняйся. Першиу раз створить и все. counter буде завжди 0. тому требя [counter]. Callback як мемо для функції
//   const inc1 = useCallback(() => {
//     setCounter1(prev => prev + 1);
//     console.log('counter inc1', counter1);
//   }, []);
//   //а тут нема каунтер а прев. цю функцію робить реакт. [] сюда не треба класти
//   const compexLogic = useMemo(() => {
//     return fn(4, counter);
//   }, [ counter ]);
//   //на кожном реренде вичисляеться функція fn, а нам це не треба, а раптом там велике обчислювання. тому useMemo. Перелічивати коли змінюється [counter]

//   console.log('render', compexLogic);

//   return (
//     <div className="App">
//       <button onClick={ inc1 }>counter1</button>
//       <span>{ counter1 }</span>
//       <button onClick={ inc }>counter</button>
//       <span>{ counter }</span>
//       <Child inc={ inc } />
//       {/* якщо кладемо сюди пропс, то мемо не працює,т.к. міняється пропса */ }
//     </div>
//   );
// }

// export default App;

// ====useReducer===
// похож на useState

// import React from 'react';
// import './App.css';

// const initialState = {
//   counter: 0,
// };

// const reducer = (state, action) => {
//   switch(action.type) {
//     case 'INC_MY_COUNTER':
//       return { ...state, counter: state.counter + 1 };
//     case 'DEC_MY_COUNTER':
//       return { ...state, counter: state.counter - 1 };
//     default:
//       // throw new Error(); або так
//       return state;
//   }
// };

// function App () {

//   const [ state, dispatch ] = React.useReducer(reducer, initialState);



//   console.log('render');

//   return (
//     <div className="App">
//       <h1>{ state.counter }</h1>
//       <button onClick={ () => dispatch({ type: 'INC_MY_COUNTER' }) }>inc</button>

//       <button onClick={ () => dispatch({ type: 'DEC_MY_COUNTER' }) }>dec</button>
//     </div>
//   );
// }

// export default App;