import React from 'react'

function AddItemCart(props) {
  return (
    <button class="Additem btn btn-outline-primary" onClick={() => props.addItemToCart()}> Add To Cart
    </button>
  )
}

export default AddItemCart