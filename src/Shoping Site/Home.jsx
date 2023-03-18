import React from 'react'
import './Home.css'

import { Womens, Kids, Social, BannerImg } from './Json'
import MensWear from './MensWear'
function Home() {

  return (
    <>
      <div className="container-fluid mb-3" data-aos="fade-up" data-aos-offset="250">
        <div className="row">
          <div className="col-md-6 LeftContainer text-center">
            <figure className="justify-items-center">
              <img id="BannerLeftImg" src="images2/left-banner-image.jpg" alt=".....Loading" srcSet="" />


              <div className="bannerBody">
                <p className="BannerLeftImgTitle">We Are IB SHOP</p>
                <p className="bannerDiscrption "> Awesome, clean & creative HTML5 Template</p>
                <button className="btn btn-outline-primary">Purchase Now!</button>
              </div>

            </figure>
          </div>

          <div className="col-md-6">

            <div className="row">
              {/* ,,,,,,,,,,,,,,,,,,,, */}


              {BannerImg.map((curElem) => {
                const { id, img, title, description } = curElem;
                return <div className="col-md-6 BannerRightContainer top_left" key={id}>
                  <figure>
                    <img src={img} alt="" srcSet="" />

                  </figure>
                  <div className="imgbody">
                    <p className="bannercard-title"> {title} </p>
                    <p className="description"> {description}</p>
                  </div>
                </div>
              })}



              {/* ,,,,,,,,,,,,,,,,, */}


            </div>
          </div>
        </div>
      </div>








      {/* ,..........................,.............. */}

      <hr />

      {/* <!-- ..........Men's Item Section Start.............. --> */}
      <section className="MensWearSection" >
      <MensWear/>


      </section>

      {/* <!-- ..........Men's Item Section End.............. --> */}

      <section id="WomensWearSection" data-aos="fade-up" data-aos-offset="250">
        <div className="container mt-5 mb-5">
          <div className="row">
            <h1 className="mensHeading"> Whomen's Latest</h1>
            <p className="menSubheading">Details to details is what makes My shop different from the other themes.</p>
          </div>
          <div className="row">
            <div className="row row-cols-1 row-cols-md-4 d-flex justify-content-center  g-3 ">


              {Womens.map((curElem) => {
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
      </section>

      {/* <!-- ..........Women's Item Section End.............. --> */}



      {/* <!-- ..........Kid's Item Section Start.............. --> */}
      <section id="KidsWearSection" data-aos="fade-up" data-aos-offset="250">
        <div className="container mt-5 mb-5">
          <div className="row ">
            <h1 className="mensHeading"> Kids's Latest</h1>
            <p className="menSubheading">Details to details is what makes My shop different from the other themes.</p>
          </div>
          <div className="row mt-2">
            <div className="row row-cols-1 row-cols-md-4 d-flex justify-content-center d-flex justify-items-center g-4">




              {Kids.map((curElem) => {
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


      </section>

      {/* <!-- ..........Kid's Item Section End.............. --> */}



      {/* <!-- .........Explore Section start.............. --> */}

      <section id="Explorer" data-aos="fade-up" data-aos-offset="250">
        <div className="container mt-5 mb-5">
          <div className="row">
            <div className="col-md-6 p-3">
              <h1 className="explorHeading mb-5">Explore Our Products</h1>
              <p className="descr1 mt-3 ">
                You are allowed to use this HexaShop HTML CSS template. You can feel free to modify or edit this
                layout. You can convert this template as any kind of ecommerce CMS theme as you wish.
              </p>

              <p className="notice text-primary">
                You are not allowed to redistribute this template ZIP file on any other website.
              </p>
              <p className="descr2">
                There are 5 pages included in this HexaShop Template and we are providing it to you for
                absolutely free of charge at our TemplateMo website. There are web development costs for us.
              </p>

              <p className="descr3">
                If this template is beneficial for your website or business, please kindly support us a little
                via PayPal. Please also tell your friends about our great website. Thank you.
              </p>

              <button className="moreinfo btn btn-outline-primary" data-aos="fade-up" data-aos-offset="250">Discover More</button>
            </div>
            <div className="col-md-6 ">
              <div className="row">
                <div className="col-md-6 text-center content-center">
                  <h2 className="LetherBags">Leather Bags</h2>
                  <p className="text-default">Latest collection</p>
                </div>
                <div className="col-md-6 g-3 mt-2">
                  <img src="images2/explore-image-01.jpg" alt="" />
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 mt-3">
                  <img src="images2/explore-image-02.jpg" alt="" />
                </div>
                <div className="col-md-6 text-center content-center ">
                  <h3>Different Types</h3>
                  <p>Over 304 Products</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* <!-- .........Explore Section End.............. --> */}



      {/* <!-- .............Social Media Section start............. --> */}

      <section id="socialmedia" data-aos="fade-up" data-aos-offset="250" >
        <div className="container mt-5 mb-5">
          <h1 className="mb-4">Social Media</h1>
          <p>Details to details is what makes Hexashop different from the other themes.</p>
          <div className="row">


            {Social.map((curElem) => {
              const { id, img } = curElem;
              return <div className="col-md-2" key={id}><img src={img} alt="" /></div>
            })}

          </div>
        </div>
      </section>
      {/* <!-- .............Social Media Section End............. --> */}


      {/* <!-- ..............testimonial section start........... --> */}
      <div className="container mt-5 mb-5" data-aos="fade-up" data-aos-offset="250">
        <div className="row">
          <div className="col-md-8">
            <h2>By Subscribing To Our Newsletter You Can Get 30% Off</h2>
            <p>Details to details is what makes Hexashop different from the other themes.</p>


            <input type="text" placeholder="Your Name" /> <br /><br />
            <input type="email" placeholder="Your Email Adress" /> <br /><br />

            <button className="bg-dark text-white pt-2 pb-2 ps-5 pe-5">Go</button><br /><br />
          </div>
          <div className="col-md-4">
            <div className="row">
              <div className="col-md-6">
                <h6>Store Location:</h6>
                <p>Sunny Isles Beach, FL 33160, United States</p>

                <h6>Phone:</h6>
                <p>010-020-0340</p>

                <h6>Office Location:</h6>
                <p>indore center</p>
              </div>
              <div className="col-md-6">
                <h6>Work Hours:</h6>
                <p>07:30 AM - 9:30 PM Daily</p>

                <h6>Email:</h6>
                <p>info@company.com</p>

                <h6>Social Media:</h6>
                <p>
                  <a href="">Facebook</a>
                  <a href="">Instagram</a>
                  <a href="">Behance</a>
                  <a href="">Linkedin</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- ..............testimonial section end........... --> */}

      {/* ,..........................,.............. */}
    </>
  )
}

export default Home