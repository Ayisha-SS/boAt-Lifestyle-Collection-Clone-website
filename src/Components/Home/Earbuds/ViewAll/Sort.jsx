import React, { useContext, useState } from 'react'
import { BiSortAlt2 } from "react-icons/bi";
import { MdKeyboardArrowDown } from "react-icons/md";
import { Cart } from '../../../Context/Context';

function Sort() {
    const [state,setState] = useState(false)

    const {sorting} = useContext(Cart)

  return (
    // <div className='pt-5'>
    //     <button onClick={() => setState(true)} className='relative flex text-lg font-bold  border-black px-4 py-2 rounded-md bg-[#eff4f7]'><BiSortAlt2 />Sort by <MdKeyboardArrowDown /></button>
    //     {state && (
    //       <div className=' absolute pl-8 pr-10 bg-slate-100 border-solid z-10 right-4 mt-2'>
    //         <ul className='my-4 pr-6'>
    //           <li className='mb-3 tracking-widest mr-5 text-base font-thin'>Featured</li>
    //           <li className='mb-3 tracking-widest mr-5 text-base font-thin'>Best selling</li>
    //           <li className='mb-3 tracking-widest mr-5 text-base font-thin'>Alphabetically,A-Z</li>
    //           <li className='mb-3 tracking-widest mr-5 text-base font-thin'>Alphabetically,Z-A</li>
    //           <li className='mb-3 tracking-widest mr-5 text-base font-thin'>Price,low to high</li>
    //           <li className='mb-3 tracking-widest mr-5 text-base font-thin'>Price,high to low</li>
    //           <li className='mb-3 tracking-widest mr-5 text-base font-thin'>New Arrivals</li>
    //         </ul>
    //       </div>
    //     )}
    // </div>

    <div className='pt-5'>
      <form action="#">
        <label htmlFor="sort"></label>
        <select name="sort" id="sort" className='relative flex text-lg font-bold  border-black px-4 py-2 rounded-md bg-[#eff4f7]' onClick={sorting}>
          {/* <option value="default">Sort</option> */}
          <option value="a-z" >Alphabetically,A-Z</option>
          <option value="" disabled></option>
          <option value="z-a">Alphabetically,Z-A</option>
          <option value="" disabled></option>
          <option value="highest">Price,low to high</option>
          <option value="" disabled></option>
          <option value="lowest">Price,high to low</option>
          <option value="" disabled></option>
        </select>
      </form>
    </div>
  )
}

export default Sort