import React from 'react'
import { IoArrowForwardCircleOutline } from "react-icons/io5";

function SoundbarHead() {
  return (
    <div className='flex  '>
            <div className="pt-40 pb-28 w-1/2">
                <div className='tracking-wider'>
                    <h2 className='w- text-7xl font-bold whitespace-nowrap'>Sound Bars</h2>
                </div>
                <h4 className='text-3xl mt-2 font-medium tracking-wider'>Starting from <span className='font-extrabold'>&#8377;1599&lowast;</span></h4>
                <div className='mt-2'>
                    <button className='flex py-2 rounded-lg bg-black text-white text-sm px-4 tracking-wider items-center' >Shop Product <IoArrowForwardCircleOutline size={20} className='ml-1'/></button>
                </div>
            </div>

            
            <div className="mt-60">
                <img src="src\assets\images\sound-bar\img_7_desktop_acb84546-2e5d-4f69-bd03-3fd2ca9740db_3000x.png" alt="" />
            </div>
            
        </div>
  )
}

export default SoundbarHead