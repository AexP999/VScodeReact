import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useParams,
  useRouteMatch,
  useLocation,
  useHistory
} from "react-router-dom";

// export default function App() {
//   return (
// <Router>
{/* <div className='App'> */ }
{/* <nav> */ }
{/* <ul> */ }
{/* <li>
              <Link to="/">Home</Link>
            </li> */}
{/* <li>
              <Link to="/about">About</Link> */}
{/* to - пропс, на который ссылается меняет url не перегружает страницу  */ }
{/* </li> */ }
{/* <li>
              <Link to="/users">Users</Link>
            </li> */}
{/* тест, чтобы посмотреть */ }
{/* <li>
              <Link to="/test-route">Test-route</Link>
            </li> */}
{/* </ul> */ }
{/* </nav> */ }

{/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
{/* <Switch>
          <Route path="/" exact >
            <Home />
          </Route>
          <Route path="/about"> {/* підхопить урл і щось змінити, якщо /about, малюй <About />  */}
{/* <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
        </Switch> * /} */}

{/* можно так писать */ }
{/* <Switch>
          <Route path="/" component={Home} exact />
          {/* и так */}
{/* <Route path="/about">
            {About}
          </Route> */}
{/* и так */ }
{/* <Route path="/users" render={(args) => {
            console.log('args', args);
            return <Users />
          }} */}
{/* /> */ }
{/* // в консоле получаем аргс три основных проперти history, location, match/ Location инфо про локацию, есть там search и т.д.
            // history дозволяє маніпулювати не через лінк, а програматично, по інтервалу, по нашій кнопке. для єтого есть go. push есть пушит в конец массива новый шлях. replace то же, но меняет. Match - інфо, як ми попали 
          такий метод корисний, когда треба прокидувати пропси для обротки */}
{/* <Route path="/test-route">
            {About}
          </Route> */}
{/* <Route>
            <h2>404 Page not found</h2>
          </Route> */}


{/* если не указан path, то принять все */ }
{/* Если ъотим сделать переадресацию на home при неверном адресе */ }
{/* <Route>
            <Redirect to='/' />
          </Route> */}

{/* ==next=== */ }
export default function App() {
  return (
    <Router>
      <div className='App'>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/posts">Posts</Link>
            </li>

          </ul>
        </nav>

        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/posts" exact>
            <Posts />
          </Route>

          <Route path="/posts/:id">
            <PostDetails />
          </Route>


          {/* <Route path="/posts" component={Posts} /> */}

          <Route>
            <h2>404 Page not found</h2>
          </Route>

        </Switch>
      </div>
    </Router>
  );
}
//якщо треба доступитися до ціх пропсів, пишемо props
function Home(props) {

  return <h2>Home</h2>;
}

function Posts(props) {
  console.log('props', props);
  const [posts, Setposts] = React.useState([]);

  const fetchData = async () => {
    const resp = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await resp.json();
    Setposts(data);
  }

  React.useEffect(() => {
    fetchData();
  }, [])
  return (
    <div>
      <ul>
        {posts.map(el => <Link to={`/posts/${el.id}`}><li>{el.title} - {el.id}</li></Link>)}
      </ul>
    </div>
  )
}
function PostDetails(props) {
  const [post, Setpost] = React.useState([]);
  console.log('props', props);

  const match = useRouteMatch();
  const { id } = useParams();
  const loc = useLocation();
  const history = useHistory();

  console.log('match', match, 'loc', loc);

  const fetchData = async () => {
    const resp = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const data = await resp.json();
    Setpost(data);
  }

  React.useEffect(() => {
    fetchData();
  }, [id])
  return (
    <div>
      <h2>Post details</h2>
      {post && (<><h3>{post.title}</h3><p>id: {post.id}</p> <p>{post.body}</p></>)}

      <button onClick={() => history.push(`/posts/${+id - 1}`)}>prev post</button>
      <button onClick={() => history.push(`/posts/${+id + 1}`)}>next post</button>
    </div>
  )
}

