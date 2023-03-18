import React from 'react'
import './Redux.css'
import { useSelector, useDispatch } from 'react-redux';
import { incNumber, decNumber } from "./actions/index";

const Redux = () => {
const myState = useSelector((state) => state.changeTheNumber );
const dispatch = useDispatch();

  return (
   <>

   <div className='Container p-4'>

   <h1>Increment/Decrement Counter</h1>
   <h4>Using React and Redux</h4>

   <div>
    <a title='Decrement' onClick={()=>dispatch(decNumber(5))}> <span>➖</span></a>
    <input className='text-center' name='quantity' type="text" value={myState}/>
    <a title='Increment' onClick={()=>dispatch(incNumber(5))}> <span>➕</span></a>
   </div>
   
   </div>
   </>
  )
}

export default Redux;