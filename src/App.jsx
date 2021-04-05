import React, { useEffect, useState } from 'react';
import './App.css'

// створти 2 інтупи і кнопку
// перший відповідає за ендпоінт джсон плейсхолдера(перша частина енпоніту)
// другий - за айдішнік

// якщо другого ендпоінту нема - тягнемо весь список

// потрібно зробити валідацію
// на перший інпут - чи ендпоінт існуючий
// на другий - чи це число і чи воно в рамках 1 - 100

// зробити версію на функціональній компоненті
// контрольовану і не контрольовану

// якщо є час - на класовій компоненті теж таке саме написати


const JSP_URL = 'https://jsonplaceholder.typicode.com/';
const VALID_VALUES = [
  'posts',
  'comments',
  'albums',
  'users',
  'todos',
  'phitis'
]

function App() {
  const [enteredData, setEnteredData] = useState({
    endPoint: '',
    id: '',
  })
  const [updatedataJson, setupdatedataJson] = useState([]);
  const [validateIdNumber, setValidateIdNumber] = useState('');

  const handleSubmit = () => {
    if (!VALID_VALUES.includes(enteredData.endPoint)) return;

    if (!Number(enteredData.id) && enteredData.id !== '') return;

    if (enteredData.endPoint === 'posts') {
      console.log('call validateId()');
      validateId()
    }
    console.log(enteredData.endPoint);
    fetchData();
  }

  const validateId = () => {
    console.log('enteredData.id2', enteredData.id);
    console.log('updatedataJson.length', updatedataJson.length);
    if (enteredData.id >= 1 && enteredData.id <= 100) {
      return
    } else {
      console.log('>100');
      setValidateIdNumber(`Please enter number from 1 to 100`);
    }
  }

  const fetchData = async () => {
    console.log('fetch');
    const response = await fetch(`${JSP_URL}${enteredData.endPoint}/${enteredData.id}`);
    const data = await response.json();
    setupdatedataJson(data);
    console.log('data', data);

  }

  const updateInput = (e) => {
    // debugger
    const { target: { value, name } } = e;

    setEnteredData({ ...enteredData, [name]: value })

  }
  console.log('render');
  return (
    <div className='App'>
      <h4>Hw</h4>
      <input
        type="text"
        value={enteredData.endPoint}
        onChange={updateInput}
        name='endPoint'
        placeholder='enter JSP endpoint'
      />
      <br />
      <input
        type="text"
        value={enteredData.id}
        onChange={updateInput}
        name='id'
        placeholder='enter JSP id'
      />
      <br />
      <button onClick={handleSubmit}>Press</button>

      {<p>{validateIdNumber}</p>}

      <ul>
        {updatedataJson.id ?
          (<li>id: {updatedataJson.id} <br /> name: {updatedataJson.name ?? ' n/a'}<br /> title: {updatedataJson.title ?? ' n/a'}</li>) :
          (!!updatedataJson.length && updatedataJson.map((elem, i) => {
            return (<li key={i}>id: {elem.id} <br /> name: {elem.name ?? ' n/a'} <br /> title: {elem.title ?? ' n/a'}</li>)
          }))}
      </ul>
    </div>
  );
}

export default App;




// function App(props) {

//   const onSubmit = (e) => {
//     e.preventDefault();

//     console.log('event', e);
// ==== типа два способа, чтобы вытащить данные ===

// Это все неконтролируемые инпуты
// 1 === плохой, рльлму что если меняется порядок, то плывут данные ====

//   const {
//     target: [
//       { value: firstname },
//       { value: lastname },
//       { value: email },
//       { value: age },
//       { value: pass }] } = e;

//   console.log(firstname, lastname, email, age, pass);
//   alert(
//     JSON.stringify({
//       firstname,
//       lastname,
//       email,
//       age,
//       pass
//     }, null, 2)
//   )
// }
//  === доступ через name e.target.elements.age до inputs  не зависит от порядка, а привязывается к нейм=====

