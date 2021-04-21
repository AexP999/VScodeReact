// import React from 'react';
// import './App.css'
// import {useSelector, useDispatch} from 'react-redux';

// function App() {
//     const counter = useSelector(({counter}) => counter);
//     console.log('counter', counter);
//     const dispatch = useDispatch();

//     console.log('render');
//     return (
//         <div className='App'>
//             <h1>{counter}</h1>
//             <button onClick={() => dispatch({type: 'INC'})}>inc</button>
//             <button onClick={() => dispatch({type: 'DEC'})}>dec</button>
//             <button onClick={() => dispatch({type: 'RESET'})}>reset</button>
//         </div>
//     );
// }

// export default App

// ===а тепер с connect===


// import './App.css'
// import {connect} from 'react-redux';

// function App({counter, inc, dec, reset}) {

//     console.log('render');
//     return (
//         <div className='App'>
//             <h1>{counter}</h1>
//             <button onClick={inc}>inc</button>
//             <button onClick={dec}>dec</button>
//             <button onClick={reset}>reset</button>
//         </div>
//     );
// }
// const mapStatetoProps = (state) => ({
//     counter: state.counter
// })
// const mapDispatchtoProps = (dispatch) => ({
//     inc: () => dispatch({type: 'INC'}),
//     dec: () => dispatch({type: 'DEC'}),
//     reset: () => dispatch({type: 'RESET'}),
// })
// export default connect(mapStatetoProps, mapDispatchtoProps)(App)


// import React from 'react';
// import './App.css'
// import {useSelector, useDispatch} from 'react-redux';
// import {
//     incAction,
//     incCustomAction,
//     decAction,
//     resetAction,
// } from './redux/action-creators'


// function App() {
//     // const counter1 = useSelector(({counter1: {counter}}) => {
//     //     return counter;
//     // });
//     // const counter2 = useSelector(({counter2: {counter}}) => {
//     //     return counter;
//     // });

//     // ==можно спростити==
//     const {counter1, counter2} = useSelector(({counter1, counter2}) => (
//         {
//             counter1: counter1.counter,
//             counter2: counter2.counter,
//         }
//     ))


//     const dispatch = useDispatch();

//     console.log('render');
//     return (
//         <div className='App'>
//             <h1>{counter1} - 1</h1>
//             <h1>{counter2} - 2</h1>
//             <button onClick={() => dispatch(incCustomAction(102))}>inc custom1</button>             {/* добавили еще один аргумент */}
//             <button onClick={() => dispatch(incAction())}>inc1</button>
//             <button onClick={() => dispatch(decAction())}>dec1</button>
//             <button onClick={() => dispatch(resetAction())}>reset1</button>
//         </div>
//     );
// }


// export default App

// ====сделал для двух счетчиков===

// import React from 'react';
// import './App.css'
// import {useSelector, useDispatch} from 'react-redux';
// import {
//     incAction,
//     incCustomAction,
//     decAction,
//     resetAction,
// } from './redux/action-creators'
// import {
//     incAction2,
//     incCustomAction2,
//     decAction2,
//     resetAction2,
// } from './redux/action-creators'


// function App() {
//     const counter1 = useSelector(({counter1: {counter}}) => {
//         return counter;
//     });
//     const counter2 = useSelector(({counter2: {counter}}) => {
//         return counter;
//     });


//     const dispatch = useDispatch();

//     console.log('render');
//     return (
//         <div className='App'>
//             <h1>{counter1} - 1</h1>
//             <h1>{counter2} - 2</h1>
//             <hr />
//             <button onClick={() => dispatch(incCustomAction(102))}>inc custom 102</button>             {/* добавили еще один аргумент */}
//             <button onClick={() => dispatch(incAction())}>inc1</button>
//             <button onClick={() => dispatch(decAction())}>dec1</button>
//             <button onClick={() => dispatch(resetAction())}>reset1</button>
//             <hr />
//             <button onClick={() => dispatch(incCustomAction2(50))}>inc custom  50</button>             {/* добавили еще один аргумент */}
//             <button onClick={() => dispatch(incAction2())}>inc2</button>
//             <button onClick={() => dispatch(decAction2())}>dec2</button>
//             <button onClick={() => dispatch(resetAction2())}>reset2</button>
//         </div>
//     );
// }


// export default App

// ===консультация===

// import React, {useEffect} from 'react';
// import './App.css'
// import {useSelector, useDispatch} from 'react-redux';
// import {
//     incAction,
//     incCustomAction,
//     decAction,
//     resetAction,
// } from './redux/action-creators'
// import {
//     incAction2,
//     incCustomAction2,
//     decAction2,
//     resetAction2,
// } from './redux/action-creators'
// import {
//     onUserLoaded,
//     onAddToBad,
//     onRemoveFromBad
// } from './redux/action-creators/user-action-creator'

// const PhotosList = () => {
//     const dispatch = useDispatch()
//     const users = useSelector(({userReducer: {users}}) => users);
//     const badEmployees = useSelector(({userReducer: {badEmployees}}) => badEmployees);

