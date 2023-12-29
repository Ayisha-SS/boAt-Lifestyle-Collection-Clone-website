import React from 'react'
import { Link } from 'react-router-dom'
import { MdKeyboardArrowRight } from "react-icons/md";
import SounbarFilter from './SounbarFilter';
import SoundbarSort from './SoundbarSort';
import SoundbarItems from './SoundbarItems';
import Footer from '../../Footer/Footer';


function AllsoundBar() {
    return (
      <>
        <div className='p-[3rem]'>
          <div className='flex text-xs'>
            <Link to="/">Home</Link> <MdKeyboardArrowRight />
            <h4>Soundbar</h4>
          </div>
          <h2 className='pt-20 font-extrabold text-2xl tracking-wide'>Soundbar</h2>
          <div className='flex justify-between'>
            <SounbarFilter/>
            <SoundbarSort/>
          </div>
         <SoundbarItems/>
        </div>
        <Footer/>
      </>
        
      )
}

export default AllsoundBar