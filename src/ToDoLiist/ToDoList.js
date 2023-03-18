import React from 'react'
import { useState } from 'react'
import './ToDoList.css'


function ToDoList() {

const [inputList, setInputList] = useState("");
const [items, setItems] = useState([]);

const itemEvent = (event)=>{
  setInputList(event.target.value)
}

const listOfItems = ()=>{
  setItems((oldItems) => {
    return [...oldItems, inputList]
  });
  setInputList("");
};
  return (
    <div className='Main_div'>
        <div className='center_div'>
            <br/>
            <h1>To Do List</h1>
            <br/>
            <input type="text" placeholder='Add a Item' value={inputList}  onChange={itemEvent}/>
            <button onClick={listOfItems}> + </button>
            <br/>
            <ol>
                {/* <li>{inputList}</li> */}

           { items.map( (itemsval)=>{
              return <li>{itemsval}</li>
            })}

            </ol>
        </div>
    </div>
  )
}

export default ToDoList