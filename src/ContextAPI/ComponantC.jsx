import React from 'react'
import { useContext } from 'react'
import { FirstName, LastName, ContextDef } from './ComponantA'
function ComponantC() {

    const fname = useContext(FirstName)
    const lname = useContext(LastName)
    const Cdef = useContext(ContextDef)
    return (
        <>
            <div className="container text-center bg-dark text-white">
                <h1> My Full Name is {fname} {lname} </h1>
                <div className="row d-flex justify-content-center bg-warning">
                    <div className="col-md-6">

                <p>Context API Defination: {Cdef} </p>
                    </div>
                </div> 
            </div>


        </>
    )
}

export default ComponantC