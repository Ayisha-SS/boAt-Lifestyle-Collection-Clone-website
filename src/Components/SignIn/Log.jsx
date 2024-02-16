import React, { useState,useContext} from 'react'
import {Link} from "react-router-dom"
import SignUp from './SignUp'
import { Cart } from '../Context/Context'

function Log({close}) {
	const {userData,updateUserData} = useContext(Cart)
	const handleLogout = () => {
		updateUserData({ type: "LOGOUT"});
	};
    const [login,setLogin] = useState(false)
  return (
    <div className='absolute  p-2.5  right-2 translate-x-(32%) bg-white z-10 shadow-lg shadow-[#ccc]'>
        <div className='flex justify-between w-[150px]'>
            <h5 className='text-base font-bold'>Hi boAthead!</h5>
            <span className='font-bold text-lg cursor-pointer' onClick={()=>close(false)}>&times;</span>
        </div>
        <div className='mt-2 items-center'>
            <button className='w-[100%] text-lg rounded-lg items-center bg-black text-white' onClick={() => setLogin(true)}>Sign Up</button>
		
			{/* {userData ? (
				<Link className='text-lg rounded-lg py-2 px-6 bg-black text-white' onClick={() => handleLogout()}>Sign Out</Link>
			) : (
				<Link to="signup" className='text-lg rounded-lg py-2 px-6 bg-black text-white' onClick={() => setLogin(true)}>Sign Up</Link>
			)} */}
			    
        </div>
        {login && <SignUp remove={setLogin}/>} 
    </div>
  )
}

export default Log