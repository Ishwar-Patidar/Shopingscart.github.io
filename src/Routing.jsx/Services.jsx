import React from 'react'
import { Link, Outlet} from 'react-router-dom';
function Services() {
  return (
    <>
      <Link className='bg-warning pt-1 pb-1 ps-3 pe-3 rounded-pill text-danger' to="SoftwareDeveloper"> Software developer </Link>
      <Link className='bg-warning pt-1 pb-1 ps-3 pe-3 rounded-pill text-danger' to="WebDeveloper">Web Developer</Link>     
      <Outlet />
      </>
  )
};

export default Services;