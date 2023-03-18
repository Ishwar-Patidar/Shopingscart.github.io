import React from 'react'

function Category({filterItem, cateValue}) {
  return (
   <> 
    <div className='Product_category'>
        {
            cateValue.map((curbtn, index) => {
                return <button className='btn btn-warning' key={index} onClick={() => filterItem(curbtn)} >{curbtn}</button>
            })
        }               
            </div>
   </>
  )
}

export default Category