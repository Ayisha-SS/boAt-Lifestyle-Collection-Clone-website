import React from 'react'
import { IoArrowForwardCircleOutline } from "react-icons/io5";

function EarbudsHead() {
  return (
    <>
        <div className='flex  '>
            <div className="pt-40 pb-28 w-1/2">
                <div className='tracking-wider'>
                    <h2 className='w- text-8xl font-thin'>True Wireless <span className='font-bold'>Earbuds</span></h2>
                </div>
                <h4 className='text-3xl mt-2 font-medium tracking-wider'>Starting from <span className='font-extrabold'>&#8377;999&lowast;</span></h4>
                <div className='mt-2'>
                    <button className='flex py-2 rounded-2xl bg-black text-white text-sm px-4 tracking-wider items-center' >Shop Product <IoArrowForwardCircleOutline size={20} className='ml-1'/></button>
                </div>
            </div>

            
            <div className="w-1/2 ">
                <img src="src\assets\images\airpodes\img_1_desktop_4c81b094-8292-4d54-8b20-5eb3b823a4e6_2988x.png" alt="" />
            </div>
            
        </div>
    </>
  )
}

export default EarbudsHead;