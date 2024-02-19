import React, { useState,useContext,useEffect } from 'react'
import {Link} from "react-router-dom"
import SignUp from './SignUp'
import { Cart } from '../Context/Context'

function Log({ close }) {
	const {userData,updateUserData} = useContext(Cart);
  const [login,setLogin] = useState(false);
  // const [showPopup, setShowPopup] = useState(true);
  

//   useEffect(() => {
//     // Set showPopup to true when the component mounts
//     setLogin(true);
//     setShowPopup(true);
// }, []);

	const handleLogout = () => {
		updateUserData({ type: "LOGOUT"});
	};

  return (
    <div className='absolute  p-2.5  right-2 translate-x-(32%) bg-white z-10 shadow-lg shadow-[#ccc]'>
        <div className='flex justify-between w-[150px]'>
            <h5 className='text-base font-bold'>Hi boAthead!</h5>
            <span className='font-bold text-lg cursor-pointer' onClick={()=>close(false)}>&times;</span>
        </div>
        <div className='mt-2 items-center'>
            {/* <button className='w-[100%] text-lg rounded-lg items-center bg-black text-white' onClick={() => setLogin(true)}>Sign Up</button> */}
		
          {userData ? (
            <button className='w-[100%] text-lg rounded-lg items-center bg-black text-white' onClick={handleLogout}>Log Out</button>
          ) : (
            <button to="signup" className='w-[100%] text-lg items-center rounded-lg bg-black text-white' onClick={() => setLogin(true)}>Log In</button>
          )}
			  </div>
        {login && <SignUp remove={setLogin}/>} 
        {/* {showPopup && <SignUp remove={setShowPopup}/>} */}
    </div>
  )
}

export default Log