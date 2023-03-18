// The useEffect Hook allows you to perform side effects in your components.
// Some examples of side effects are: fetching data, directly updating the DOM, and timers.
// useEffect accepts two arguments. The second argument is optional.
// useEffect(<function>, <dependency>)


import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

const UseEffectHook = () => {
    const [count, setCount] = useState(0);
   
    useEffect(() => {     
        setTimeout(() => {
            setCount((count) => count + 1);
          },[1000]);
    }, [])
  return (
    <>
   
    <div>{count}</div>
    <p>The useEffect Hook allows you to perform side effects in your components.
 Some examples of side effects are: fetching data, directly updating the DOM, and timers.
 useEffect accepts two arguments. The second argument is optional.</p>
 </>
  )
}

export default UseEffectHook;