import React from 'react'
import EarbudsHead from './EarbudsHead'
import EarbudsItem from './EarbudsItem'

function EarBuds() {
  return (
    <div className='bg-gradient-to-b from-[#edfefe] to-[#eeffff] container pb-2'>
        <EarbudsHead/>
        <EarbudsItem/>
    </div>
  )
}

export default EarBuds