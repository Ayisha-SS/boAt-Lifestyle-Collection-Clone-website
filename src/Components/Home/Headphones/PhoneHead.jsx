import React from 'react'
import { IoArrowForwardCircleOutline } from "react-icons/io5";

function PhoneHead() {
  return (
    <div className='flex  pt-10'>
    <div className="w-1/2">
      <img src="src\assets\images\Headphones\img_4_desktop_e51eb905-3de3-4323-8dc3-b2362bd879e2_3000x.png" alt="" />
    </div>

    <div className="mt-48 pb-28 w-1/2">
      <div className='tracking-wider'>
        <h2 className='w- text-[84px] font-bold pl-32 '>Headphones</h2>
      </div>
      <h4 className='text-3xl font-medium tracking-wider pl-[410px]'>Starting from <span className='font-extrabold'>&#8377;1199&lowast;</span></h4>
      <div className='mt-2 pl-[550px]'>
        <button className='flex py-2 rounded-2xl bg-black text-white text-sm px-4 tracking-wider items-center'>Shop Product <IoArrowForwardCircleOutline size={20} className='ml-1'/></button>
      </div>
    </div>

  </div>
  )
}

export default PhoneHead