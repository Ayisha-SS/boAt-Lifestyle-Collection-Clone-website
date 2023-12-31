import React from 'react'

function NavDropdown() {
  return (
    <div className='bg-white tracking-widest px-6 py-4 absolute top-16 -left-10 outline-5 shadow-inner hidden dropdown'>
        <ul className='text-sm font-thin whitespace-nowrap  hover:flex flex-col'>
            <li className='mb-1 hover:opacity-25'>Daily Deals</li>
            <li className='mb-1 hover:opacity-25'>Do What FloAts Your boAt</li>
            <li className='mb-1 hover:opacity-25'>Blogs</li>
            <li className='mb-1 hover:opacity-25'>Earn 100</li>
            <li className='mb-1 hover:opacity-25'>Careers</li>
            <li className='mb-1 hover:opacity-25'>Social Responsibility</li>
            <li className='mb-1 hover:opacity-25'>Store Locator</li>
        </ul>
    </div>
  )
}

export default NavDropdown