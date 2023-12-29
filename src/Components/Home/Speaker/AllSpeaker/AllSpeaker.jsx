import React from 'react'
import SpkrFilter from './SpkrFilter'
import SpkrSort from './SpkrSort'
import AllspkrItems from './AllspkrItems'
import { Link } from 'react-router-dom'
import { MdKeyboardArrowRight } from "react-icons/md";
import Footer from '../../Footer/Footer';

function AllSpeaker() {
    return (
      <>
        <div className='p-[3rem]'>
          <div className='flex text-xs'>
            <Link to="/">Home</Link> <MdKeyboardArrowRight />
            <h4>Wireless Speakers</h4>
          </div>
          <h2 className='pt-20 font-extrabold text-2xl tracking-wide'>Wireless Speakers</h2>
          <div className='flex justify-between'>
            <SpkrFilter/>
            <SpkrSort/>
          </div>
         <AllspkrItems/>
        </div>
        <Footer/>
      </>
        
      )
}

export default AllSpeaker