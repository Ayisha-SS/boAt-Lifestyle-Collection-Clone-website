import React from 'react'
import SectionOne from './SectionOne/SectionOne'
import SectionTwo from './SectionTwo/SectionTwo'
import SectionThree from './SectionThree/SectionThree'

function Footer() {
  return (
    <div className=' mt-2 mx-4 px-1 pt-1 bg-[#EFF4F7]'>
        <SectionOne/>
        <SectionTwo/>
        <SectionThree/>
        
    </div>
  )
}

export default Footer