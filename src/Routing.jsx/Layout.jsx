import React from 'react'
import { Routes, Route} from 'react-router-dom';
import About from './About';
import Index from './Index';
import Services from './Services';
import Header from './Header';
import Page from './Page 404';
import WebDeveloper from './WebDeveloper';
import SoftwareDeveloper from './SoftwareDeveloper';
const Layout = () => {
  return (
    <>
<Header/>
    <Routes>

        <Route index element = {<Index/>}/>
            <Route path='/About/' element = { <About/> }/>
            
            <Route path='/Services/' element = { <Services/> }> 
            <Route path = "WebDeveloper" element = { <WebDeveloper/>} />
            <Route path = "SoftwareDeveloper" element = { <SoftwareDeveloper/>}/>
            </Route>
            {/* <Route path='*' element = { <Page/> } /> */}
           
   </Routes>
    </>
   
  )
}

export default Layout