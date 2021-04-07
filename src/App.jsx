import React, { useEffect, useState, Component } from 'react'
import './App.css'
let url = 'https://jsonplaceholder.typicode.com/'

// потрібно створити логіку, яка задовільнить наступні вимоги
// в нас має бути 6 кнопок, які дозволяють нам переключатись між 'табами' (posts, comments, albums, photos, todos, users)
// дефолтно обрана таба- пости
// по кліку на кнопку ми повинні підтягнути відповідний список і зрендерити його через .map
// лише 1 список видимий одночасно
// потрібно створити 6 компонент, які займатимуться рендерінгом списків (отримуватимуть пропсами список)- PostList, CommentsList...

const PostsComponent = ({ props }) => {
  console.log('props', props);
  return (
    <section>
      <div>
        {props.title}
      </div>
    </section>
  )
}

function App() {

  // это упрощенный код - только одна кнопка, нет мар. по нажатию кнопки должен выводиться один элемент posts. я думал, что переда. пропс в компоненту - она должна перерендиваться (так сказано в лекции). фактически вобще ничего не выводится
  const [fetchedData, setFetchedData] = useState([]);


  const fetchEndPoint = async () => {
    const response = await fetch(url + 'posts/1')
    const data = await response.json()
    console.log(data)
    setFetchedData(data);
  }

  return (
    <>
      <button onClick={fetchEndPoint}>Posts are here</button>
      <PostsComponent props={fetchedData} />
    </>
  )
}

export default App