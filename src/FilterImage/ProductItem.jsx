import React from 'react'

function ProductItem({ item }) {
    
    return (
        <>
            <div className='container' >
                <div className="row d-flex justify-content-center">

                    {item.map((curElem) => {
                        const { id, image, title, category, price, description } = curElem;

                        return (
                            <div className="col-md-3 ms-5 me-5 cart mb-4 mt-5 " key={id}>
                                <div className="row mb-3 mt-4">
                                    <div className="col-md-4">
                                        <img src={image} alt="Image Not Avalaible" className='img-fluid' />
                                    </div>
                                    <div className="col-md-8">
                                        <h3 className="name">{title}</h3>
                                        <p>{description}</p>
                                        <div className='d-flex justify-content-between align-item-center'>
                                            <p className='text-primary'> Price : {price}</p>
                                            <button className='btn btn-primary ps-2 pe-2' > Order Now </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}




                </div>
            </div>
        </>
    )
}

export default ProductItem