// import React, { useState, createContext, useContext } from 'react';
// import './App.css';

// const CounterContex = createContext();

// const ContexProvider = ({ children }) => {
//   const [ counter, SetCounter ] = useState(0);

//   const incCounter = () => {
//     SetCounter(counter + 1);
//   };
//   const decCounter = () => {
//     SetCounter(counter - 1);
//   };

//   return (
//     <CounterContex.Provider value={ {
//       counter,
//       incCounter,
//       decCounter
//     } }>
//       { children }
//     </CounterContex.Provider>
//   );
// };

// const Counter = () => {
//   const { counter, incCounter, decCounter } = useContext(CounterContex);

//   return (
//     <>
//       <h3 >Counter: { counter }</h3>
//       <button onClick={ incCounter }>+</button>
//       <button onClick={ decCounter }>-</button>
//     </>
//   );
// };
// const Header = () => {
//   const { counter } = useContext(CounterContex);

//   return (
//     <h1>Header counter: { counter }</h1>
//   );
// };

// function App (props) {

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

import React, { useState, createContext, useContext } from "react";
import "./App.css";
import { Switch, BrowserRouter as Router, Route, Link } from "react-router-dom";
//1 список туду, де ми можемо маркувати їх як виконані або удаляти
// форма для нової туду

const TodoContext = createContext();

const TodoContextProvider = ({ children }) => {
  const [ todos, setTodos ] = useState([]);
  const [ doneTodos, setDonetodos ] = useState([]);

  const onTodoCreate = (newTodo) => {
    if(!newTodo || !newTodo.title || !newTodo.description) {
      console.error("wrong arg! try one more time");
      return;
    }
    setTodos([ newTodo, ...todos ]);
  };

  const onTodoRemove = (todoId) => {
    setTodos(todos.filter(el => el.id !== todoId));
    setDonetodos(doneTodos.filter(id => id !== todoId));
  };


  const isDoneToggle = (todoId) => {
    const isTodoMarkedAsDone = doneTodos.includes(todoId);
    console.log('isTodoMarkedAsDone', isTodoMarkedAsDone);
    if(isTodoMarkedAsDone) {
      return setDonetodos(doneTodos.filter(id => id !== todoId));
    }
    setDonetodos([ ...doneTodos, todoId ]);

  };

  return <TodoContext.Provider value={ {
    todos,
    onTodoCreate,
    onTodoRemove,
    isDoneToggle,
    doneTodos
  } }>{ children }
  </TodoContext.Provider>;
};


const TodoItem = ({ todo, onTodoRemove, isDoneToggle, mark }) => {


  const onMarkedToggle = () => {
    isDoneToggle(todo.id);
  };

  const onTodoDelete = () => {
    const answer = window.confirm('R U sure?');

    if(answer) {
      onTodoRemove(todo.id);
    }
  };
  return (
    <>

      <div style={ { textDecoration: mark ? 'line-through' : '' } } >

        <h4> { todo.title }</h4>
        <p>{ todo.description }</p>
        <button onClick={ onMarkedToggle } >mark as { mark ? 'active' : 'done' }</button>
        <button onClick={ onTodoDelete }>delete todo</button>
      </div>
    </>
  );
};

const TodosList = () => {
  const {
    todos,
    onTodoRemove,
    isDoneToggle,
    doneTodos
  } = useContext(TodoContext);
  console.log("TodoList todos", todos, "doneTodos", doneTodos);
  return (
    <>
      <h1>todos List</h1>

      <ul>
        { todos.map((el, i) =>
          < TodoItem
            mark={ doneTodos.includes(el.id) }
            key={ el.title + i }
            todo={ el }
            onTodoRemove={ onTodoRemove }
            isDoneToggle={ isDoneToggle }
          />

        ) }
      </ul>
    </>
  );
};

const AddTodo = () => {
  const [ todoValues, setTodoValues ] = useState({
    title: "",
    description: "",
    id: null,
  });

  const { onTodoCreate } = useContext(TodoContext);

  const onTodoChange = ({ target: { name, value } }) =>
    setTodoValues({ ...todoValues, [ name ]: value });

  const onCreate = () => {
    onTodoCreate({ ...todoValues, id: Math.random() });
    setTodoValues({
      title: "",
      description: "",
      id: null,
    });
  };

  return (
    <div>
      <input
        onChange={ onTodoChange }
        value={ todoValues.title }
        type='text'
        name='title'
        placeholder='todo title'
      />
      <br />
      <input
        onChange={ onTodoChange }
        value={ todoValues.description }
        type='text'
        name='description'
        placeholder='todo description'
      />
      <br />
      <button onClick={ onCreate }>add todo</button>
    </div>
  );
};

const Header = () => {
  const { todos, doneTodos } = useContext(TodoContext);
  return (
    <header >

      <div>
        <Link to='/'>list</Link>
        <Link to='/create-todo'>add new todo</Link>
      </div>
      <div className='rightinfo'>
        <div className='qty'>Marked q-ty: { doneTodos.length }</div>
        <div className='qty'>Unmarked q-ty: { todos.length - doneTodos.length }</div>
        <div className='qty'>Todos q-ty: { todos.length }</div>
      </div>
    </header>
  );
};

function App () {
  console.log('renderApp');
  return (
    // 1. Список тудушек, де ми можемо маркувати їх як виконані або видаляти
    // 2. Форма для створення нової туду

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
