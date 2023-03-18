// The useReducer Hook is similar to the useState Hook.
// It allows for custom state logic.
// If you find yourself keeping track of multiple pieces of state that rely on complex logic, useReducer may be useful.

import React from 'react'
import { useReducer } from 'react'

const initialState = 0;
const reducer = (state, action) => {
  if (action.type === "INCREMENT") {
    return state + 1;
  }
  if (action.type === "DECREMENT") {
    if (state !== 0) {
      return state - 1;
    }
    return initialState;
  }

  return state;
}



const Reducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <p><h1>Reducer Defination :-</h1> The useReducer Hook is similar to the useState Hook. It Allows for costom state logic. If you find yourself keeping track of multiple pieces of state that rely on compex logic, useReducer may be useful.</p>

      <div className="container d-flex justify-content-center">
        <h1>Increment And Decrement With Reducer</h1>
      </div>
      <div className="container d-flex justify-content-center">
        <form action=" ">
          <input type="text" placeholder='0' value={state} className=" rounded-pill text-center p-2 m-3" />
        </form>
      </div>
      <div className="container d-flex justify-content-center">
        <button className='rounded-pill btn btn-outline-danger' onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
        <button className='rounded-pill btn btn-outline-primary' onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button>
      </div>

    </>

  )
}

export default Reducer