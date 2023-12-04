import React from 'react'
import { PiArrowsLeftRightDuotone } from "react-icons/pi";
import { MdKeyboardArrowDown } from "react-icons/md";

function Filter() {
  return (
    <div className='pt-10 '>
        <button className='flex text-lg font-bold border-black px-4 py-2 rounded-md bg-[#eff4f7]'><PiArrowsLeftRightDuotone />Filter By <MdKeyboardArrowDown /></button>
    </div>
  )
}

export default Filter