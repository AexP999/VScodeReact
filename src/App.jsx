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

import React, {useState, createContext, useContext} from "react";
import "./App.css";
import {Switch, BrowserRouter as Router, Route, Link} from "react-router-dom";
//1 список туду, де ми можемо маркувати їх як виконані або удаляти
// форма для нової туду
let markIt = '';
const TodoContext = createContext();
const TodoContextProvider = ({children}) => {
  const [todos, setTodos] = useState([]);

  const onTodoCreate = (newTodo) => {
    if (!newTodo || !newTodo.title || !newTodo.description) {
      console.error("wrong arg! try one more time");
      return;
    }
    setTodos([newTodo, ...todos]);
  };

  const onTodoRemove = (todoId) => {
    setTodos(todos.filter(el => el.id !== todoId))
  }

  return <TodoContext.Provider value={{
    todos,
    onTodoCreate,
    onTodoRemove,
  }}>{children}
  </TodoContext.Provider>;
};


const TodoItem = ({todo, onTodoRemove, isDoneToggle}) => {
  const [mark, setMark] = useState(false);


  const onMarkedToggle = () => {
    isDoneToggle(todo.id)

    setMark(!mark);
    mark ? markIt = 'none' : markIt = 'line-through';
    console.log(mark);
  };
  const onTodoDelete = () => {
    const answer = window.confirm('R U sure?')

    if (answer) {
      onTodoRemove(todo.id)
    }
  }
  return (
    <>

      <div style={{textDecoration: markIt, textAlign: 'left', marginLeft: '20px'}} >

        <h4> {todo.title}</h4>
        <p>{todo.description}</p>
        <button onClick={onMarkedToggle} >mark as {mark ? 'active' : 'done'}</button>
        <button onClick={onTodoDelete}>delete todo</button>
      </div>
    </>
  );
};

const TodosList = () => {
  const {todos, onTodoRemove} = useContext(TodoContext);
  console.log("TodoList todos", todos);
  return (
    <>
      <h1>todos List</h1>
      <div>
        {todos.map((el, i) => <TodoItem key={i} todo={el} onTodoRemove={onTodoRemove} />)}
      </div>
    </>
  )
};

const AddTodo = () => {
  const [todoValues, setTodoValues] = useState({
    title: "",
    description: "",
    id: null,
  });

  const {onTodoCreate} = useContext(TodoContext);

  const onTodoChange = ({target: {name, value}}) =>
    setTodoValues({...todoValues, [name]: value});
  console.log('todoValues', todoValues);
  const onCreate = () => {
    onTodoCreate({...todoValues, id: Math.random()});
    setTodoValues({
      title: "",
      description: "",
      id: null,
    });
  };

  return (
    <div>
      <input
        onChange={onTodoChange}
        value={todoValues.title}
        type='text'
        name='title'
        placeholder='todo title'
      />
      <br />
      <input
        onChange={onTodoChange}
        value={todoValues.description}
        type='text'
        name='description'
        placeholder='todo description'
      />
      <br />
      <button onClick={onCreate}>add todo</button>
    </div>
  );
};

const Header = () => {
  return (
    <header>
      <Link to='/'>list</Link>
      <Link to='/create-todo'>add new todo</Link>
    </header>
  );
};

function App() {
  console.log('renderApp');
  return (
    <TodoContextProvider>
      <main className='App'>
        <Router>
          <Header />
          <Switch>
            <Route path='/' exact>
              <TodosList />
            </Route>

            <Route path='/create-todo'>
              <AddTodo />
            </Route>
          </Switch>
        </Router>
      </main>
    </TodoContextProvider>
  );
}

export default App;
