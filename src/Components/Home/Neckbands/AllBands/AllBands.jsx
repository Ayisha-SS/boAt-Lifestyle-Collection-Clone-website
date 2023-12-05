import React from 'react'
import BandsFilter from './BandsFilter'
import BandsSort from './BandsSort'
import BandsItem from './BandsItem'
import { Link } from 'react-router-dom'
import { MdKeyboardArrowRight } from "react-icons/md";

function AllBands() {
    return (
        <div className='p-[3rem]'>
          <div className='flex text-xs'>
            <Link to="/">Home</Link> <MdKeyboardArrowRight />
            <h4>Neckbands</h4>
          </div>
          <h2 className='pt-20 font-extrabold text-2xl tracking-wide'>Wireless Earbuds</h2>
          <div className='flex justify-between'>
            <BandsFilter/>
            <BandsSort/>
          </div>
         <BandsItem/>
          
        </div>
      )
}

export default AllBands