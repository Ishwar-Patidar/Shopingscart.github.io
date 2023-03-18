
import React from 'react'
import AccMy from './AccMy'
import { questions } from './AccAPI'
import { useState } from 'react'
import './ACCcss.css'
function Accordian() {

    const [data, setData] = useState(questions);

    return (
        <div className='main_div'>
            {
                data.map((curElem) => {
                    const { id } = curElem;
                    return <AccMy key={id} {...curElem} />
                })
            }


        </div>
    )
}

export default Accordian