//     const fetchPhotos = async () => {
//         const resp = await fetch('https://dummyapi.io/data/api/user?limit=10', {
//             headers: {'app-id': '607ee368cad48d5a72f3a17a'}
//         });
//         const json = await resp.json();
//         console.log(json);
//         dispatch(onUserLoaded(json.data))

//     }

//     useEffect(() => {
//         if (!users.length) {
//             fetchPhotos();
//         }
//     }, [])

//     return (
//         <div>
//             <h1>Photos List</h1>
//             <div className='container'>
//                 {
//                     users.map(el => (
//                         <div style={{padding: '10px'}} key={el.id}>
//                             <img style={{
//                                 filter: badEmployees.includes(el.id) ? 'opacity(.3)' : ''
//                             }}
//                                 onClick={() => {
//                                     const alreadyInList = badEmployees.includes(el.id);
//                                     const answer = !alreadyInList && window.confirm('точно звільнити?');
//                                     if (answer) {
//                                         return dispatch(onAddToBad(el.id))
//                                     }
//                                     alreadyInList && dispatch(onRemoveFromBad(el.id))

//                                 }}
//                                 src={el.picture} alt={el.lastName} />
//                             <p>{el.title}. {el.firstName} {el.lastName}</p>

//                         </div>
//                     ))
//                 }
//             </div >
//         </div >
//     )
// }


// function App() {
//     const counter1 = useSelector(({counter1: {counter}}) => {
//         return counter;
//     });
//     const counter2 = useSelector(({counter2: {counter}}) => {
//         return counter;
//     });


//     const dispatch = useDispatch();

//     console.log('render');
//     return (
//         <div className='App'>
//             {/* {!!(counter1 % 2) && <PhotosList />} */}

//             <h1>{counter1} - 1</h1>
//             <h1>{counter2} - 2</h1>
//             <hr />
//             <button onClick={() => dispatch(incCustomAction(102))}>inc custom 102</button>             {/* добавили еще один аргумент */}
//             <button onClick={() => dispatch(incAction())}>inc1</button>
//             <button onClick={() => dispatch(decAction())}>dec1</button>
//             <button onClick={() => dispatch(resetAction())}>reset1</button>
//             <hr />
//             <button onClick={() => dispatch(incCustomAction2(50))}>inc custom  50</button>             {/* добавили еще один аргумент */}
//             <button onClick={() => dispatch(incAction2())}>inc2</button>
//             <button onClick={() => dispatch(decAction2())}>dec2</button>
//             <button onClick={() => dispatch(resetAction2())}>reset2</button>
//         </div>
//     );
// }


// export default App

// ===Это пример для демонстрации redux ===


// import React from 'react';
// import './App.css'
// import {createStore} from 'redux';

// const initialState = {
//     name: 'Paul',
//     secondName: 'Petrov',
//     age: 20
// }

// const reducer = (state = initialState, action) => {
//     console.log('state', state);
//     switch (action.type) {
//         case 'CHANGE_NAME':
//             return {
//                 ...state, name: action.payload
//             }
//         case 'CHANGE_SECOND_NAME':
//             return {
//                 ...state, secondName: action.payload
//             }
//         case 'CHANGE_AGE':
//             return {
//                 ...state, age: action.payload
//             }
//         default:
//             return state
//     }
// }

// const store = createStore(reducer);
// console.log('store', store.getState());

// const changeName = {
//     type: 'CHANGE_NAME',
//     payload: 'Ivan'
// }

// const changeSecondName = {
//     type: 'CHANGE_SECOND_NAME',
//     payload: 'Ivanov'
// }

// const changeAge = {
//     type: 'CHANGE_AGE',
//     payload: '30'
// }

// store.dispatch(changeName);
// console.log('changeName', store.getState());

// store.dispatch(changeSecondName);
// console.log('changeSecondName', store.getState());

// store.dispatch(changeAge);
// console.log('changeAge', store.getState());


// function App(props) {
//     return (
//         <div>

//         </div>
//     );
// }

// export default App;

// == продолжение консультации==

import React, {useEffect} from 'react';
import './App.css'
import {useSelector, useDispatch} from 'react-redux';
import {
    startProductsLoading,
    endProductsLoading,
    setProducts,
    loadProducts
} from './redux/action-creators'

const Products = () => {

    const {products, isLoading} = useSelector(store => store.products)
    console.log({products, isLoading});

    const dispatch = useDispatch()

    React.useEffect(() => {
        dispatch(loadProducts())
    }, [])

    return (
        <div>

            {isLoading && (
                <h2 style={{color: 'red'}}>LOADING</h2>
            )}

            {!isLoading && !!products.length && products.map(el =>
                <div key={el.id}>
                    <h3>{el.title}</h3>
                    <h4>{el.price} USD</h4>
                    <h4>{el.description}</h4>
                    <img src={el.image} alt="" />
                    <hr />
                </div>
            )}
        </div>
    )
}


function App() {

    console.log('render');
    return (
        <div className='App'>
            <Products />
        </div>
    );
}

export default App