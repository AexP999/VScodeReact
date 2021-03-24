
import React, { Component } from 'react';
import './App.css';
import Card from './Card.js'

// const Header = (props) => {
//   console.log(props);

//   return (
//     <header>
//       <h1>Title</h1>
//       <button>cart</button>
//       {props.children}
//     </header>
//   )
// }



class Header extends Component {
  render() {

    const countItemsInCart = 0;

    return (
      <header>
        <h1>Title {this.props.title('buy')}</h1>
        <button>cart {countItemsInCart}</button>
        {this.props.children}
      </header>
    );
  }
}


function App({ test }) {
  const test1 = () => (
    <h1>!!!</h1>
  )
  const test2 = <h2>!!!222</h2>
  const check = () => {
    if (false) {
    } else {
      return 321
    }
  }
  const condRender = () => 2 > Math.random() * 3 && <h2>H2</h2>
  return (


    /* тернарка работает*/
    < div className="App" >
      {/* { 2 > 3 ? 'hello' : 'world'} */}
      {/* {test1()}
      {test2}
      {check()} */}
      {/* пример как можно сделатьif але так не робить */}
      {/* {(() => {
        if (2 > Math.random() * 10) {
          return 'bigger'
        } else {
          return 'smaller'
        }
      })()} */}
      {/* можно так */}
      {/* { 2 > Math.random() * 10 ? <h2>H2</h2> : null} */}
      {/* а можно и так */}
      {/* { 2 > Math.random() * 3 && <h2>H2</h2>} */}
      {/* а можемо внести в функцию */}
      {condRender()}
      { test('UP')}
      < Header title={test} >
        {/* то, что внутри попадает в props.children */}
        {/* 1233
        test
        qwe */}
        {test('yes')}
      </Header >
      <Card title={777} />
    </div >
  );
}

export default App;
