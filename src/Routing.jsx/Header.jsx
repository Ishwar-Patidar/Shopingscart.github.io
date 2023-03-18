import React from 'react'
import {NavLink} from 'react-router-dom'

const Header = () => {
  return (
    <>
    <div className="container-fluid ">
        <div className="row d-flex">
            <ul className='d-flex justify-content-around ' type = "none">
               <li className='bg-warning pt-1 pb-1 ps-3 pe-3 rounded-pill text-danger'> <NavLink to="/">Home</NavLink> </li>
               <li className='bg-warning pt-1 pb-1 ps-3 pe-3 rounded-pill'> <NavLink to="/About">About</NavLink> </li>
               <li className='bg-warning pt-1 pb-1 ps-3 pe-3 rounded-pill'> <NavLink to="/Services">Services</NavLink> </li>
               </ul>
        </div>
    </div>
    </>
  )
}

export default Header