//   const {
//     target: {
//       elements: {
//         firstName,
//         email,
//         age,
//         lastName,
//         pass,
//       } } } = e;

//   alert(
//     JSON.stringify({
//       firstName: firstName.value,
//       email: email.value,
//       age: age.value,
//       lastName: lastName.value,
//       pass: pass.value
//     }, null, 2))

// }
// ==== 3 использование ref =====
// function App(props) {
//   const firstName = React.useRef(); //для того чтобы в эту конст  заатачити jsx. мостик для этогог. Ставим  ref в jsx
//   const lastName = React.useRef();
//   const email = React.useRef();
//   const password = React.useRef();
//   const age = React.useRef();

//   const onSubmit = (e) => {
//     console.log('firstName', { firstName });
//     // firstName.current.value = ""
//     firstName.current.focus()
//     firstName.current.style.background = 'yellow';
//     e.preventDefault(); // если его убрать, будет при submit обновлять html
//     console.log('event', e);
// используется для изменения оночления стилей
// alert(
//   JSON.stringify({
//     firstName: firstName.current.value,
//     email: email.current.value,
//     age: age.current.value,
//     lastName: lastName.current.value,
//     pass: password.current.value
//   }, null, 2))
//теперь очистим все после ввода
// firstName.current.value = ''
// email.current.value = ''
// age.current.value = ''
// lastName.current.value = ''
// password.current.value = ''
// можно сразу очистить всю формуЮ импользуя form.current.reset(), только надо поставить на form <form ref={form} надо еще створити новий ref form
// }
// ==тепер контрольовані інпути. см ніжче

//   return (
//     <div className='App'>
//       <h3>input</h3>
//       {/* <input type="text" placeholder='hello' defaultValue='some init value' /> */}
//       <form onSubmit={onSubmit}>

//         <input ref={firstName} type="text" name='firstName' placeholder='enter your first name' defaultValue='Al' />
//         <br />
//         <input ref={lastName} type="text" name='lastName' placeholder='enter your last name' defaultValue='Prus' />
//         <br />
//         <input ref={age} type="number" name='age' placeholder='enter your age' defaultValue='12' />
//         <br />
//         <input ref={email} type="email" name='email' placeholder='enter your email' defaultValue='Ala@gmail.com' />
//         <br />
//         <input ref={password} type="password" name='pass' placeholder='enter your pass' defaultValue='afs^8HVB2' />
//         <br />

//         <button type='submit' >Submit</button>
//         {/* submit атрибут для формы. и указываем тип submit */}
//       </form>
//     </div>
//   );
// }

// function App(props) {

// const [firstName, setFirstName] = React.useState('');
// const [lastName, setLastName] = React.useState('');
// const [age, setAge] = React.useState('');
// const [email, setEmail] = React.useState('');
// const [pass, setPass] = React.useState('');

// ..так можна зробити краще


// const handleSubmit = () => {
//   alert(JSON.stringify({ firstName, lastName, age, email, pass }, null, 2))
// }



// проще. 99% будет использоваться контрольовані цім.

//   return (
//     <div className='App'>
//       <h3>input</h3>


//       <input value={firstName} onChange={({ target: { value } }) => setFirstName(value)} type="text" name='firstName' placeholder='enter your first name' defaultValue='Al' />
//       <br />
//       <input value={lastName} onChange={({ target: { value } }) => setLastName(value)} type="text" name='lastName' placeholder='enter your last name' defaultValue='Prus' />
//       <br />
//       <input value={age} onChange={({ target: { value } }) => setAge(value)} type="number" name='age' placeholder='enter your age' defaultValue='12' />
//       <br />
//       <input value={email} onChange={({ target: { value } }) => setEmail(value)} type="email" name='email' placeholder='enter your email' defaultValue='Ala@gmail.com' />
//       <br />
//       <input value={pass} onChange={({ target: { value } }) => setPass(value)} type="password" name='pass' placeholder='enter your pass' defaultValue='afs^8HVB2' />
//       <br />

