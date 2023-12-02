import React from 'react'
import company from "./Company.json"

function Company() {

 
  return (
    <div className=''>
      <h3 className='mb-5 font-bold'>Company</h3>
      <div>
        <ul className='grid grid-row-8 gap-y-5'>
          {company.map((item,index)=>
            <li id={index} className='text-xs font-100 tracking-wider hover:cursor-pointer'>{item.items}</li>
          )}
        </ul>
      </div>
    </div>
  )
}

export default Company