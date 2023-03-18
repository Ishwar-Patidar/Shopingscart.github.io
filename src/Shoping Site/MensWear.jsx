import React from 'react'
import Mens from './Json'
function MensWear() {
  return (
    <>
      <div className="container mb-5">
          <div className="row" data-aos="fade-up" data-aos-offset="250">
            <h1 className="mensHeading"> Men's Latest</h1>
            <p className="menSubheading">Details to details is what makes Hexashop different from the other themes.</p>
          </div>
          <div className="row">
            <div className="row row-cols-1 row-cols-md-4 d-flex justify-content-center d-flex justify-items-center g-4">

              {Mens.map((curElem) => {
                const { id, img, Name, price } = curElem;
                return (
                  <div className="col productsgap" data-aos="fade-up" data-aos-offset="250" key={id}>
                    <div className="card h-100">
                      <img src={img} className="card-img-top" alt="..." />
                      <div className="card-body">
                        <h5 className="card-title">{Name}</h5>
                        <p className="card-text">Price : {price}</p>
                      </div>

                    </div>
                  </div>
                )
              })}

            </div>
          </div>
        </div>
    </>
  )
}

export default MensWear