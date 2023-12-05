import React from 'react'
import Filter from "./Filter"
import NavBar from '../../../NavBar/NavBar'
import Sort from './Sort'
import { Link } from 'react-router-dom'
import { MdKeyboardArrowRight } from "react-icons/md";
import Items from './Items'

function ViewAll() {
  return (
    <div className='p-[3rem]'>
      <div className='flex text-xs'>
        <Link to="/">Home</Link> <MdKeyboardArrowRight />
        <h4>Earbuds</h4>
      </div>
      <h2 className='pt-20 font-extrabold text-2xl tracking-wide'>Wireless Earbuds</h2>
      <div className='flex justify-between'>
        <Filter/>
        <Sort/>
      </div>
      <Items/>
      
    </div>
  )
}

export default ViewAll