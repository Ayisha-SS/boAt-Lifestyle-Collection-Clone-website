import React from 'react'
import WatchFilter from './WatchFilter'
import WatchSort from './WatchSort'
import { Link } from 'react-router-dom'
import { MdKeyboardArrowRight } from "react-icons/md";
import AllItem from './AllItem';
import Footer from '../../Footer/Footer';

function AllWatch() {
    return (
      <>
          <div className='p-[3rem]'>
            <div className='flex text-xs'>
              <Link to="/">Home</Link> <MdKeyboardArrowRight />
              <h4>Watches</h4>
            </div>
            <h2 className='pt-20 font-extrabold text-2xl tracking-wide'>Smart Watch</h2>
            <div className='flex justify-between'>
            <WatchFilter/>
              <WatchSort/>
            </div>
            <AllItem/> 
          </div>
          <Footer/>
      </>
        
      )
}

export default AllWatch