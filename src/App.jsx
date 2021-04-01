import React from 'react';
import './App.css'

function App(props) {

  const onSubmit = (e) => {
    e.preventDefault();

    console.log('event', e);
    // ==== типа два способа, чтобы вытащить данные ===
    // 1

    const {
      target: [
        { value: firstname },
        { value: lastname },
        { value: email },
        { value: age },
        { value: pass }] } = e;
    //     const {
    //       target: {
    //         elements: { firstname
    // lastname
    // email
    // age
    // pass

    //         }
    //   }
    // }



    console.log(firstname, lastname, email, age, pass);
    alert(
      JSON.stringify({
        firstname,
        lastname,
        email,
        age,
        pass
      }, null, 2)
    )
  }



  return (
    <div className='App'>
      <h3>input</h3>
      {/* <input type="text" placeholder='hello' defaultValue='some init value' /> */}
      <form onSubmit={onSubmit}>

        <input type="text" name='first name' placeholder='enter your first name' defaultValue='Al' />

        <br />
        <input type="text" name='last name' placeholder='enter your last name' defaultValue='Prus' />

        <br />
        <input type="email" name='email' placeholder='enter your email' defaultValue='Ala@gmail.com' />

        <br />
        <input type="number" name='age' placeholder='enter your age' defaultValue='12' />

        <br />
        <input type="password" name='pass' placeholder='enter your pass' defaultValue='afs^8HVB2' />
        <br />

        <button type='submit' >Submit</button>

      </form>
    </div>
  );
}

export default App;