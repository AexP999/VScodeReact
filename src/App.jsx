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

const Posts = ({ fetchedData, isLoading }) => {
  return (
    <div>
      { isLoading ? <h3>Loadind DATA...</h3> :
        <ul >
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
const Albums = ({ fetchedData, isLoading }) => {
  return (
    <div>
      { isLoading ? <h3>Loadind DATA...</h3> :
        <ul >
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
const Photos = ({ fetchedData, isLoading }) => {
  return (
    <div>
      { isLoading ? <h3>Loadind DATA...</h3> :
        <ul >
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
const Comments = ({ fetchedData, isLoading }) => {
  return (
    <div>
      { isLoading ? <h3>Loadind DATA...</h3> :
        <ul >
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
const Todos = ({ fetchedData, isLoading }) => {
  return (
    <div>
      { isLoading ? <h3>Loadind DATA...</h3> :
        <ul >
          {!!fetchedData.length && fetchedData.map((item) => {
            return (
              < li key={item.id}>
                <p>userId: {item.userId}</p>
                <p>id: {item.id}</p>
                <p>title: {item.title}</p>
                <p>completed: {item.completed}</p>
              </li>
            )
          })}
        </ul>
      }
    </div>
  )
}
const Users = ({ fetchedData, isLoading }) => {
  return (
    <div>
      { isLoading ? <h3>Loadind DATA...</h3> :
        <ul >
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
  const [usedElement, setusedElement] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    usedElement && fetchData();
  }, [usedElement]);

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

  return (
    <div className='App'>
      <Buttons urlArr={urlArr} getAnyJS={getAnyJS} />

      {usedElement === urlArr[0].name && <Posts fetchedData={fetchedData} isLoading={isLoading} />}
      {usedElement === urlArr[1].name && <Albums fetchedData={fetchedData} isLoading={isLoading} />}
      {usedElement === urlArr[2].name && <Photos fetchedData={fetchedData} isLoading={isLoading} />}
      {usedElement === urlArr[3].name && <Comments fetchedData={fetchedData} isLoading={isLoading} />}
      {usedElement === urlArr[4].name && <Todos fetchedData={fetchedData} isLoading={isLoading} />}
      {usedElement === urlArr[5].name && <Users fetchedData={fetchedData} isLoading={isLoading} />}
    </div>

  )
}


export default App;