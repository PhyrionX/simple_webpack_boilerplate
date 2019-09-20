import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function Index() {
  return <h2>Home</h2>;
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
  return <h2>Users</h2>;
}


export const App = props => {


  return (
      <Router>
        <div>
          <nav>
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
          </nav>
  
          <Route path="/" exact component={Index} />
          <Route path="/counter/" component={Counter} />
          <Route path="/users/" component={Users} />
        </div>
      </Router>
  )
}