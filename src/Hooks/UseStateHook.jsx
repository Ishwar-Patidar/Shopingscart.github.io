// The React useState Hook allows us to track state in a function component.
// State generally refers to data or properties that need to be tracking in an application.

import React from 'react'
import { useState } from 'react'

const UseStateHook = () => {
    const [data, setData] = useState("Ishwar");
const ChangeColor = () => {
  return  setData("Ishwar Patidar")
}

  return (
    <div className='d-flex justify-content-center'> 
        <h1>{data}</h1>
    <button className='btn btn-danger rounded-pill' onClick={ChangeColor}>Full Name </button>
    </div>
  )
}

export default UseStateHook;