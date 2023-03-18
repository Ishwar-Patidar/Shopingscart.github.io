import React from 'react'
import { NavLink } from 'react-router-dom'
import './Footer.css'
function Footer() {
    const logo = "/images2/logo.jpg"
  return (
   <>
    <section >
        <div className = "conatainer-fluid footer">

            <div className="container pt-5">
                 <div className="row text-center mt-5 mb-5">
                    <div className="col-md-3 textdesign">
                        <div className="footerlogo text-white ">
                            <img src={logo} alt="Logo Loading...." srcSet=""  className='img-fluid footer_logo'/>
                        </div>
                        <p className="address text-white">45001, indore shubhash road </p>
                        <p className="email text-white">**********@**gmail.com</p>
                        <p className="contactNo text-white">*******85</p>
                    </div>
                    <div className="col-md-3 textdesign">
                        <h3 className="footertitle">Shoping & Categories</h3>
                            <ul type="none" className="footerList" >
                                <li><NavLink href="#MensWearSection">Men's Shoping</NavLink></li>
                                <li><NavLink href="#WomensWearSection">Women's Shoping</NavLink></li>
                                <li><NavLink href="KidsWearSection">Kid's Shoping</NavLink></li>
                            </ul>
                    </div>
                    <div className="col-md-3 textdesign">
                        <h3 className="footertitle">Useful Links</h3>
                        <ul type="none" className="footerList">
                            <li><NavLink href="#">HomePage</NavLink></li>
                            <li><NavLink href="#">About Us</NavLink></li>
                            <li><NavLink href="#">Help</NavLink></li>
                            <li><NavLink href="#">Contact Us</NavLink></li>
                        </ul>
                    </div>
                    <div className="col-md-3 textdesign">
                        <h3 className="footertitle">Help & Information</h3>
                        <ul type="none" className="footerList">
                            <li><NavLink href="#">Help</NavLink></li>
                            <li><NavLink href="#"> FAQ's</NavLink></li>
                            <li><NavLink href="#">Shiping</NavLink></li>
                            <li><NavLink href="#">Tracking Id</NavLink></li>
                        </ul>
                    </div>

                    <hr className="text-white"/>

                    <div className="copyright textdesign">
                        <p className="text-white">Copyright&COPY;2023 MY SHOP Co. PVT. Ltd All Right Reserved.</p>
                        <ul type="none" className="footerList d-flex justify-content-center">
                            <li> <a href="#"> <img className="icon" src="images/facebook.svg" alt="" srcset=""/></a> </li>
                            <li> <a href="#"> <img className="icon" src="images/twitter.svg" alt="" srcset=""/></a> </li>
                            <li> <a href="#"> <img className="icon" src="images/linkedin.svg" alt="" srcset=""/></a> </li>
                            <li> <a href="#"> <img className="icon" src="images/instagram.svg" alt="" srcset=""/></a> </li>
                        </ul>
                    </div>
                </div>
            </div>
           
        </div>
    </section>
   </>
  )
}

export default Footer