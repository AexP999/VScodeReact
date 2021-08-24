import React, { useState } from 'react';
import './App.css';
import { Loader } from './Components/Loader/Loader.jsx';
import { Tables } from './Components/Tables/Tables.jsx';
import { Header } from './Components/Header/Header';

function App () {
  const [ data, setData ] = useState([]);  // Стейт для полученных с фетч данных
  const [ isLoading, setIsloading ] = useState(false); // Стейт для значка загрузки

  const fetchUrl = async (props) => {  // Фэтч. Пропсы с Header
    setIsloading(true);
    const response = await fetch(props);
    const data = await response.json();

    setData(data);
    setIsloading(false);
  };

  console.log('render');
  return (
    <div className='App'>
      <Header fetchUrl={ fetchUrl } />    {/* Получение данных с API комп Header */ }
      { isLoading ? <Loader /> :
        (data.length !== 0 ? <Tables data={ data } /> : null)  // Основной компонент Header 
      }
    </div>
  );
};
export default App;