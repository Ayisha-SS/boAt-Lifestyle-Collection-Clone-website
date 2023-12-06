import React from 'react';
import items from "../item.json"
import { IoArrowForwardCircleOutline } from "react-icons/io5";


function PopUp() {
  return (
   <div className='p-10 bg-slate-900 '>
    <div className='flex gap-5 bg-slate-100 w-[50%] p-5 rounded-[10px]'>
        <div className='w-[50%] '>
            <div className='w-[70%]'>
                <img src="src\assets\images\airpodes\popup1.png" alt="Airdopes-131" className='w-[100%] rounded-lg' />
            </div>
            <div className='my-4 '>
                <button className='bg-black text-white w-[70%] p-3 rounded-lg'>Add To Cart</button>
            </div>
            <span className=' text-center mx-4 flex items-center gap-1'>View Product <IoArrowForwardCircleOutline size={16}/></span>
        </div>
        <div className="w-[50%] ">
            <h3 className='text-2xl font-extrabold'>Airdopes Atom 83</h3>
            <div className='flex mt-4'>
                <p className='text-xl font-extrabold mr-1'>&#8377;1,399.00</p>
                <p className='text-sm mr-1'>&#8377;3,490.00</p>
                <p className='text-xs text-[#399A7c] ml-1'>&#8377;60% off</p>
            </div>
        </div>
    </div>
   </div>
  )
}

export default PopUp