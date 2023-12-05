import React from 'react'
import { FaFacebookF,FaXTwitter } from "react-icons/fa6";
import { FaInstagram,FaYoutube,FaLinkedinIn  } from "react-icons/fa";
import { Link } from 'react-router-dom';

function SectionThree() {
  return (
    <div className='pb-4 p-14 text-center bg-slate-200 '>
      
      <div className='flex w-[100%] items-center justify-center mb-5'>
        <h4 className='text-base font-bold leading-snug tracking-wider text-center font mr-1'>Let's get social</h4>
        <div className='flex'>
        <Link to="" className='mx-2'><FaFacebookF /></Link>
        <Link to="" className='mx-2'><FaXTwitter /></Link>
        <Link to="" className='mx-2'><FaInstagram /></Link>
        <Link to="" className='mx-2'><FaYoutube /></Link>
        <Link to="" className='mx-2'><FaLinkedinIn /></Link>
        </div>
      </div>

      <div className='flex items-center justify-center pt-5 text-xs w-[100%]'>
        <p>Privacy Policy</p>
        <p className='text-sm font-extrabold mx-2'>.</p>
        {/* <p className='text-xs before:absolute content-none w-[3px] h-[3px] bg-black rounded-[50%] top-[50%] translate-y-[50%] -left-4'>Terms & Conditions</p> */}
        <p>Terms & Conditions</p>
      </div>

      <div>
        <p className='pt-5 text-xs text-[#a7afb7] tracking-wide'>&copy; 2023 Imagine Marketing Limited.All Rights Reserved.
        <br/><br/>
        For queries contact us: Manager, Imagine Marketing Limited Unit no. 204 & 205, 2nd floor, D-wing & E-wing,<br/> Corporate Avenue, Andheri Ghatkopar Link Road, Mumbai, Maharashtra-400093, India
        </p>
      </div>

    </div>
  )
}

export default SectionThree