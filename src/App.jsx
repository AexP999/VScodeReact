import React, { useState, useEffect } from 'react';
import './App.css';
import { Loader } from './Loader/Loader.jsx';
import { Tables } from './Tables/Tables.jsx';

const SMALLURL = 'http://www.filltext.com/?rows=32&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&lastname=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D';

const LARGEURL = 'http://www.filltext.com/?rows=1000&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&lastname=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D';

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
      <button onClick={ () => fetchUrl(SMALLURL) } className='btn btn-primary btn1'>get small data</button>
      <button onClick={ () => fetchUrl(LARGEURL) } className='btn btn-success btn1'>get large data</button>
      { isLoading ? <Loader /> :
        (data.length !== 0 ? <Tables data={ data } /> : null)
      }
    </div>
  );
};
export default App;