import React, { useEffect, useState, Component } from 'react'
import './App.css'
let url = 'https://jsonplaceholder.typicode.com/'

// потрібно створити логіку, яка задовільнить наступні вимоги
// в нас має бути 6 кнопок, які дозволяють нам переключатись між 'табами' (posts, comments, albums, photos, todos, users)
// дефолтно обрана таба- пости
// по кліку на кнопку ми повинні підтягнути відповідний список і зрендерити його через .map
// лише 1 список видимий одночасно
// потрібно створити 6 компонент, які займатимуться рендерінгом списків (отримуватимуть пропсами список)- PostList, CommentsList...


function App() {

  // это упрощенный код - только одна кнопка, нет мар. по нажатию кнопки должен выводиться один элемент posts. я думал, что переда. пропс в компоненту - она должна перерендиваться (так сказано в лекции). фактически вобще ничего не выводится

  const PostsComponent = ({ props }) => {
    return (
      <section>
        <div>
          {props.title}
        </div>
      </section>
    )
  }


  const fetchEndPoint = async () => {
    const response = await fetch(url + 'posts/1')
    const data = await response.json()
    console.log(data)
    return (
      <PostsComponent props={data} />
    )
  }

  return (
    <>
      <button onClick={fetchEndPoint}>Posts are here</button>
    </>
  )
}

export default App