

// ДЗ:

// 1 відмалювати список карточок базуючись на якомусь створеному вами масиві створити окрему кнопку, яка буде видаляти поточний перший елемент(або останній)  якщо у нас масив з 3 елементів і ми клікнули на кнопку 3 рази, то на екрані жодна карточка не має відмалюватись(кнопки повернення до початкового стану не треба)

// 2 те саме, тільки з кнопкою реверт(повернутись до стану, де у нас видно 3 елемнети, як на початку)

// 3   задача з зірочкою) кожна карточка з завдання вище має мати кнопку, по кліку на яку, ми видаляємо зі списку саме її + реверт кнопка, щоб вернути все назад(ця кнопка одна дня всіх карточок, клікнули по ній і всі каркти вернулись назазд)(згадування функції фільтр в лекції було не просто так)

// 4   написати тогл компоненту, яка буде ховати або показувати елемент приклад з візуалкою тут https://material-ui.com/components/switches/#customized-switches


// // ====== 1  - 2 =====

import React, { useState } from 'react';
import './App.css';

const Card = ({ card }) => {

  return (
    card.map(card => (
      <div className='card'>
        <h4>{card.nameOfGoods}</h4>
        <p>Size: {card.size}</p>
        <p>Price: {card.price} hrn</p>
        {card.stock === true ? <p>Availability: in stock</p> : <p>Availability: out of stock</p>}
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
    {
      id: 5,
      nameOfGoods: 'Cast Iron Butterfly Valve',
      size: 'DN125',
      price: 570,
      stock: true
    },
    {
      id: 6,
      nameOfGoods: 'Cast Iron Butterfly Valve',
      size: 'DN150',
      price: 870,
      stock: true
    },
  ]);

  const [initCardArr, setInitCardArr] = useState([...cardArr]);

  const delCardAtBegining = () => {
    const newCardArr = [...cardArr]
    newCardArr.shift()
    setCardArr(newCardArr)
  }

  const delCardAtEnd = () => {
    const newCardArr = [...cardArr]
    newCardArr.pop()
    setCardArr(newCardArr)
  }

  const revert = () => {
    const newCardArr = [...initCardArr]
    setCardArr(newCardArr)
  }

  return (
    <div className='App'>
      <div className='cardCont'>
        <Card card={cardArr} />
      </div>
      <button onClick={delCardAtBegining}> Delete Card at the begining</button>
      <button onClick={delCardAtEnd}> Delete Card at the end</button>
      <button onClick={revert}> Revert</button>
    </div>
  );
}

export default App;



// // ======== 3 ======

// import React, { useState } from 'react';
// import './App.css';

// const Card = ({ cardArr }) => {

//   const [removeState, setRemoveState] = useState([...cardArr]);
//   const [initcardArr1, setInitCardArr1] = useState([...cardArr])
//   const removeEachCard = (id) => {
//     console.log('id', id);
//     console.log('removeState', removeState);
//     setRemoveState(removeState.filter((elem) => elem.id !== id))
//   }

//   const revert = () => setRemoveState([...initcardArr1])

//   return (

//     <div>
//       <div className='cont2'>
//         {removeState.map(removeState => (
//           <div className='card'>
//             <h2>{removeState.nameOfGoods}</h2>
//             <p>Size: {removeState.size}</p>
//             <p>Price: {removeState.price} hrn</p>
//             {removeState.stock == true ? <p>Availability: in stock</p> : <p>Availability: out of stock</p>}
//             <button onClick={() => removeEachCard(removeState.id)}>Remove</button>
//           </div >))}
//       </div>
//       <button onClick={revert}> Revert</button>
//     </div>
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

//   const revert = () => {
//     console.log('cardArr', cardArr);
//     console.log('initCardArr', initCardArr);
//     const newCardArr = [...initCardArr]
//     setCardArr(newCardArr)
//   }

//   return (
//     <div className='App'>
//       <div>
//         {console.log('ren cardArr', cardArr)}
//         <Card cardArr={cardArr} />
//       </div>
//     </div>
//   );
// }

// export default App;



// // ================== 4  =====================
// // 4   написати тогл компоненту, яка буде ховати або показувати елемент приклад з візуалкою тут https://material-ui.com/components/switches/#customized-switches



// import './App.css';
// import Toggle from './Toggle'

// import React from 'react';

// function App(props) {
//   return (
//     <div>
//       <Toggle />
//     </div>
//   );
// }

// export default App;


