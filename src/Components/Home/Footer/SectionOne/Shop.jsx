import React from 'react'
import products from "./Shop.json"

function Shop() {

 
  return (
    <div className='mr-8'>
      <h3 className='mb-5 font-bold'>Shop</h3>
      
      <div >
        <ul className='grid grid-row-5 grid-cols-2 gap-x-12 gap-y-5'>
          {products.map((item,index)=>
            <li id={index} className='text-xs font-100 tracking-wider hover:cursor-pointer'>{item.items}</li>
          )}
        </ul>
      </div>
    </div>
  )
}

export default Shop