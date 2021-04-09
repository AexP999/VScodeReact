import React, {useState} from 'react';
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
  'photos'
]
function App() {
  const [enteredData, setEnteredData] = useState({
    endPoint: '',
    id: '',
  })
  const [updatedataJson, setupdatedataJson] = useState([]);
  const [validateIdMessage, setvalidateIdMessage] = useState('');

  const handleSubmit = () => {
    if (validateId()) fetchData();
  }

  const validateId = () => {
    let maxId = 0;
    setvalidateIdMessage('');
    if (!VALID_VALUES.includes(enteredData.endPoint)) {
      alert('введите posts, comments, albums, users, todos, photos');
      return false;
    }

    switch (enteredData.endPoint) {
      case 'posts':
        maxId = 100;
        break;
      case 'comments':
        maxId = 500;
        break;
      case 'albums':
        maxId = 100;
        break;
      case 'users':
        maxId = 10;
        break;
      case 'todos':
        maxId = 200;
        break;
      case 'photos':
        maxId = 5000;
        break;
      default:
        break;
    }

    if (enteredData.id === '' || enteredData.id >= 1 && enteredData.id <= maxId) {
      return true;
    } else {
      setupdatedataJson([]);
      setvalidateIdMessage(`Please enter number from 1 to ${maxId}`)
      return false;
    }
  }

  const fetchData = async () => {

    const response = await fetch(`${JSP_URL}${enteredData.endPoint}/${enteredData.id}`);
    const data = await response.json();
    setupdatedataJson(data);
  }

  const updateInput = (e) => {
    const {target: {value, name}} = e;
    setEnteredData({...enteredData, [name]: value})
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
        type="number"
        value={enteredData.id}
        onChange={updateInput}
        name='id'
        placeholder='enter JSP id'
      />
      <br />
      <button onClick={handleSubmit}>Press</button>

      {<p>{validateIdMessage}</p>}

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

