import React from 'react';
import './App.css'

function App(props) {

  const onSubmit = (e) => {
    e.preventDefault();

    console.log(e);
    // ==== типа два способа, чтобы вытащить данные ===
    // 1
    const {
      target: [
        { value: firstname },
        { value: lastname },
        { value: email },
        { value: age },
        { value: pass }] } = e;
    console.log(firstname, lastname, email);
    // alert(
    //   JSON.stringify({
    //     firstname,
    //     lastname,
    //     email,
    //     age,
    //     pass
    //   })
    // )
  }



  return (
    <div className='App'>
      <h3>input</h3>
      {/* <input type="text" placeholder='hello' defaultValue='some init value' /> */}
      <form onSubmit={onSubmit}>

        <input type="text" placeholder='enter your first name' defaultValue='Al' />

        <br />
        <input type="text" placeholder='enter your first last name' defaultValue='Prus' />

        <br />
        <input type="email" placeholder='enter your first email' defaultValue='Ala@gmail.com' />

        <br />
        <input type="number" placeholder='enter your first age' defaultValue='12' />

        <br />
        <input type="password" placeholder='enter your first pass' defaultValue='afs^8HVB2' />
        <br />

        <button type='submit' >Submit</button>

      </form>
    </div>
  );
}

export default App;