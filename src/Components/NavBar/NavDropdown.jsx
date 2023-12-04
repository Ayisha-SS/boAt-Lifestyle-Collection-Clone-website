import React from 'react'

function NavDropdown() {
  return (
    <div className='bg-white  p-6 absolute top-28 shadow-lg hidden '>
        <ul className='text-sm font-thin  hover:flex flex-col'>

            <li className='hover:opacity-25'>Daily Deals</li>
            <li className='hover:opacity-25'>Do What FloAts Your boAt</li>
            <li className='hover:opacity-25'>Blogs</li>
            <li className='hover:opacity-25'>Earn 100</li>
            <li className='hover:opacity-25'>Careers</li>
            <li className='hover:opacity-25'>Social Responsibility</li>
            <li className='hover:opacity-25'>Store Locator</li>
        </ul>

    </div>
  )
}

export default NavDropdown