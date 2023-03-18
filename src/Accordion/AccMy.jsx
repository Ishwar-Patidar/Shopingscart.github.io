
import React from 'react'
import { useState } from 'react'
import './ACCcss.css'

function AccMy({ Question, answer }) {

    const [show, setShow] = useState(false);
    return (
        <>
            <div className='Quediv'>
                <span className='icon' onClick={() => setShow(!show)}>  {show ? "➖" : "➕"} </span>
                <span className='question'>{Question}</span>
            </div>

            {
                show && <p className='answer'> {answer} </p>
            }

        </>
    )
}

export default AccMy