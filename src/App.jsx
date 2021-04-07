// import React, { useState, createContext, useContext } from 'react';
// import './App.css';

// const CounterContex = createContext();


// const ContexProvider = ({ children }) => {
//   const [counter, SetCounter] = useState(0);

//   const incCounter = () => {
//     SetCounter(counter + 1)
//   }
//   const decCounter = () => {
//     SetCounter(counter - 1)
//   }

//   return (
//     <CounterContex.Provider value={{
//       counter,
//       incCounter,
//       decCounter
//     }}>
//       {children}
//     </CounterContex.Provider>
//   )
// }

// const Counter = () => {
//   const { counter, incCounter, decCounter } = useContext(CounterContex)

//   return (
//     <>
//       <h3 >Counter: {counter}</h3>
//       <button onClick={incCounter}>+</button>
//       <button onClick={decCounter}>-</button>
//     </>
//   )
// }
// const Header = () => {
//   const { counter } = useContext(CounterContex)

//   return (
//     <h1>Header counter: {counter}</h1>
//   )
// }

// function App(props) {

//   return (
//     <div className='App'>
//       <ContexProvider>
//         <Header />
//         <Counter />
//       </ContexProvider>
//     </div>
//   );
// }

// export default App;


// ==== далі тудушки ===

import React, { useState, createContext, useContext } from 'react';
import './App.css';
import { Switch, BrowserRouter as Router, Route, Link } from 'react-router-dom'
//1 список туду, де ми можемо маркувати їх як виконані або удаляти
// форма для нової туду

const TodosList = () => {
  return (
    <h1>todos List</h1>
  )
}
const AddTodo = () => {
  const [todoValues, setTodoValues] = useState({
    title: '',
    description: '',
  })

  const onTodoChange = ({ target: { name, value } }) => setTodoValues({ ...todoValues, [name]: value })

  const onCreate = () => {
    setTodoValues({
      title: '',
      description: '',
    })
  }

  return (
    <div>
      <input onChange={onTodoChange} value={todoValues.title} type="text" name="title" placeholder="todo title" />
      <br />
      <input onChange={onTodoChange} value={todoValues.description} type="text" name="description" placeholder="todo description" />
      <br />
      <button onClick={onCreate}>add todo</button>
    </div>

  )
}

const Header = () => {
  return (
    <header>
      <Link to="/">list</Link>
      <Link to="/create-todo">add new todo</Link>
    </header>
  )
}

function App() {

  return (
    <main className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact>
            <TodosList />
          </Route>

          <Route path="/create-todo">
            <AddTodo />
          </Route>
        </Switch>
      </Router>

    </main>
  );
}

export default App;