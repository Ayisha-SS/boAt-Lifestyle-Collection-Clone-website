import React from 'react'
import { IoArrowForwardCircleOutline } from "react-icons/io5";

function PrtyspkrHead() {
  return (
    <div className='flex  pt-10'>
    <div className="w-1/2">
      <img src="src\assets\images\speaker\img_6_desktop_89f81470-5a48-4b29-a73f-e52e4e94a215_3000x.png" alt="" />
    </div>

    <div className="mt-48 mb-28 w-1/2">
      <div className='tracking-wider'>
        <h2 className=' text-[84px] font-thin ml-32 '>Party <span className='font-bold'>Speaker</span></h2>
      </div>
      <h4 className='text-3xl font-medium tracking-wider ml-[410px]'>Starting from <span className='font-extrabold'>&#8377;1199&lowast;</span></h4>
      <div className='mt-2 ml-[550px]'>
        <button className='flex py-2 rounded-lg bg-black text-white text-sm px-4 tracking-wider items-center'>Shop Product <IoArrowForwardCircleOutline size={20} className='ml-1'/></button>
      </div>
    </div>

  </div>
  )
}

export default PrtyspkrHead