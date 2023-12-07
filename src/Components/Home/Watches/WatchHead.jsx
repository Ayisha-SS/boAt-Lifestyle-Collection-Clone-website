import React from 'react'
import { IoArrowForwardCircleOutline } from "react-icons/io5";

function WatchHead() {
  return (
    <div className='flex  pt-10'>
      <div className="w-1/2">
        <img src="src\assets\images\Watch\img_2_desktop_77a00a10-7c21-4a09-bcef-937b7a11cc86_2788x.png" alt="" />
      </div>

      <div className="mt-48 pb-28 w-1/2">
        <div className='tracking-wider'>
          <h2 className='w- text-[84px] font-thin pl-32 '>Smart <span className='font-bold'>Watches</span></h2>
        </div>
        <h4 className='text-3xl font-medium tracking-wider pl-[410px]'>Starting from <span className='font-extrabold'>&#8377;1699&lowast;</span></h4>
        <div className='mt-2 pl-[550px]'>
          <button className='flex py-2 rounded-lg bg-black text-white text-sm px-4 tracking-wider items-center'>Shop Product <IoArrowForwardCircleOutline size={20} className='ml-1'/></button>
        </div>
      </div>

    </div>
  )
}

export default WatchHead