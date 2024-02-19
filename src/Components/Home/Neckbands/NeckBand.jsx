import React from 'react'
import NeckHead from './NeckHead'
import NeckItem from './NeckItem'

function NeckBand() {
  return (
    <div className='bg-gradient-to-b from-white to-[#f2edff] container pb-5'>
        <NeckHead/>
        <NeckItem/>
    </div>
  )
}

export default NeckBand