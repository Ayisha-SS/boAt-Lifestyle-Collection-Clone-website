import React from 'react'
import { Link } from 'react-router-dom'
import { MdKeyboardArrowRight } from "react-icons/md";
import PrtyspkrFilter from './PrtyspkrFilter';
import PrtyspkrSort from './PrtyspkrSort';
import AllprtyItem from './AllprtyItem';

function AllprtySpkr() {
    return (
        <div className='p-[3rem]'>
          <div className='flex text-xs'>
            <Link to="/">Home</Link> <MdKeyboardArrowRight />
            <h4>Party Speaker</h4>
          </div>
          <h2 className='pt-20 font-extrabold text-2xl tracking-wide'>Party Speaker</h2>
          <div className='flex justify-between'>
            <PrtyspkrFilter/>
            <PrtyspkrSort/>
          </div>
         <AllprtyItem/>
        </div>
      )
}

export default AllprtySpkr