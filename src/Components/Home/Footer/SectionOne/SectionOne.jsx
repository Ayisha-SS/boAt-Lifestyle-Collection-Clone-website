import React from 'react'
import Email from './Email'
import Shop from './Shop'
import Help from './Help'
import Company from './Company'

function SectionOne() {
  return (
    <div className='flex gap-x-20 p-14 bg-slate-200 '>
        <Email/>
        <Shop/>
        <Help/>
        <Company/>
    </div>
  )
}

export default SectionOne