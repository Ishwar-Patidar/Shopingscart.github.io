import React, { useState } from 'react'
import './Form.css'
function Form() {

    const [item, setItem] = useState({
        fname: '',
        lname: '',
        email: '',
        mobileNo: '',
        pwd: ''
    });

    const yourInput = (event) => {

        const value = event.target.value;
        const name = event.target.name;

        setItem((preValue) => {

            return{
                ...preValue,
                [name] : value,
            }
        });
    }

    const SubmitForm = (e) => {
        e.preventDefault();
        alert("Form submitted");
        console.log(SubmitForm);
    }
    return (
        <>
            <div className="container">
                <div>
                    <h1>Hello {item.fname} {item.lname} </h1>
                    <p>{item.email}</p>
                    <p>{item.mobileNo}</p>
                </div>

                <div className="row">
                    <form action="" onSubmit={SubmitForm}>

                        <input type="text"
                            placeholder='First Name'
                            name='fname'
                            value={item.fname}
                            onChange={yourInput}
                        />
                        <br />
                        <input type="text"
                            placeholder='Last Name'
                            name='lname'
                            value={item.lname}
                            onChange={yourInput}
                        />
                        <br />
                        <input type="email"
                            placeholder='Your Email'
                            name='email'
                            value={item.email}
                            onChange={yourInput}
                        />
                        <br />
                        <input type="number"
                            placeholder='Mobile Number'
                            name='mobileNo'
                            value={item.mobileNo}
                            onChange={yourInput}
                        />
                        <br />
                        <input type="password"
                            placeholder='create password'
                            name='pwd'
                            value={item.pwd}
                            onChange={yourInput}
                        />
                        <br />
                        <input type="radio"
                            placeholder='create password'
                            name='gender'
                            value={item.gender}
                            onChange={yourInput}
                        />Male
                        <input type="radio"
                            placeholder='create password'
                            name='gender'
                            value={item.gender}
                            onChange={yourInput}
                        />Female
                        <br />
                        <input type="Submit" />
                    </form>
                </div>
            </div>
        </>
    )
}

export default Form