import React from 'react'
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import {Link } from "react-router-dom"

function PhoneHead() {
  return (
    <div className='flex  mt-10'>
    <div className="w-1/2">
      <img src="src\assets\images\Headphones\img_4_desktop_e51eb905-3de3-4323-8dc3-b2362bd879e2_3000x.png" alt="Headphones" />
    </div>

    <div className="mt-48 mb-28 w-1/2">
      <div className='tracking-wider'>
        <h2 className=' text-[84px] font-bold ml-56 '>Headphones</h2>
      </div>
      <h4 className='text-3xl font-medium tracking-wider ml-[410px]'>Starting from <span className='font-extrabold'>&#8377;1199<sup>&lowast;</sup></span></h4>
      <div className='mt-2 ml-[550px] w-40'>
        <Link to="headphones" className='flex py-2 rounded-lg bg-black text-white text-sm px-4 tracking-wider items-center'>Shop Product <IoArrowForwardCircleOutline size={20} className='ml-1'/></Link>
      </div>
    </div>

  </div>
  )
}

export default PhoneHead