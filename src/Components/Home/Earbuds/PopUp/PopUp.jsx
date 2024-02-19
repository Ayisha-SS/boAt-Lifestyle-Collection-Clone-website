import React, { useContext, useState } from 'react';
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import Color from './Color';
// import { Cart } from '../../../Context/Context';

function PopUp({close,item}) {
// const {addToCart} = useContext(Cart);
 
// const handleAdd = () =>{
//     addToCart(item);
// }

  return (
    <>
    <div className='p-10 bg-[#313131cc] w-[100%] h-[100vh] fixed top-0 bottom-0 right-0 left-0 z-10'>
        <div className='flex gap-5 bg-[#ffffff] w-[50%] p-5 rounded-[10px]  fixed top-[44%] left-[50%] translate-x-[-40%] translate-y-[-50%]'>
            <div className='w-[35%] '>
                <div className='w-[80%]'>
                    <img src="src\assets\images\airpodes\popup1.png" alt="Airdopes-131" className='w-[100%] rounded-lg' />
                </div>
                <div className='my-4 '>
                    <button className='bg-black text-white w-full p-3 rounded-lg'
                        // onClick={handleAdd}
                    >    
                    Add To Cart</button>
                </div>
                <span className=' text-center mx-4 flex items-center gap-1'>View Product <IoArrowForwardCircleOutline size={16}/></span>
            </div>
            <div className="w-[65%] ">
                <div className='flex justify-between'>
                <h3 className='text-2xl font-extrabold'>Airdopes Atom 83</h3>
                <span className='h-[32px] w-[32px] text-center cursor-pointer bg-[#f7f9fa] text-2xl rounded-full '
                   onClick={() => close(false)}
                >&times;</span>
                </div>
                <div className='flex mt-4'>
                    <p className='text-xl font-extrabold mr-1'>&#8377;1,399.00</p>
                    <p className='text-sm mr-1'>&#8377;3,490.00</p>
                    <p className='text-xs text-[#399A7c] ml-1'>&#8377;60% off</p>
                </div>
                <p className='text-[10px] italic'>Inclusive of all Taxes</p>
                <div className='mt-6 bg-[#f7f9fa] pl-12  w-full h-[25%] rounded-lg'>
                    <ul className=' mt-3 flex flex-wrap p-4 list-disc text-xs font-bold '>
                        <li className='pr-[50px]'>13mm drivers</li>
                        <li>IWP Technology</li>
                    </ul>
                </div>
                <Color/>
            </div>
        </div>
    </div>
    </>
  )
}

export default PopUp