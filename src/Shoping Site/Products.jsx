import React from 'react'
import letestProduct from './ProductAPI'
function Products() {
  return (
    <>

      {/* ////////////////////// */}




      {/* <!-- .........Letest Product section  Start.......... --> */}

      <section id="LetestProduct">
        <div className="container mb-5 text-center">
          <div className="row ProductsTitle" data-aos="fade-up" data-aos-offset="250" >
            <h1 className="ProductsHeading"> Our Latest Products</h1>
            <p className="ProductSubheading">Check out all of our products.</p>
          </div>
          <div className="row" data-aos="fade-up" data-aos-offset="250">
          
              { letestProduct.map((Products) => {
                const { id, img, Name, price} = Products;
                  return (
                    <div className=" col-12 col-sm-4 col-md-3 d-flex justify-content-around g-4 ">
                     <div className="   productsgap ms-5 me-5 card cart-shadow" key={id}>
                <div className=" h-100">
                  <img src={img} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title ">{Name}</h5>
                    <h5>***</h5>
                    <p className="card-text">Price: {price}</p>
                  </div>

                </div>
              </div>
            </div>
                  )
              })}
             
          </div>
        </div>
      </section>
      {/* <!-- .........Letest Product section  End.......... --> */}


      {/* <!-- ..............Pagination start.............. --> */}
      <div className="Pagination-container d-flex justify-content-center mb-3">
        <nav aria-label="Page navigation example">
          <ul className="pagination">
            <li className="page-item">
              <a className="page-link" href="#" aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
              </a>
            </li>
            <li className="page-item"><a className="page-link" href="#">1</a></li>
            <li className="page-item"><a className="page-link" href="#">2</a></li>
            <li className="page-item"><a className="page-link" href="#">3</a></li>
            <li className="page-item"><a className="page-link" href="#">4</a></li>
            <li className="page-item"><a className="page-link" href="#">5</a></li>
            <li className="page-item"><a className="page-link" href="#">6</a></li>
            <li className="page-item"><a className="page-link" href="#">7</a></li>
            <li className="page-item"><a className="page-link" href="#">8</a></li>
            <li className="page-item"><a className="page-link" href="#">9</a></li>
            <li className="page-item">
              <a className="page-link" href="#" aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>

      {/* <!-- ..............Pagination End.............. --> */}



      {/* ////////////////////// */}
    </>
  )
}

export default Products