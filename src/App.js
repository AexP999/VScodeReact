import React, { useState } from 'react';
import './App.css';
import List from './List'

function App(props) {
  const [visibleList, setVisibleList] = useState(true);
  const toggleVisibleList = () => {
    setVisibleList(visible => !visible)
  }
  return (

    <div className='App'>
      {visibleList && <List />}
      <button onClick={toggleVisibleList}>Показать / Скрыть</button>
    </div>
  );
}
export default App;


