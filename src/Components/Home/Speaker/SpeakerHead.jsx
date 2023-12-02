import React from 'react'
import { IoArrowForwardCircleOutline } from "react-icons/io5";

function SpeakerHead() {
  return (
    <div className='flex mt-2 '>
            <div className="pt-40 pb-28 w-1/2">
                <div className='tracking-wider'>
                    <h2 className='w- text-7xl font-thin whitespace-nowrap'>Wireless <span className='font-bold'>Speakers</span></h2>
                </div>
                <h4 className='text-3xl mt-2 font-medium tracking-wider'>Starting from <span className='font-extrabold'>&#8377;749&lowast;</span></h4>
                <div className='mt-2'>
                    <button className='flex py-2 rounded-2xl bg-black text-white text-sm px-4 tracking-wider items-center' >Shop Product <IoArrowForwardCircleOutline size={20} className='ml-1'/></button>
                </div>
            </div>

            
            <div className="w-1/2 ">
                <img src="src\assets\images\wirless-spkr\img_5_desktop_993080a5-771b-4fbd-961a-a4dae9e55838_3000x.png" alt="" />
            </div>
            
        </div>
  )
}

export default SpeakerHead