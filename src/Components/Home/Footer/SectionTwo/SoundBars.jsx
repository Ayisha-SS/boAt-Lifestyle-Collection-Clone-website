import React from 'react'

function SoundBars() {
  return (
    <div className='mb-14'>
        <h3 className='font-extrabold text-base text-[#1A2024] pb-4'>Soundbars</h3>
        <div className='pb-4'>
            <h5 className='text-sm text-[#1A2024] pb-2 '>Shop by Features</h5>
            <ul className='text-xs text-[#868c91] leading-relaxed'>
                <li>Dolby Soundbars</li>
                <li>Soundbar with Wireless Subwoofer</li>
                <li>Soundbar with Wired Subwoofer</li>
                <li>Alexa Enabled Soundbar</li>
                <li>Bluetooth Soundbar</li>
            </ul>
        </div>
        <div>
        <h5 className='text-sm text-[#1A2024] pb-2'>Shop by Price</h5>
            <ul className='text-xs text-[#868c91] leading-relaxed'>
                <li>Soundbars Under 100000</li>
                <li>Soundbars Under 200000</li>
                <li>Soundbars Under 3000</li>
                <li>Soundbars Under 5000</li>
                <li>Soundbars Above 20000</li>
            </ul>
        </div>
    </div>
  )
}

export default SoundBars