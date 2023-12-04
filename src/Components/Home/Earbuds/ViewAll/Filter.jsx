import React, { useState } from 'react'
import { PiArrowsLeftRightDuotone } from "react-icons/pi";
import { MdKeyboardArrowDown } from "react-icons/md";

function Filter() {
  const [modal,setModal] = useState(false)

  const toggleModal = () =>{
    setModal(!modal)
  }
  return (
    <div className='pt-10 '>
        <button onClick={toggleModal} className='flex text-lg font-bold border-black px-4 py-2 rounded-md bg-[#eff4f7]'><PiArrowsLeftRightDuotone />Filter By <MdKeyboardArrowDown /></button>
        {modal && (

        <div className=' p-2 bg-red-300 '>
          <h1 >hello</h1>
        </div>
        )}
    </div>
  )
}

export default Filter