//       <button onClick={handleSubmit}>Submit</button>


//     </div>
//   );
// }



// ====// ..так можна зробити краще

// function App() {

//   const [userData, setUserData] = React.useState({
//     firstName: '',
//     lastName: '',
//     age: '',
//     email: '',
//     pass: '',

//   })

//   const handleSubmit = () => {
//     alert(JSON.stringify(userData, null, 2))
//   }

//   const updateUserData = (field, value) => {
//     setUserData({ ...userData, [field]: value })
//   }
//   // вместо setFirstName setLastName и т.д. в инпутах сатвим updateUserData
//   return (
//     <div className='App'>
//       <h3>input</h3>


//       <input value={userData.firstName} onChange={({ target: { value } }) => updateUserData('firstName', value)} type="text" name='firstName' placeholder='enter your first name' defaultValue='Al' />
//       <br />
//       <input value={userData.lastName} onChange={({ target: { value } }) => updateUserData('lastName', value)} type="text" name='lastName' placeholder='enter your last name' defaultValue='Prus' />
//       <br />
//       <input value={userData.age} onChange={({ target: { value } }) => updateUserData('age', value)} type="number" name='age' placeholder='enter your age' defaultValue='12' />
//       <br />
//       <input value={userData.email} onChange={({ target: { value } }) => updateUserData('email', value)} type="email" name='email' placeholder='enter your email' defaultValue='Ala@gmail.com' />
//       <br />
//       <input value={userData.pass} onChange={({ target: { value } }) => updateUserData('pass', value)} type="password" name='pass' placeholder='enter your pass' defaultValue='afs^8HVB2' />
//       <br />

//       <button onClick={handleSubmit}>Submit</button>


//     </div>
//   );
// }


// ====можем еще больше скоротити код

// function App() {

//   const [userData, setUserData] = React.useState({
//     firstName: 'Al',
//     lastName: 'Pr',
//     age: '32',
//     email: 'asdad@asd',
//     pass: 'sq3rdf3',

//   })

//   const handleSubmit = () => {
//     alert(JSON.stringify(userData, null, 2))
//     setUserData({
//       firstName: '',
//       lastName: '',
//       age: '',
//       email: '',
//       pass: '',
//     })
//     // сброс данных после сабмита
//   }
//   //теперь сюда прилетает ивент
//   const updateUserData = (e) => {
//     const { target: { value, name } } = e;

//     if (name === 'age' && Number(value) > 99) {
//       return;
//     } ///валидация проверка на возраст

//     setUserData({ ...userData, [name]: value })
//   }
  // вместо setFirstName setLastName и т.д. в инпутах сатвим updateUserData
//   return (
//     <div className='App'>
//       <h3>input</h3>


//       <input
//         value={userData.firstName}
//         onChange={updateUserData}
//         type="text"
//         name='firstName'
//         placeholder='enter your first name'
//       />
//       <br />
//       <input
//         value={userData.lastName}
//         onChange={updateUserData}
//         type="text"
//         name='lastName'
//         placeholder='enter your last name'
//       />
//       <br />
//       <input
//         value={userData.age}
//         onChange={updateUserData}
//         type="number" name='age'
//         placeholder='enter your age'
//       />
//       <br />
//       <input
//         value={userData.email}
//         onChange={updateUserData}
//         type="email" name='email'
//         placeholder='enter your email'
//       />
//       <br />
//       <input
//         value={userData.pass}
//         onChange={updateUserData}
//         type="password"
//         name='pass'
//         placeholder='enter your pass'
//       />
//       <br />

//       <button onClick={handleSubmit}>Submit</button>


//     </div>
//   );
// }

// вывод, это удобно, но можно использовать с рефами. Например фокус


// export default App;
