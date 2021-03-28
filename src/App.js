import React, { useState } from 'react';
import './App.css';

// ДЗ:

// 1 відмалювати список карточок базуючись на якомусь створеному вами масиві створити окрему кнопку, яка буде видаляти поточний перший елемент(або останній)  якщо у нас масив з 3 елементів і ми клікнули на кнопку 3 рази, то на екрані жодна карточка не має відмалюватись(кнопки повернення до початкового стану не треба)

// 2 те саме, тільки з кнопкою реверт(повернутись до стану, де у нас видно 3 елемнети, як на початку)

// 3   задача з зірочкою) кожна карточка з завдання вище має мати кнопку, по кліку на яку, ми видаляємо зі списку саме її + реверт кнопка, щоб вернути все назад(ця кнопка одна дня всіх карточок, клікнули по ній і всі каркти вернулись назазд)(згадування функції фільтр в лекції було не просто так)

// 4   написати тогл компоненту, яка буде ховати або показувати елемент приклад з візуалкою тут https://material-ui.com/components/switches/#customized-switches


// // ====== 1  - 2 =====

// const Card = ({ card }) => {

//   return (
//     card.map(card => (
//       <div className='card'>
//         <h2>{card.nameOfGoods}</h2>
//         <p>Size: {card.size}</p>
//         <p>Price: {card.price} hrn</p>
//         {card.stock == true ? <p>Availability: in stock</p> : <p>Availability: out of stock</p>}
//       </div >
//     ))
//   )
// }

// function App() {


//   const [cardArr, setCardArr] = useState([
//     {
//       id: 1,
//       nameOfGoods: 'Cast Iron Butterfly Valve',
//       size: 'DN50',
//       price: 220,
//       stock: false
//     },
//     {
//       id: 2,
//       nameOfGoods: 'Cast Iron Butterfly Valve',
//       size: 'DN65',
//       price: 257,
//       stock: true
//     },
//     {
//       id: 3,
//       nameOfGoods: 'Cast Iron Butterfly Valve',
//       size: 'DN80',
//       price: 340,
//       stock: false
//     },
//     {
//       id: 4,
//       nameOfGoods: 'Cast Iron Butterfly Valve',
//       size: 'DN100',
//       price: 470,
//       stock: true
//     },
//   ]);

//   const [initCardArr, setInitCardArr] = useState([...cardArr]);

//   const delCardAtBegining = () => {
//     const newCardArr = [...cardArr]
//     newCardArr.shift()
//     setCardArr(newCardArr)
//   }

//   const delCardAtEnd = () => {
//     const newCardArr = [...cardArr]
//     newCardArr.pop()
//     setCardArr(newCardArr)
//   }

//   const revert = () => {
//     const newCardArr = [...initCardArr]
//     setCardArr(newCardArr)
//   }

//   return (
//     <div className='App'>
//       <div className='cardCont'>
//         <Card card={cardArr} />
//       </div>
//       <button onClick={delCardAtBegining}> Delete Card at the begining</button>
//       <button onClick={delCardAtEnd}> Delete Card at the end</button>
//       <button onClick={revert}> Revert</button>
//     </div>
//   );
// }

// export default App;



// ======== 3 ======


const Card = ({ cardArr }) => {

  const [removeState, setRemoveState] = useState([...cardArr]);
  const [initcardArr1, setInitCardArr1] = useState([...cardArr])
  const removeEachCard = (id) => {
    console.log('id', id);
    console.log('removeState', removeState);
    setRemoveState(removeState.filter((elem) => elem.id !== id))
  }

  const revert = () => setRemoveState([...initcardArr1])

  return (

    removeState.map(removeState => (
      <div className='card'>
        <h2>{removeState.nameOfGoods}</h2>
        <p>Size: {removeState.size}</p>
        <p>Price: {removeState.price} hrn</p>
        {removeState.stock == true ? <p>Availability: in stock</p> : <p>Availability: out of stock</p>}
        <button onClick={() => removeEachCard(removeState.id)}>Remove</button>
      </div >
    ))

  )

}

function App() {


  const [cardArr, setCardArr] = useState([
    {
      id: 1,
      nameOfGoods: 'Cast Iron Butterfly Valve',
      size: 'DN50',
      price: 220,
      stock: false
    },
    {
      id: 2,
      nameOfGoods: 'Cast Iron Butterfly Valve',
      size: 'DN65',
      price: 257,
      stock: true
    },
    {
      id: 3,
      nameOfGoods: 'Cast Iron Butterfly Valve',
      size: 'DN80',
      price: 340,
      stock: false
    },
    {
      id: 4,
      nameOfGoods: 'Cast Iron Butterfly Valve',
      size: 'DN100',
      price: 470,
      stock: true
    },
  ]);

  const [initCardArr, setInitCardArr] = useState([...cardArr]);

  // const revert = () => {
  //   console.log('cardArr', cardArr);
  //   console.log('initCardArr', initCardArr);
  //   const newCardArr = [...initCardArr]
  //   setCardArr(newCardArr)
  // }

  return (
    <div className='App'>
      <div className='cardCont'>
        {console.log('ren cardArr', cardArr)}
        <Card cardArr={cardArr} />
      </div>
      <button onClick={revert}> Revert</button>
    </div>
  );
}

export default App;






































// const Header = ({ counter }) => {
//   console.log('child');
//   return (
//     <h2> {counter}</h2>
//   )
// }

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
// const Template = ({ todos }) => {
//   return (
//     todos.map(todo => (
//       <div>
//         {todo.title}
//         <br />
//         {todo.content}
//         <hr />
//       </div>
//     )
//     ))

// }

// function App() {
  // let counter = 0;

  // const [counter, setCounter] = useState(1);
  // // const [addValue, addCounter] = useState(3);
  // const [isheaderVisible, setIsHeaderVisible] = useState(true);
  // const [todos, setTodos] = useState(['hello', 'react'])

//   const [state, setState] = useState({
//     counter: 0,
//     isheaderVisible: true,
//     // todos: ['hello', 'react']
//     todos: [
//       { id: 1, title: 'Hello', content: 'React' },
//       { id: 2, title: 'Buy', content: 'Erect' },
//       { id: 3, title: 'Hi again', content: 'Erect-React' }
//     ]
//   })

//   const clickHandler = () => {
//     // console.log(counter);
//     // counter++
//     // setCounter(counter + 1)//+ addValue)
//     // addCounter(addValue + 2)
//     setState({
//       ...state,
//       counter: state.counter + 1
//     })
//   }
//   console.log('parent');
//   const toogleHandler = () => {
//     // setIsHeaderVisible(!isheaderVisible)
//     setState({
//       ...state,
//       isheaderVisible: !state.isheaderVisible
//     })
//   }

//   const changeSmthInTodo = () => {
//     const newArr = [...state.todos]

//     newArr[0] = Math.random()
//     // // setTodos([...todos])
//     // setTodos(newArr)
//     setState({
//       ...state,
//       todos: newArr
//     })
//   }

//   return (
//     <div className='App'>

//       {state.isheaderVisible && <Header counter={state.counter} />}
//       {/* <h2> {state.counter}</h2> */}
//       <button onClick={clickHandler}>inc</button>
//       <button onClick={toogleHandler}>toogle header</button>
//       <button onClick={changeSmthInTodo}>change smth in todo</button>

//       {/* <div>{state.todos[0]}</div>
//       <div>{state.todos[1]}</div> */}

//       <Template todos={state.todos} />



//     </div>
//   );
// }

// export default App;