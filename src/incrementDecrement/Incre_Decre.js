import React from 'react'
import { useState } from 'react'

function Incre_Decre() {

    const [item, setItem] = useState (0);


    const removeItems = (() => {
        setItem (item - 1)
    })

    const addItems = (() => {
        setItem( item + 1) 
    })

    return (
        <>
            <div>
                <button onClick={removeItems}>-</button>
                <input type=" text " placeholder='Add Items No.' value={item} />
                <button onClick={addItems}>+</button>
            </div>
        </>
    )
}

export default Incre_Decre ; 