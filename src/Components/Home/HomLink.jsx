import React from 'react'
import EarBuds from './Earbuds/EarBuds'
import Watch from './Watches/Watch'
import NeckBand from './Neckbands/NeckBand'
import Headphone from './Headphones/Headphone'
import Speaker from './Speaker/Speaker'
import PartySpeaker from './PartySpeaker/PartySpeaker'
import SoundBar from './SoundBars/SoundBar'
import Footer from "./Footer/Footer"
function HomLink() {
  return (
    <div className=''>
        <EarBuds/>
        <Watch/>
        <NeckBand/>
        <Headphone/>
        <Speaker/>
        <PartySpeaker/>
        <SoundBar/>
        <Footer/>
    </div>
        
  )
}

export default HomLink