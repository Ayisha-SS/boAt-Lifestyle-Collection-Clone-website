import React from 'react'

function Items() {
  return (
    <div className='pt-6'>
        <div className='border w-[30%] rounded-xl bg-[#fafafa] flex p-1'>
            <div className='w-[35%] mb-2'>
                <img src="src\assets\images\airpodes\AD-131.jpg" alt="Airpode-131" className='w-[100%] rounded-lg'/>
            </div>
            <div className='pl-2.5 pr-1.5 py-1'>
                <div className='flex gap-16'>
                    <div className='flex'>
                        <div className='w-4'>
                            <img src="src\assets\images\Rating.jpeg" alt="Rating" />
                        </div>
                        <p className='ml-1 text-xs'>4.4</p>
                        <b className='mx-1 text-xs'>|</b>
                        <p className='mr-1 text-xs'>1331</p>
                        <div className='w-3'>
                            <img src="src\assets\images\Tick-mark.png" alt="Verification" />
                        </div>
                    </div>
                    <div className='flex bg-slate-200 rounded-md px-1'>
                        <div className='w-3'>
                            <img src="src\assets\images\flipkart.png" alt="flipkart" />
                        </div>
                        <p className='text-[10px]'>Best Sellers</p>
                    </div>  
                </div>
                <h4 className='font-bold text-base mt-1'>Airdopes 131</h4>
                <div className='flex gap-1 pt-1 pb-2'>
                    <p className='font-bold text-sm'>899</p>
                    <p className='font-medium text-xs text-slate-400 line-through'>2990</p>
                    <p className='font-medium text-xs'>70% off</p>
                </div>
                <hr />
                <div>
                    <div className='text-[10px] flex gap-3 pt-3'>
                        <p className='bg-slate-200 rounded-md px-1'>13mm drivers</p>
                        <p className='bg-slate-200 rounded-md px-1'>IWP Technology</p>
                    </div>
                    <div className='pt-8'>
                        <button className='bg-black text-white py-2 px-2 w-[100%] rounded-xl tracking-[-0.4px] text-sm'>Add To Cart</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Items