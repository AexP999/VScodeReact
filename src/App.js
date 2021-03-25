import React, { useState, Component } from 'react';
import './App.css';


const Header = ({ counter }) => {
  console.log('child');
  return (
    <h2> {counter}</h2>
  )
}

// function App(props) {
//   // let counter = 0;

//   const [counter, setCounter] = useState(1);
//   // const [addValue, addCounter] = useState(3);
//   const [isheaderVisible, setIsHeaderVisible] = useState(true);
//   const [todos, setTodos] = useState(['hello', 'react'])

//   const clickHandler = () => {
//     // console.log(counter);
//     // counter++
//     setCounter(counter + 1)//+ addValue)
//     // addCounter(addValue + 2)
//   }
//   console.log('parent');
//   const toogleHandler = () => {
//     setIsHeaderVisible(!isheaderVisible)
//   }

//   const changeSmthInTodo = () => {
//     const newArr = [...todos]

//     newArr[0] = Math.random()
//     // setTodos([...todos])
//     setTodos(newArr)
//   }

//   return (
//     <div className='App'>
//       {isheaderVisible && <Header counter={counter} />}
//       <button onClick={clickHandler}>inc</button>
//       <button onClick={toogleHandler}>toogle header</button>
//       <button onClick={changeSmthInTodo}>change smth in todo</button>

//       <div>{todos[0]}</div>
//       <div>{todos[1]}</div>
//     </div>
//   );
// }

// export default App;

// === это были функц.компоненты, теперь классовые====




// class App extends Component {
//   state = {
//     counter: 0,
//     isheaderVisible: true,
//     todos: ['hello', 'react']
//   }
//   clickHandler = () => {
//     this.setState({ counter: this.state.counter + 1 })
//   }
//   toogleHandler = () => {
//     this.setState({ isheaderVisible: !this.state.isheaderVisible })
//   }
//   changeSmthInTodo = () => {
//     const newArr = [...this.state.todos]
//     newArr[0] = Math.random()
//     this.setState({ todos: newArr })
//   }

//   render() {
//     // const { isHeaderVisible, counter, todos } = this.state;
//     return (
//       // ==можно так немного упростить код без state===
//       <div className='App'>
//         {this.state.isheaderVisible && <Header counter={this.state.counter} />}
//         <button onClick={this.clickHandler}>inc</button>
//         <button onClick={this.toogleHandler}>toogle header</button>
//         <button onClick={this.changeSmthInTodo}>change smth in todo</button>

//         <div>{this.state.todos[0]}</div>
//         <div>{this.state.todos[1]}</div>
//       </div>

//     );
//   }
// }

// export default App;

// ====снова переходим к функциональным компонентам ===
const Template = ({ todos }) => {
  return (
    todos.map(todo => (
      <div>
        {todo.title}
        <br />
        {todo.content}
        <hr />
      </div>
    )
    ))

}

function App() {
  // let counter = 0;

  // const [counter, setCounter] = useState(1);
  // // const [addValue, addCounter] = useState(3);
  // const [isheaderVisible, setIsHeaderVisible] = useState(true);
  // const [todos, setTodos] = useState(['hello', 'react'])

  const [state, setState] = useState({
    counter: 0,
    isheaderVisible: true,
    // todos: ['hello', 'react']
    todos: [
      { id: 1, title: 'Hello', content: 'React' },
      { id: 2, title: 'Buy', content: 'Erect' },
      { id: 3, title: 'Hi again', content: 'Erect-React' }
    ]
  })

  const clickHandler = () => {
    // console.log(counter);
    // counter++
    // setCounter(counter + 1)//+ addValue)
    // addCounter(addValue + 2)
    setState({
      ...state,
      counter: state.counter + 1
    })
  }
  console.log('parent');
  const toogleHandler = () => {
    // setIsHeaderVisible(!isheaderVisible)
    setState({
      ...state,
      isheaderVisible: !state.isheaderVisible
    })
  }

  const changeSmthInTodo = () => {
    const newArr = [...state.todos]

    newArr[0] = Math.random()
    // // setTodos([...todos])
    // setTodos(newArr)
    setState({
      ...state,
      todos: newArr
    })
  }

  return (
    <div className='App'>

      {state.isheaderVisible && <Header counter={state.counter} />}
      {/* <h2> {state.counter}</h2> */}
      <button onClick={clickHandler}>inc</button>
      <button onClick={toogleHandler}>toogle header</button>
      <button onClick={changeSmthInTodo}>change smth in todo</button>

      {/* <div>{state.todos[0]}</div>
      <div>{state.todos[1]}</div> */}

      <Template todos={state.todos} />



    </div>
  );
}

export default App;