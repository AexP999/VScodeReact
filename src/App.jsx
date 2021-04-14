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

import React, {useEffect} from 'react';
import './App.css'
import {useSelector, useDispatch} from 'react-redux';
import {
    incAction,
    incCustomAction,
    decAction,
    resetAction,
} from './redux/action-creators'
import {
    incAction2,
    incCustomAction2,
    decAction2,
    resetAction2,
} from './redux/action-creators'

const PhotosList = () => {

    const fetchPhotos = async () => {
        const resp = await fetch('https://dummyapi.io/data/api/user?limit=10');
        const json = await resp.json();
        console.log(json);
    }
    useEffect(() => {
        fetchPhotos();
    }, [])
    return (
        <h1>Photos List</h1>
    )
}


function App() {
    const counter1 = useSelector(({counter1: {counter}}) => {
        return counter;
    });
    const counter2 = useSelector(({counter2: {counter}}) => {
        return counter;
    });


    const dispatch = useDispatch();

    console.log('render');
    return (
        <div className='App'>
            <PhotosList />
            <h1>{counter1} - 1</h1>
            <h1>{counter2} - 2</h1>
            <hr />
            <button onClick={() => dispatch(incCustomAction(102))}>inc custom 102</button>             {/* добавили еще один аргумент */}
            <button onClick={() => dispatch(incAction())}>inc1</button>
            <button onClick={() => dispatch(decAction())}>dec1</button>
            <button onClick={() => dispatch(resetAction())}>reset1</button>
            <hr />
            <button onClick={() => dispatch(incCustomAction2(50))}>inc custom  50</button>             {/* добавили еще один аргумент */}
            <button onClick={() => dispatch(incAction2())}>inc2</button>
            <button onClick={() => dispatch(decAction2())}>dec2</button>
            <button onClick={() => dispatch(resetAction2())}>reset2</button>
        </div>
    );
}


export default App