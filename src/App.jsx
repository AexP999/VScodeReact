import React, { useEffect, useState } from 'react';
import './App.css'

const Buttons = ({ urlArr, getAnyJS }) => {
  return (
    <div className='butn'>
      {urlArr.map((el, index) => {
        return (<button key={index} onClick={() => getAnyJS(el.name)}>{el.name}</button>)
      })}
    </div>
  )
}

const Posts = ({ fetchedData }) => {
  return (
    <div>
      {
        <ul>
          {!!fetchedData.length && fetchedData.map((item) => {
            return (
              < li key={item.id}>
                <p>userId: {item.userId}</p>
                <p>id: {item.id}</p>
                <p>title: {item.title}</p>
                <p>body: {item.body}</p>
              </li>
            )
          })}
        </ul>
      }
    </div>
  )
}
const Albums = ({ fetchedData }) => {
  return (
    <div>
      {
        <ul>
          {!!fetchedData.length && fetchedData.map((item) => {
            return (
              < li key={item.id}>
                <p>userId: {item.userId}</p>
                <p>id: {item.id}</p>
                <p>title: {item.title}</p>
              </li>
            )
          })}
        </ul>
      }
    </div>
  )
}
const Photos = ({ fetchedData }) => {
  return (
    <div>
      {
        <ul>
          {!!fetchedData.length && fetchedData.map((item) => {
            return (
              < li key={item.id}>
                <p>albumId: {item.albumId}</p>
                <p>id: {item.id}</p>
                <p>title: {item.title}</p>
                <p>url: {item.url}</p>
                <p>thumbnailUrl: {item.thumbnailUrl}</p>
              </li>
            )
          })}
        </ul>
      }
    </div>
  )
}
const Comments = ({ fetchedData }) => {
  return (
    <div>
      {
        <ul>
          {!!fetchedData.length && fetchedData.map((item) => {
            return (
              < li key={item.id}>
                <p>postId: {item.postId}</p>
                <p>id: {item.id}</p>
                <p>name: {item.name}</p>
                <p>email: {item.email}</p>
                <p>body: {item.body}</p>
              </li>
            )
          })}
        </ul>
      }
    </div>
  )
}
const Todos = ({ fetchedData }) => {
  fetchedData[0].completed == 'undefined' ? console.log('не виводити') : console.log('comp2', fetchedData[0].completed);
  console.log('comp', fetchedData[0].completed)
  return (
    <div>
      {
        <ul>
          {!!fetchedData.length && fetchedData.map((item) => {
            return (
              < li key={item.id}>
                <p>userId: {item.userId}</p>
                <p>id: {item.id}</p>
                <p>title: {item.title}</p>
                <p>completed: {String(item.completed)}</p>
              </li>
            )
          })}
        </ul>
      }
    </div>
  )
}
const Users = ({ fetchedData }) => {
  return (
    <div>
      {
        <ul>
          {!!fetchedData.length && fetchedData.map((item) => {
            return (
              < li key={item.id}>
                <p>id: {item.id}</p>
                <p>name: {item.name}</p>
                <p>username: {item.username}</p>
                <p>email: {item.email}</p>
                <p>phone: {item.phone}</p>
                <p>website: {item.website}</p>
              </li>
            )
          })}
        </ul>
      }
    </div>
  )
}
const Components = {
  posts: Posts,
  albums: Albums,
  photos: Photos,
  comments: Comments,
  todos: Todos,
  users: Users,
}

const jSonUrl = 'https://jsonplaceholder.typicode.com/';

const App = () => {
  const urlArr = [
    { name: 'posts' },
    { name: 'albums' },
    { name: 'photos' },
    { name: 'comments' },
    { name: 'todos' },
    { name: 'users' },
  ]

  const [fetchedData, setfetchedData] = useState([]);
  const [usedElement, setusedElement] = useState('posts');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchData();
  }, [usedElement]);

  // fetchData я би обвернув у useCallback, щоб порішати цей ворніг
  // "React Hook useEffect has a missing dependency: 'fetchData'"
  // але вам ще його не показували
  const fetchData = async () => {
    setIsLoading(true);
    const response = await fetch(`${jSonUrl}${usedElement}`);
    const data = await response.json();
    setfetchedData(data);
    setIsLoading(false);
  }

  const getAnyJS = (usedName) => {
    console.log('usedName', usedName);
    setusedElement(usedName)
  }

  const RenderComponet = Components[usedElement]

  return (
    <div className='App'>
      <Buttons urlArr={urlArr} getAnyJS={getAnyJS} />
      {isLoading && <h3>Loading DATA...</h3>}
      {!isLoading && <RenderComponet fetchedData={fetchedData} />}
    </div>
  )
}


export default App;
