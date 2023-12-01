import React from 'react'
import { IoArrowForwardCircleOutline } from "react-icons/io5";

function NeckHead() {
  return (
    <div className='flex  '>
       <div className="pt-40 pb-28 w-1/2">
                <div className='tracking-wider mt-12'>
                    <h2 className='w- text-8xl font-bold'>Neckbands</h2>
                </div>
                <h4 className='text-3xl mt-2 font-medium tracking-wider'>Starting from <span className='font-extrabold'>&#8377;999&lowast;</span></h4>
                <div className='mt-2'>
                    <button className='flex py-2 rounded-2xl bg-black text-white text-sm px-4 tracking-wider items-center' >Shop Product <IoArrowForwardCircleOutline size={20} className='ml-1'/></button>
                </div>
            </div>

            
            <div className="w-1/2 ">
                <img src="src\assets\images\neckbands\img_3_desktop_82f31a7e-e992-4b53-9e65-2f8fab4a8c32_2366x.png" alt="" />
            </div>
    </div>
  )
}

export default NeckHead