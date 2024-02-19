import React from 'react'
import SoundbarHead from './SoundbarHead'
import SoundbarItem from './SoundbarItem'

function SoundBar() {
  return (
    <div className='bg-gradient-to-b from-[#ffffff] to-[#f3e5e5] container pb-5'>
        <SoundbarHead/>
        <SoundbarItem/>
    </div>
  )
}

export default SoundBar