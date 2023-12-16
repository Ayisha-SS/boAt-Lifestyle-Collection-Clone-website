import React, { useState } from 'react'
import { BiSortAlt2 } from "react-icons/bi";
import { MdKeyboardArrowDown } from "react-icons/md";

function Sort() {
    const [state,setState] = useState(false)

  return (
    <div className='pt-5'>
        <button onClick={() => setState(true)} className='flex text-lg font-bold  border-black px-4 py-2 rounded-md bg-[#eff4f7]'><BiSortAlt2 />Sort by <MdKeyboardArrowDown /></button>
        {state && (
          <div className='px-3 py-3 bg-slate-100 outline z-10'>
            <ul>
              <li>Featured</li>
              <li>Best selling</li>
              <li>Alphabetically,A-Z</li>
              <li>Alphabetically,Z-A</li>
              <li>Price,low to high</li>
              <li>Price,high to low</li>
              <li>New Arrivals</li>
            </ul>
          </div>
        )}
    </div>
  )
}

export default Sort