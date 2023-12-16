import React from 'react'
import Filter from "./Filter"
import Sort from './Sort'
import { Link } from 'react-router-dom'
import { MdKeyboardArrowRight } from "react-icons/md";
import Items from './Items'
import Footer from '../../Footer/Footer';

function ViewAll() {
  return (
    <>
    
    <div className='p-[3rem]'>
      <div className='flex text-xs'>
        <Link to="/">Home</Link> <MdKeyboardArrowRight />
        <h4>Wireless Earbuds</h4>
      </div>
      <h2 className='pt-5 font-extrabold text-2xl tracking-wide'>Wireless Earbuds</h2>
      <div className='flex justify-between'>
        <Filter/>
        <Sort/>
      </div>
      <Items/>   
    </div>
    <Footer/>
    </>
  )
}

export default ViewAll