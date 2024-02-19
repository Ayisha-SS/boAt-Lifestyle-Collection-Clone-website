import React from 'react'
import SpeakerHead from './SpeakerHead'
import SpeakerItem from './SpeakerItem'

function Speaker() {
  return (
    <div className='bg-gradient-to-b from-[#ffffff] to-[#e6ecff] container pb-5'>
        <SpeakerHead/>
        <SpeakerItem/>
    </div>
  )
}

export default Speaker