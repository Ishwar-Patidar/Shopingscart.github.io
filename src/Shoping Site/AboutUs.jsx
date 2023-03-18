import React from 'react'
import { useState } from 'react'
import './AboutUs.css'

const AboutImg = {
  img1: "images2/about-us-page-heading.jpg",
  AboutL: "images2/about-left-image.jpg",
  facebook: "images2/facebook.svg",
  twitter: "images2/twitter.svg",
  linkedin: "images2/linkedin.svg",
  instagram: "images2/instagram.svg",
}


const Team = [
  {
    id: 1,
    name: "Divyanshi Patel",
    img: "images2/team-member-01.jpg",
    Designation: "Product CareTaker"
  },
  {
    id: 2,
    name: "Ishwar Patidar",
    img: "images2/team-member-02.jpg",
    Designation: "web Developer"
  },
  {
    id: 3,
    name: "Kunj biahri",
    img: "images2/team-member-03.jpg",
    Designation: "Web Developer"
  },
]

const Services = [
  {
    id: 1,
    title: "Synther Vaporware",
    Description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis, vitae.,",
    Img: "images2/service-01.jpg",
  },
  {
    id: 2,
    title: "Locavore Squidward",
    Description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis, vitae.,",
    Img: "images2/service-02.jpg",
  },
  {
    id: 3,
    title: "Health Gothfam",
    Description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis, vitae.,",
    Img: "images2/service-03.jpg",
  },

]



function AboutUs() {

  const [data, setData] = useState({
    fname: "",
    email: "",
  })

  const changeInput = (event) => {
    const value = event.target.value;
    const name = event.target.name;

    setData((preValue) => {
      return {
        ...preValue,
        [name]: value,
      }
    })

  }

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(onSubmit);
  }


  return (
    <>
      {/* <!-- ................About Banner Section Start.......... --> */}

      <div className="container-fluid">
        <div className="row  AboutBanner">

          <figure>
            <img src={AboutImg.img1} alt="" />
          </figure>
          <div className=" Banner_discription">
            <h1>About Our Company</h1>
            <p>Awesome, clean & creative HTML5 Template </p>
          </div>
        </div>
      </div>

      {/* <!-- ................About Banner Section End.......... --> */}


      {/* <!-- .............Section1 About Us Skill Start.......... --> */}
      <section className="Skill_section" data-aos="fade-up" data-aos-offset="250">
        <div className="container skill_container mt-5 mb-5">
          <div className="row">
            <div className="col-md-6 image_container">
              <figure>
                <img src={AboutImg.AboutL} alt="" srcset="" />
              </figure>
            </div>
            <div className="col-md-6 skill_detail">
              <h1 className=".section_heading">About Us & Our Skills</h1>

              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod kon tempor incididunt ut
                labore</p>

              <p><i>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiuski smod kon tempor
                incididunt
                ut labore.</i> </p>

              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod kon tempor incididunt ut
                labore et dolore magna aliqua ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip.</p>

              <div className="icon">
                <ul type="none" className="footerList d-flex justify-content-center">
                  <li> <a href="#"> <img className="icon" src={AboutImg.facebook} alt="" srcset="" /></a> </li>
                  <li> <a href="#"> <img className="icon" src={AboutImg.twitter} alt="" srcset="" /></a> </li>
                  <li> <a href="#"> <img className="icon" src={AboutImg.linkedin} alt="" srcset="" /></a> </li>
                  <li> <a href="#"> <img className="icon" src={AboutImg.instagram} alt="" srcset="" /></a> </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- .............Section1 About Us Skill End.......... --> */}

      {/* <!-- ............Team Section Start........... --> */}
      <div className="container mt-5 mb-5" data-aos="fade-up" data-aos-offset="250">
        <div className="row team_detail text-center">
          <h1 className="section_heading">Our Amazing Team</h1>
          <p> <i>Details to details is what makes Hexashop different from the other themes.</i> </p>
        </div>
        <div className="row cart_row">


          {Team.map((Member) => {
            const { id, name, Designation, img } = Member;
            return (
              <div className="col-md-4 text-center" key={id}>
                <div className="team-cart">
                  <figure>
                    <img src={img} alt="" srcset="" />
                  </figure>
                  <h3 className="teamMemberName"> {name} </h3>
                  <p className="designation"> <i>{Designation} </i> </p>
                </div>

              </div>
            )
          })}

        </div>
      </div>
      {/* <!-- ............Team Section End........... --> */}



      {/* <!--............ Our Services Section Start............ --> */}

      <div className="container mt-5 mb-5" data-aos="fade-up" data-aos-offset="250">
        <div className="row text-center service_detail">
          <h1 className="section_heading">Our Services</h1>
          <p> <i>Details to details is what makes MY Shop different from the other themes.</i> </p>
        </div>
        <div className="row service_carts">

          {Services.map((curElem) => {
            const { id, Description, Img, title } = curElem;
            return (
              <div className="col-md-4 text-center" key={id}>
                <div className="service_cart">
                  <div className="cart-title-description text-center">
                    <h3 className="cart-header"> {title} </h3>
                    <p className="cart-desc"> <i> {Description} </i> </p>
                  </div>

                  <figure>
                    <img src={Img} alt="" srcset="" />
                  </figure>
                </div>
              </div>
            )
          })}

        </div>

      </div>

      {/* <!--............ Our Services Section  End............ --> */}

      {/* <!-- ..............testimonial section start........... --> */}
      <div className="container mt-5 mb-5" data-aos="fade-up" data-aos-offset="250">
        <div className="row">
          <div className="col-md-8">
            <h2>By Subscribing To Our Newsletter You Can Get 30% Off</h2>
            <p>Details to details is what makes Hexashop different from the other themes.</p>

            <form action="" onSubmit={onSubmit}>
              <input type="text"
                placeholder="Your Name"
                value={data.fname}
                name="fname"
                onChange={changeInput} /> 
                <br /><br />

              <input type="email" 
              name='email'
              value={data.email}
              placeholder="Your Email Adress" 
              onChange={changeInput}/>
               <br /><br />

              <button className=" btn btn-warning bg-dark text-white pt-2 pb-2 ps-5 pe-5">Go</button><br /><br />
            </form>





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
                  <a href="#">Facebook</a>
                  <a href="#">Instagram</a>
                  <a href="#">Behance</a>
                  <a href="#">Linkedin</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- ..............testimonial section end........... --> */}


    </>
  )
}

export default AboutUs