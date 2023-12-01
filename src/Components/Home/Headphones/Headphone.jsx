import React from 'react'
import PhoneHead from './PhoneHead'
import PhoneItem from './PhoneItem'

function Headphone() {
  return (
    <div className='bg-gradient-to-b from-[#ffffff] to-[#dfeeeb] container pb-2'>
        <PhoneHead/>
        <PhoneItem/>
    </div>
  )
}

export default Headphone