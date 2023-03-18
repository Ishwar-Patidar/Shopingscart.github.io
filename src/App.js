import React from 'react'
import { Route, Routes } from 'react-router-dom';
import './App.css'
import Calculator from './Calculator/Calculator';
// import ToDoList from './ToDoList'
// import Axious from './Axios/Axious'
// import Card from './ComponantA'
// import Incre_Decre from './Incre_Decre'
// import Accordian from './Accordian'
// import Filter from './FilterImage/Filter'
// import Search from './SearchData/Search'
// import Form from './ReactForm/Form'
// import Header from './Shoping Site/Header'
// import Home from './Shoping Site/Home'
// import AboutUs from './Shoping Site/AboutUs'
// import Products from './Shoping Site/Products'
// import SingleProduct from './Shoping Site/SingleProduct'
// import ContactUs from './Shoping Site/ContactUs'
// import Footer from './Shoping Site/Footer'
function App() {
  return (
    <div>
    
      {/* <Header/>
      <Routes>
        <Route path="/Home" element={<Home />}/>
          <Route path="AboutUs" element={<AboutUs />} />
          <Route path="Products" element={<Products />} />
          <Route path="SingleProduct" element={<SingleProduct />} />
          <Route path="ContactUs" element={<ContactUs />} />        
        
      </Routes>
      <Footer/> */}


      <Calculator/>
    </div>
  )
}

export default App