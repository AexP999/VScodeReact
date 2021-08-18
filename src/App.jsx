import React, { useState } from 'react';
import './App.css';
import { Loader } from './Components/Loader/Loader.jsx';
import { Tables } from './Components/Tables/Tables.jsx';
import { Header } from './Components/Header/Header';

function App () {
  const [ data, setData ] = useState([]);
  const [ isLoading, setIsloading ] = useState(false);

  const fetchUrl = async (props) => {
    setIsloading(true);
    const response = await fetch(props);
    const data = await response.json();

    setData(data);
    setIsloading(false);
  };

  console.log('render');
  return (
    <div className='App'>
      <Header fetchUrl={ fetchUrl } />
      { isLoading ? <Loader /> :
        (data.length !== 0 ? <Tables data={ data } /> : null)
      }
    </div>
  );
};
export default App;