import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { HashRouter as Router, Route, Link } from "react-router-dom";
import { Header } from '../components/header'

function Index() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

  useEffect(() => {
    console.log('render!')
  }, [])

  return (
    <div>
      <h2>Count {count}</h2>
      <button onClick={ () => setCount(count + 1) }>Increment</button>
      <button onClick={ () => setCount(count - 1) }>Decrement</button>
    </div>
  );
}

const Counter = props => {
  const counter = useSelector(state => state.test.counter)
  const dispatch = useDispatch()

  return (
  <div>
    Hello React!! { counter }
    <button onClick={ () => dispatch({ type: 'increment-counter'}) }>Increment</button>
    <button onClick={ () => dispatch({ type: 'decrement-counter'}) }>Decrement</button>
  </div>);
}

function Users() {
  return (
    <form method="post"action="http://localhost:8080/auth/twitter">
      bre<br />
      bre<br />
      bre<br />
      bre<br />
      bre<br />
      bre<br />
      bre<br />
      bre<br />
      bre<br />
      bre<br />
      bre<br />
      <button type="submit" className="btn btn-primary pull-right">Login with Twitter</button>
    </form>);
}


export const App = props => {


  return (
      <Router>
        <React.Fragment>
          {/* <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/counter/">About</Link>
              </li>
              <li>
                <Link to="/users/">Users</Link>
              </li>
            </ul>
          </nav> */}

          <Header />
          <div className="main">
            <Route path="/" exact component={Index} />
            <Route path="/counter/" component={Counter} />
            <Route path="/users/" component={Users} />        
          </div>
        </React.Fragment>
      </Router>
  )
}