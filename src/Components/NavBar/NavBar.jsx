import React from 'react';
import { Link } from 'react-scroll';
import { FaAngleDown,FaRegUser } from "react-icons/fa";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import companyLogo from '../../assets/images/boat.jpeg';
// import { IoIosSearch } from "react-icons/io";

function NavBar() {
  return (
    <>
    <div className='flex  flex-row justify-between p-2 m-0 md:px-10 bg-slate-200 bor shadow-[0_3px_2px_rgba(0,0,0,0.2)]'>
      <div className='w-28 p-1  bg-slate-400'>
        <Link to='/'><img src={companyLogo} alt="Logo" /></Link>
      </div>
      <nav className='flex gap-1 pr-8 font-thin p-0 cursor-pointer text-base py-21 tracking-widest items-center bg-slate-400'>
        <Link to="categories" spy={true} smooth={true} duration={500} className='flex mr-8'>Categories<FaAngleDown />
</Link>
        <Link to="boat" spy={true} smooth={true} duration={500} className='mr-8'>boAt Truly Yours</Link>
        <Link to="gift" spy={true} smooth={true} duration={500} className='mr-8'>Gift with boAt</Link>
        <Link to="order" spy={true} smooth={true} duration={500} className='mr-8'>Corporate Orders</Link>
        <Link to="more" spy={true} smooth={true} duration={500} className='flex'>More<FaAngleDown />
</Link>
      </nav>
      <div className='flex items-center bg-slate-300'>
      <div className='px-10 ml-4'>
        <input type="text" placeholder='search' className='rounded-3xl pl-4 pr-14 py-3 bg-slate-200 relative ' />
      </div>      
      <div className='flex gap-2 '>
      <FaRegUser size={20} fontWeight={800} />
      <HiOutlineShoppingBag size={20} />
      </div>
      </div>
    </div>

    </>
  )
}

export default NavBar