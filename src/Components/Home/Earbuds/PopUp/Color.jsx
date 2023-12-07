import React from 'react'

function Color() {
  return (
    <div className='mt-6'>
        <h4 className='text-[14px] font-bold'>Choose your color:</h4>
        <div className='flex pt-[10px] justify-start gap-3 flex-wrap gap-y-2.5'>
            <span className='bg-[#D1D1D1] h-[32px] w-[32px] rounded-full '></span>
            <span className='bg-[#000000] h-[32px] w-[32px] rounded-full '></span>
            <span className='bg-[#D48f8f] h-[32px] w-[32px] rounded-full '></span>
            <span className='bg-[#3E5844] h-[32px] w-[32px] rounded-full '></span>

        </div>

    </div>
  )
}

export default Color