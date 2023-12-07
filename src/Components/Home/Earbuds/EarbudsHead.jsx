import React from 'react'
import { IoArrowForwardCircleOutline } from "react-icons/io5";

function EarbudsHead() {
  return (
    <>
        <div className='flex  '>
            <div className="mt-40 mb-28 w-1/2">
                <div className='tracking-wider'>
                    <h2 className='text-8xl font-thin'>True Wireless <span className='font-bold'>Earbuds</span></h2>
                </div>
                <h4 className='text-3xl mt-2 font-medium tracking-wider'>Starting from <span className='font-extrabold'>&#8377;999&lowast;</span></h4>
                <div className='mt-2'>
                    <button className='flex py-2 rounded-lg bg-black text-white text-sm px-4 tracking-wider items-center' >Shop Product <IoArrowForwardCircleOutline size={20} className='ml-1'/></button>
                </div>
            </div>

            
            <div className="w-1/2 ">
                <img src="src\assets\images\airpodes\img-1.png" alt="Airpodes" />
            </div>
            
        </div>
    </>
  )
}

export default EarbudsHead;