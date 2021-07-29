import React, { useEffect, useState } from 'react';
import './App.css';

const Buttons = ({ urlArr, getAnyJS }) => {

   return (
      <div className='butn'>
         { urlArr.map((el, index) => {
            return (<button
               className='btn1'
               // style={ { background:} }
               key={ el.name }
               onClick={ () => getAnyJS(el.name) }>{ el.name }</button>);
         }) }
      </div>
   );
};

const Posts = ({ fetchedData }) => {
   return (
      <div >
         <h2>Posts</h2>
         {
            <ul >
               { !!fetchedData[ POSTS ].length && fetchedData[ POSTS ].map((item) => {
                  return (
                     < li className='cont' key={ item.id }>
                        <p>userId: { item.userId }</p>
                        <p>id: { item.id }</p>
                        <p>title: { item.title }</p>
                        <p>body: { item.body }</p>
                     </li>
                  );
               }) }
            </ul>
         }
      </div>
   );
};
const Albums = ({ fetchedData }) => {
   return (
      <div>
         <h2>Albums</h2>
         {
            <ul>
               { !!fetchedData[ ALBUMS ].length && fetchedData[ ALBUMS ].map((item) => {
                  return (
                     < li className='cont' key={ item.id }>
                        <p>userId: { item.userId }</p>
                        <p>id: { item.id }</p>
                        <p>title: { item.title }</p>
                     </li>
                  );
               }) }
            </ul>
         }
      </div>
   );
};
const Photos = ({ fetchedData }) => {
   return (
      <div>
         <h2>Photos</h2>
         {
            <ul>
               { !!fetchedData[ PHOTOS ].length && fetchedData[ PHOTOS ].map((item) => {
                  return (
                     < li className='cont' key={ item.id }>
                        <p>albumId: { item.albumId }</p>
                        <p>id: { item.id }</p>
                        <p>title: { item.title }</p>
                        <p>url: { item.url }</p>
                        <p>thumbnailUrl: { item.thumbnailUrl }</p>
                     </li>
                  );
               }) }
            </ul>
         }
      </div>
   );
};
const Comments = ({ fetchedData }) => {
   return (
      <div>
         <h2>Comments</h2>
         {
            <ul>
               { !!fetchedData[ COMMENTS ].length && fetchedData[ COMMENTS ].map((item) => {
                  return (
                     < li className='cont' key={ item.id }>
                        <p>postId: { item.postId }</p>
                        <p>id: { item.id }</p>
                        <p>name: { item.name }</p>
                        <p>email: { item.email }</p>
                        <p>body: { item.body }</p>
                     </li>
                  );
               }) }
            </ul>
         }
      </div>
   );
};
const Todos = ({ fetchedData }) => {
   // fetchedData[ 0 ].completed === 'undefined' ? console.log('не виводити') : console.log('comp2', fetchedData[ 0 ].completed);
   console.log('comp', fetchedData[ TODOS ].completed);
   return (
      <div>
         <h2>Todos</h2>
         {
            <ul>
               { !!fetchedData[ TODOS ].length && fetchedData[ TODOS ].map((item) => {
                  return (
                     < li className='cont' key={ item.id }>
                        <p>userId: { item.userId }</p>
                        <p>id: { item.id }</p>
                        <p>title: { item.title }</p>
                        <p>completed: { String(item.completed) }</p>
                     </li>
                  );
               }) }
            </ul>
         }
      </div>
   );
};
const Users = ({ fetchedData }) => {
   return (
      <div>
         <h2>Users</h2>
         {
            <ul>
               { !!fetchedData[ USERS ].length && fetchedData[ USERS ].map((item) => {
                  return (
                     < li className='cont' key={ item.id }>
                        <p>id: { item.id }</p>
                        <p>name: { item.name }</p>
                        <p>username: { item.username }</p>
                        <p>email: { item.email }</p>
                        <p>phone: { item.phone }</p>
                        <p>website: { item.website }</p>
                     </li>
                  );
               }) }
            </ul>
         }
      </div>
   );
};
const { POSTS, ALBUMS, PHOTOS, COMMENTS, TODOS, USERS } = {
   POSTS: 'posts',
   ALBUMS: 'albums',
   PHOTOS: 'photos',
   COMMENTS: 'comments',
   TODOS: 'todos',
   USERS: 'users',
};

const Components = {
   [ POSTS ]: Posts,
   [ ALBUMS ]: Albums,
   [ PHOTOS ]: Photos,
   [ COMMENTS ]: Comments,
   [ TODOS ]: Todos,
   [ USERS ]: Users,
};


const jSonUrl = (item) => `https://jsonplaceholder.typicode.com/${ item }`;

const App = () => {
   const urlArr = [
      { name: POSTS },
      { name: ALBUMS },
      { name: PHOTOS },
      { name: COMMENTS },
      { name: TODOS },
      { name: USERS },
   ];

   const [ fetchedData, setfetchedData ] = useState({
      [ POSTS ]: [],
      [ ALBUMS ]: [],
      [ PHOTOS ]: [],
      [ COMMENTS ]: [],
      [ TODOS ]: [],
      [ USERS ]: [],
   });
   const [ usedElement, setusedElement ] = useState('posts');
   const [ isLoading, setIsLoading ] = useState(false);


   useEffect(() => {

      !fetchedData[ usedElement ].length && fetchData();
   }, [ usedElement ]);

   // fetchData я би обвернув у useCallback, щоб порішати цей ворніг
   // "React Hook useEffect has a missing dependency: 'fetchData'"
   // але вам ще його не показували
   const fetchData = async () => {
      setIsLoading(true);
      const data = await (await fetch(jSonUrl(usedElement))).json();
      console.log('data', data);
      setfetchedData({ ...fetchedData, [ usedElement ]: data });
      console.log(fetchedData, usedElement);
      setIsLoading(false);
   };

   const getAnyJS = (usedName) => {
      setusedElement(usedName);
      console.log('usedName', usedName);
   };

   const RenderComponet = Components[ usedElement ];

   return (
      <div className='App'>
         <Buttons urlArr={ urlArr } getAnyJS={ getAnyJS } />
         { isLoading && <h3>Loading DATA...</h3> }
         { !isLoading && <RenderComponet fetchedData={ fetchedData } /> }
      </div>
   );
};


export default App;
