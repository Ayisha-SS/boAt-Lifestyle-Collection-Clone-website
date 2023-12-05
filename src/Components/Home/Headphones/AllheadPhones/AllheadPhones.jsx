import React from 'react'
import HeadphoneFilter from './HeadphoneFilter'
import HeadphoneSort from './HeadphoneSort'
import { Link } from 'react-router-dom'
import { MdKeyboardArrowRight } from "react-icons/md";
import HeadphnItem from './HeadphnItem';

function AllheadPhones() {
    return (
        <div className='p-[3rem]'>
          <div className='flex text-xs'>
            <Link to="/">Home</Link> <MdKeyboardArrowRight />
            <h4>Headphones</h4>
          </div>
          <h2 className='pt-20 font-extrabold text-2xl tracking-wide'>Wireless Earbuds</h2>
          <div className='flex justify-between'>
            <HeadphoneFilter/>
            <HeadphoneSort/>
          </div>
          <HeadphnItem/>
          
        </div>
      )
}

export default AllheadPhones