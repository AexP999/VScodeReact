// import React, { Component } from 'react';
// import './App.css'

// let interval;
// class Comp extends Component {
//   componentDidMount() {
//     interval = setInterval(() => {
//       console.log('fetching air data');
//     }, 2000)
//     console.log('Component Did Mount Child');
//   }
//   componentDidUpdate(prevProps, prevState) {
//     console.log('Component Did Updated child');

//   }
//   componentWillUnmount() {
//     clearInterval(interval);
//     console.log('Component Will Unmount child');
//   }
//   render() {
//     console.log('child render');
//     return (
//       <h1>child</h1>
//     );
//   }
// }



// class App extends Component {
//   state = {
//     counter: 0
//   }
//   componentDidMount() {
//     console.log('Componet Did Mount Parent');
//   }

//   componentDidUpdate(prevProps, prevState) {
//     console.log('Component Did Updated parent');
//     // this.stat  });
//   }

//   componentWillUpdate() {
//     console.log('Component Will Unmount parent');
//   }

//   incCounter = () => {
//     this.setState({ counter: this.state.counter + 1 })
//   }


//   render() {
//     console.log('parent render');


//     return (
//       <div className='App'>
//         <h1 onClick={this.incCounter}>Hello {this.state.counter}</h1>
//         {!!(this.state.counter % 2) && <Comp />}
//       </div>
//     );
//   }
// }


// === Переделываем то же на функц. компонентах===

// import React, { useState } from 'react';
// import './App.css'
// let interval;

// const Comp = () => {
//   React.useEffect(() => {
//     console.log('Componet Did Mount child');
//   }, []) // ===аналог componentDidMount с пустым массивом===

//   React.useEffect(() => {
//     interval = setInterval(() => {
//       console.log('fetching air data');
//       // ===Здесь можно писать логику для Didmount===
//     }, 2000)
//     return () => {
//       clearInterval(interval);
//       console.log('Componet Will Unmount child');
//       // ===Здесь можно писать логику для WillUnmount===
//     } // ===аналог componentWillUnmount с пустым массивом===
//   }, [])


//   console.log('child render')
//   return (
//     <h1>child</h1>
//   )
// }


// const App = () => {
//   const [counter, setCounter] = React.useState(0);

//   const incCounter = () => {
//     setCounter(counter + 1)
//   }
//   React.useEffect(() => {
//     console.log('Componet Did Mount Parent')
//   }, []) // ===аналог componentDidMount с пустым массивом===

//   React.useEffect(() => {
//     // if (counter) {     // запускается первый раз и потом после изменения counter. чтобы этого избежать условие if, чтобы первый раз не пускалось
//     //   console.log('Componet Did Update Parent');
//     // }
//     console.log('Componet Did Update Parent');
//     return () => console.log('Componet Will Unmount Parent');
//     // === сначала выполняется return (), а потом Did Update Parent. т.е. сначала после return можно подчистить, а потом запустить выше===
//   }, [counter]) // ===аналог componentDidUpdate с пустым массивом===


//   console.log('parent render')
//   return (
//     <div className='App'>
//       <h1 onClick={incCounter}>Hello {counter}</h1>
//       {!!(counter % 2) && <Comp />}
//     </div>

//   )
// }


// export default App;

// ====пример с фетчами====

import React, { useEffect, useState } from 'react';
import './App.css'

const url = ' https://jsonplaceholder.typicode.com/todos';

const App = () => {
  const [counter, setCounter] = React.useState(1);
  const [todos, setTodos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const incCounter = () => {
    setCounter(counter + 1)
  }

  const fetchTodos = async () => {
    setIsLoading(true)
    const response = await fetch(url);
    const data = await response.json();
    // setTimeout(() => { //эмуляция работы с
    setTodos(data)
    setIsLoading(false)
    // }, 1000)
  }

  useEffect(() => {
    fetchTodos()
  }, [counter])


  return (
    <div>
      <h1 onClick={incCounter}>Hello {counter}</h1>
      {!todos.length && isLoading && (<h2>Loadin DATA..</h2>)
      }

      {!!todos.length && (
        todos.map((el) => {
          return (
            <>

              <hr />
              <h3>{el.title} - {el.completed.toString()}</h3>
              <hr />
            </>)
        })
      )}
    </div>
  )
}
export default App;