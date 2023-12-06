import React from 'react'
import { BiSortAlt2 } from "react-icons/bi";
import { MdKeyboardArrowDown } from "react-icons/md";

function PrtyspkrSort() {
    return (
        <div className='pt-10'>
            <button className='flex text-lg font-bold  border-black px-4 py-2 rounded-md bg-[#eff4f7]'><BiSortAlt2 />Sort by <MdKeyboardArrowDown /></button>
        </div>
      )
}

export default PrtyspkrSort