// import React, { useEffect, useState } from 'react';
// import axios from "axios";


// function Axious() {

//   const [myData, setMyData] = useState([]);
//   const [isError, setIsError] = useState("");

//   const API = "https://jsonplaceholder.typicode.com/posts";


//   const Products = async (url) => {
//     try {
//       const res = await axios.get(url);
//       setMyData(res.data);

//     } catch (error) {
//       setIsError(error.message);
//     }
//   }
//   useEffect(() => {
//     Products(API)
//   }, []);

//   return (
//     <>
//       <h1> Axios Practice </h1>
//       {isError !== "" && <h2>{isError}</h2>}
//       {myData.map((post) => {
//         const { id, title, body } = post;
//         return <div className='cart' key={id}>
//           <h2>{title}</h2>
//           <p>{body}</p>
//         </div>

//       })}
//     </>
//   )
// }

// export default Axious 

