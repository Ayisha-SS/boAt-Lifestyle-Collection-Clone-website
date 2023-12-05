import React from 'react'

function Powerbanks() {
  return (
    <div className='mb-14'>
        <h3 className='font-extrabold text-base text-[#1A2024] pb-4'>Powerbanks</h3>
        <div className='pb-4'>
            <h5 className='text-sm text-[#1A2024] pb-2 '>Shop by Features</h5>
            <ul className='text-xs text-[#868c91] leading-relaxed'>
                <li>Power Bank 10000mah</li>
                <li>Power Bank 20000mah</li>
                <li>Mobile Power Bank</li>
                <li>Fast Charging Power Bank</li>
                <li>Power Bank for iPhone</li>
            </ul>
        </div>
        <div>
        <h5 className='text-sm text-[#1A2024] pb-2'>Shop by Price</h5>
            <ul className='text-xs text-[#868c91] leading-relaxed'>
                <li>Power Bank Under 1000</li>
                <li>Power Bank Under 1500</li>
                <li>Power Bank Under 2000</li>
                
            </ul>
        </div>
    </div>
  )
}

export default Powerbanks