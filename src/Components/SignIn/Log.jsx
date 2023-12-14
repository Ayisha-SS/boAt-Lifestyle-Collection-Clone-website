import React, { useState } from 'react'
import SignUp from './SignUp'

function Log({close}) {

    const [login,setLogin] = useState(false)
  return (
    <div className='absolute w-[219px] p-2.5  right-2 translate-x-(32%) bg-white z-10 shadow-lg shadow-[#ccc]'>
        <div className='flex justify-between'>
            <h5 className='text-base font-bold'>Hi boAthead!</h5>
            <span className='font-bold text-lg cursor-pointer' onClick={()=>close(false)}>&times;</span>
        </div>
        <div className='mt-3.5 items-center'>
            <button className='w-[100%] text-lg rounded-lg items-center bg-black text-white' onClick={() => setLogin(true)}>Login</button>
        </div>
        {login && <SignUp remove={setLogin}/>} 
    </div>
  )
}

export default Log