import React from 'react'
import TruewirelseeEarbuds from './TruewirelseeEarbuds'
import WirelessEarphones from './Wireless Earphones'
import WiredHeadphones from './WiredHeadphones'
import WiredEarphones from './WiredEarphones'
import GamingHeadphones from './GamingHeadphones'
import WirelessSpeakers from './WirelessSpeakers'
import SoundBars from './SoundBars'
import SmartWatches from './SmartWatches'
import Trimmers from './Trimmers'
import LimitedEditions from './LimitedEditions'
import CarAccessories from './CarAccessories'
import TrebelRange from './TrebelRange'
import Chargers from './Chargers'
import Cables from './Cables'

function SectionTwo() {
  return (
    <div className=' flex p-14'>
      <div className='w-[25%]'>
          <TruewirelseeEarbuds/>
          <WirelessEarphones/>
          <WiredEarphones/>
          <WiredHeadphones/>
      </div>
      <div className='w-[25%]'>
        <GamingHeadphones/>
        <WirelessSpeakers/>
        <SoundBars/>
        <SmartWatches/>
      </div>
      <div className='w-[25%]'>
        <Trimmers/>
        <LimitedEditions/>
        <CarAccessories/>
        <TrebelRange/>
      </div>
      <div className='w-[25%]'>
        <Chargers/>
        <Cables/>

      </div>
        
    </div>
  )
}

export default SectionTwo