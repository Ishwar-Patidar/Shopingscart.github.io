import React, {useState} from 'react'
import { NavLink } from 'react-router-dom';
import './Header.css'
function Header() {

    const logo = "images2/logo.jpg";
    const [data, setData] = useState(0);

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img src={logo} alt="" srcset="" className='img-fluid brandLogo' />
                    </a>


                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>


                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

                            <li className="nav-item">  
                                <NavLink className="nav-link Active" aria-current="page" to="/Home">Home</NavLink>
                            </li>
                            <li  className="nav-item">
                                <NavLink className="nav-link " aria-current="page" to=".MensWearSection">Men's</NavLink>
                            </li>
                            <li  className="nav-item">
                                <NavLink className="nav-link " aria-current="page" to="/Home">Whomen's</NavLink>
                            </li>

                            <li  className="nav-item">
                                <NavLink className="nav-link " aria-current="page" to="/Home">Explore</NavLink>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Link</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Pages
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li  className="nav-item">
                                        <NavLink className="nav-link  dropdown-item" aria-current="page" to="/AboutUS">About Us</NavLink>
                                    </li>
                                    <li  className="nav-item">
                                        <NavLink className="nav-link  dropdown-item" aria-current="page" to="/Products">Products</NavLink>
                                    </li>
                                    <li  className="nav-item">
                                        <NavLink className="nav-link  dropdown-item" aria-current="page" to="/SingleProduct">Single Product</NavLink>
                                    </li>
                                    <li  className="nav-item">
                                        <NavLink className="nav-link  dropdown-item" aria-current="page" to="/ContactUs">Contact Us</NavLink>
                                    </li>

                                </ul>
                            </li>

                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Feature
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li  className="nav-item">
                                        <NavLink className="nav-link  dropdown-item" aria-current="page" to="/Home">Feature1</NavLink>
                                    </li>
                                    <li  className="nav-item">
                                        <NavLink className="nav-link  dropdown-item" aria-current="page" to="/Home">Feature1</NavLink>
                                    </li>
                                    <li  className="nav-item">
                                        <NavLink className="nav-link  dropdown-item" aria-current="page" to="/Home">Feature1</NavLink>
                                    </li>
                                    <li  className="nav-item">
                                        <NavLink className="nav-link  dropdown-item" aria-current="page" to="/Home">Feature1</NavLink>
                                    </li>

                                </ul>
                            </li>
                            <li  className="nav-item">
                                <NavLink className="nav-link trolly d-flex" aria-current="page" to="/Home"> 🛒 <span className='cart_item'> { data } </span> </NavLink>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header