import React from 'react';
import './App.css'
import {Header, Products} from './components'

function App() {

   console.log('render');
   return (
      <div className='App'>
         <Header />
         <Products />
      </div>
   );
}

export default App