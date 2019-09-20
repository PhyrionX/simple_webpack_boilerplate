import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux'

export const App = props => {
  const counter = useSelector(state => state.test.counter)
  const dispatch = useDispatch()

  return (
    <div>
      Hello React!! { counter }
      <button onClick={ () => dispatch({ type: 'increment-counter'}) }>Increment</button>
      <button onClick={ () => dispatch({ type: 'decrement-counter'}) }>Decrement</button>
    </div>
  )
}