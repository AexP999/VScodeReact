// import React from 'react';
// import Employees from './components/Eployees';
// import Jobs from './components/Jobs';

// import React, { Component } from 'react';

// let interval;
// class Comp extends Component {

//    componentDidMount () {

//       interval = setInterval(() => {
//          console.log('fetch data');
//       }, 2000);
//       console.log('child comp did mount');
//    }

//    componentWillUnmount () {
//       clearInterval(interval);
//       console.log('child comp will unmount');
//    }

//    render () {
//       console.log('child rerender');
//       return (
//          <div>
//             <p>child</p>
//             <span></span>
//          </div>
//       );
//    }
// }



// export default class App extends Component {

//    state = {
//       counter: 0
//    };

//    componentDidMount () {
//       console.log('par component did mount');
//    }

//    componentDidUpdate (prevProps, prevState) {
//       // this.state.counter > 5 && this.setState({ counter: this.state.counter + 2 });
//       console.log('component did updated', { prevProps, prevState });
//    }

//    incCounter = () => {
//       this.setState({ counter: this.state.counter + 1 });
//    };

//    render () {

//       console.log('par render');


//       return (
//          <div>
//             <h2>{ this.state.counter }</h2>
//             <button onClick={ this.incCounter } >inc</button>
//             { !!(this.state.counter % 3) && <Comp /> }
//          </div>
//       );
//    }
// }


// function App() {



//   return (
//     <>
//       <div>
//         <Jobs />
//         <Employees />
//       </div>
//     </>
//   )
// }

// export default App      

//Вывод json placeholder всег массива через map . Вывод надписи LOADING... проверка если пустое значение

// import React, { useState, useEffect } from 'react';

// const URL = 'https://jsonplaceholder.typicode.com/todos';

// const App = () => {

//    const [ counter, setCounter ] = useState(1);
//    const [ todos, setTodos ] = useState([]);
//    const [ isLoading, setIsLoading ] = useState(false);


//    const incCounter = () => {
//       setCounter(counter + 1);
//    };

//    const fetchTodos = async () => {
//       setIsLoading(true);
//       const data = await (await fetch(URL)).json();
//       setTodos(data);
//       setIsLoading(false);
//       console.log(data);
//    };

//    useEffect(() => {
//       fetchTodos();
//    }, [ counter ]);

//    console.log('par render');
//    return (
//       <div>
//          <h2>{ counter }</h2>
//          <button onClick={ incCounter } >inc</button>

//          { !todos.length && isLoading && <h1>LOADING DATA...</h1> }

//          { !!todos.length &&
//             <div>
//                {
//                   todos.map((el) => (
//                      <div key={ el.id }>
//                         <hr />
//                         { el.id } - { el.title } - { el.completed.toString() }
//                      </div>
//                   ))
//                }
//             </div> }
//       </div>
//    );

// };
// export default App;

// Вывод пласхолдера по одному эндпойнту. counter = id эндпойнта

import React, { useState, useEffect } from 'react';
import './App.css';

const URL = 'https://jsonplaceholder.typicode.com/todos';

const App = () => {

   const [ counter, setCounter ] = useState(1);
   const [ todo, setTodo ] = useState(null);
   const [ isLoading, setIsLoading ] = useState(false);


   const incCounter = () => {
      setCounter(counter + 1);
   };

   const fetchTodos = async () => {
      setIsLoading(true);
      const data = await (await fetch(`${ URL }/${ counter }`)).json();
      setTodo(data);
      setIsLoading(false);
      console.log(data);
   };

   useEffect(() => {
      fetchTodos();
      return () => {
         setTodo(null);
      };
   }, [ counter ]);

   console.log('par render');
   return (
      <div>
         <h2>{ counter }</h2>
         <button onClick={ incCounter } >inc</button>

         { !todo && isLoading && <h1>LOADING DATA...</h1> }

         { !!todo &&
            <div >
               { <div className="border">
                  { todo.id } - { todo.title } - { todo.completed.toString() }
               </div>
               }
            </div> }
      </div>
   );

};
export default App;