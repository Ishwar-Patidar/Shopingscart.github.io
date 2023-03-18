import React from 'react'
import { useContext } from 'react'
import { FirstName, LastName } from './ComponantA'
function ComponantC() {

    const fname = useContext(FirstName)
    const lname = useContext(LastName)
    return (
        <>
            <h1> My Full Name is {fname} {lname} </h1>

        </>
    )
}

export default ComponantC