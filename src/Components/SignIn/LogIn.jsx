import React, { useState } from 'react'

import { Message } from 'semantic-ui-react'
import axios from 'axios'
import {BASE_URL} from "../../axiosConfig"
import { useNavigate,Link } from 'react-router-dom';



function LogIn() {
	const [username,setUsername] = useState("");
	const [password,setPassword] = useState("");
    const [message,setMessage] = useState("");
	const navigate = useNavigate();

	const handleSubmit = (e) => {
		setMessage("")
		e.preventDefault();
		axios.post(`${BASE_URL}/auth/token/`,{
			username,
			password
		})
		.then((response) => {
			let data = response.data;
			localStorage.setItem("user_data",JSON.stringify(data));
			navigate("/");
		})
		.catch((error) => {
			console.error(error.response.status);
			if(error.response.status == 401){
				setMessage(error.response.data.detail);
			}
		});
	};
  return (
    <div className='bg-[#313131cc] h-[100%] w-[100%] fixed top-0 bottom-0 right-0 left-0 z-10 '>
      <div className='mt-[80px] flex flex-col pt-4 pb-7 bg-[#fafafa] z-10 max-w-[580px] w-[50%] rounded-xl absolute right-60'>
		<div className='my-4 flex justify-center'>
			<h3 className='text-2xl tracking-wider'>LogIn</h3>
		</div>
     
        <form action="" onSubmit={handleSubmit} className='flex flex-col mx-10 justify-center items-center'>
			<input className='p-3 w-[70%] text-lg bg-slate-200 rounded-xl mb-5'
				type="email" 
				value={username}
				placeholder='Email'
				onChange={(e) => setUsername(e.target.value)}
			/>
			<input className='p-3 w-[70%] text-lg bg-slate-200 rounded-xl mb-5'
				type="password" 
				value={password}
				placeholder='Password' 
				onChange={(e) => setPassword(e.target.value)}/>
			{message && <p className='text-sm text-red-600 text-center'>{message}</p>}
			<div className='flex items-center justify-center'>
				<Link to="/">LogIn</Link>
				{/* <button  className='px-14 py-3 rounded-lg  bg-[#d0d9de] active:red'>LogIn</button> */}
            </div>
		</form>
		</div>
    </div>
  )
}

export default LogIn