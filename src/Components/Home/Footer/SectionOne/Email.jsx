import React from 'react'
import { CiCircleChevRight } from "react-icons/ci";

function Email() {
  return (
    <div >
        <div className=' hover:cursor-pointer'>
            <img src="src\assets\images\boAt_logo.svg" alt="Logo" />
        </div>
        <div className='font-bold tracking-wider text-2xl mt-4'>
            <h3>Subscribe to our email alerts!</h3>
        </div>
        <div className='flex relative mt-2'>
            <input type="text" placeholder='Enter your email address' className='py-3 px-3 w-[25rem] rounded-xl' /><CiCircleChevRight size={25} className='box-content absolute left-[90%] bottom-3 hover:cursor-pointer'/>
        </div>
    </div>
  )
}

export default Email