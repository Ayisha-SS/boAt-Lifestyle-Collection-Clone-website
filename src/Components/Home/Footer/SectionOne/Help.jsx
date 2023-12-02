import React from 'react'
import help from "./Help.json"

function Help() {
  
  return (
    <div className='mr-8'>
      <h3 className='mb-5 font-bold'>Help</h3>

      <div>
        <ul className='grid grid-row-7 gap-y-5'>
          {help.map((item,index)=>
          <li id={index} className='text-xs font-100 tracking-wider hover:cursor-pointer'>{item.items}</li>
          )}

        </ul>

      </div>
    </div>
  )
}

export default Help