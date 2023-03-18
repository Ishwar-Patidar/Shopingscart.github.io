import React, { useState } from 'react'
import AddItemCart from './AddItemCart';
import './SingleProduct.css'
const Mrp = 65;

function SingleProduct(props) {



    const [item, setItem] = useState(0);
    const [tAmount, settAmount] = useState(0);
   

    const itemAdd = (() => {
        setItem(item + 1);
        settAmount(tAmount + Mrp);
    })
    const itemRemove = (() => {
        setItem(item - 1);
        settAmount(tAmount - Mrp);
    })

    console.log(item);
    return (
        <>


            {/* <!-- .......... Single Products Bannner Start............ --> */}
            <div class="container-fluid SinglePBanner mb-5">
                <div class="row BannerRow">
                    <figure>
                        <img src="images2/products-page-heading.jpg" alt="" srcset="" />
                    </figure>

                    <div class="SinglePageBannerTitle">
                        <h1 class="ProductBannerHeading">Sigle Product Page</h1>
                        <h6 class="subheading">Awesome & Creative HTML CSS layout by TemplateMo</h6>
                    </div>


                </div>
            </div>
            {/* <!-- .......... Single Products Bannner End............ --> */}

            {/* <!-- .............single Product  Detail Start............. --> */}

            <div class="container mt-5 mb-5">
                <div class="row">
                    <div class="col-md-6 ps-3 pe-3 ProductImgContainer">
                        <figure>
                            <img src="images2/single-product-01.jpg" alt="" srcset="" />
                            <img class="mt-2" src="images2/single-product-02.jpg" alt="" srcset="" />

                        </figure>
                    </div>
                    <div class="col-md-6">
                        <div class="mt-1 d-flex justify-content-space-between">
                            <h3>Branded White Shoe</h3>
                            <h3>5-Star</h3>
                        </div>
                        <div class="Price mb-2">$65.00</div>
                        <hr />
                        <div class="desc">
                            <p class="detail">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod kon tempor
                                incididunt ut labore.</p>
                            <p class="notice"> <i> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod kon
                                tempor incididunt ut labore. </i> </p>
                        </div>
                        <hr />
                        <div class="orders d-flex justify-content-space-between">
                            <h3>No.of Orders</h3>
                            <div class="buttons btn-group d-flex">
                                <button class="inc btn btn-secondary" onClick={itemAdd}>➕</button>
                                <input class="totalAddedItemInput text-center" type="text" value={item} />
                                <button class="decr btn btn-secondary" onClick={itemRemove}>➖</button>
                            </div>
                        </div>
                        <hr />
                        <div class="orders d-flex justify-content-space-between">
                            <h3>Total Amount: ${tAmount}</h3>
                            <div class="buttons  ms-auto d-flex">
                                {/* <button class="Additem btn btn-outline-primary" onClick={() => props.addItemToCart()}> Add To Cart
                                </button> */}
                                <AddItemCart/>
                                <button class="Additem btn btn-primary ms-2"> Bye
                                </button>

                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* <!-- .............single Product Detail Start............. --> */}

        </>
    )
}

export default SingleProduct