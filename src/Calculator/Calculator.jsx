import React, { useState } from 'react'

import './Calc.css'
function Calculator() {

    const [data, setData] = useState("");

    const ClickBtn = ((event) => {
        const value = data.concat(event.target.name);
        setData(value);
    });

    const Clearbtn = (() => {
        setData("")
    });

    const Calculate = (() => {
        setData(Number(eval(data).toString()).toFixed(2))
    });

    const Clear = (() => {
        const value = data.slice(0, -1);
        setData(value);
    });

    return (
        <>
            <div className=" container maindiv d-flex justify-content-center">
                <div className="row">
                    <div className=" second_div">
                        <h2 className='text-center'> Calculator </h2>
                        <div className="display">
                            <form action="">

                                <input type="text" value={data} placeholder="0" />
                            </form>
                        </div>
                        <div className="keys">
                            <div > <button className=" grid-item" name='1' onClick={ClickBtn}> 1 </button></div>
                            <div > <button className=" grid-item" name='2' onClick={ClickBtn} > 2</button></div>
                            <div > <button className=" grid-item" name='3' onClick={ClickBtn} > 3</button></div>
                            <div > <button className=" grid-item" name='+' onClick={ClickBtn} > +</button></div>
                            <div > <button className=" grid-item" name='4' onClick={ClickBtn} > 4</button></div>
                            <div > <button className=" grid-item" name='5' onClick={ClickBtn} > 5</button></div>
                            <div > <button className=" grid-item" name='6' onClick={ClickBtn} > 6</button></div>
                            <div > <button className=" grid-item" name='-' onClick={ClickBtn} > -</button></div>
                            <div > <button className=" grid-item" name='7' onClick={ClickBtn} > 7</button></div>
                            <div > <button className=" grid-item" name='8' onClick={ClickBtn} > 8</button></div>
                            <div > <button className=" grid-item" name='9' onClick={ClickBtn} > 9</button></div>
                            <div > <button className=" grid-item" name='*' onClick={ClickBtn} > *</button></div>
                            <div > <button className=" grid-item" onClick={Clearbtn} >AC</button></div>
                            <div > <button className=" grid-item" name='0' onClick={ClickBtn} > 0</button></div>
                            <div > <button className=" grid-item" name='.' onClick={ClickBtn} > .</button></div>
                            <div > <button className=" grid-item" name='/' onClick={ClickBtn} > /</button></div>


                        </div>
                        <div className='Endkeys'>
                            <div > <button className=" grid-item" name='=' onClick={Calculate} > =</button></div>
                            <div > <button className=" grid-item" name='C' onClick={Clear} > C </button></div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Calculator