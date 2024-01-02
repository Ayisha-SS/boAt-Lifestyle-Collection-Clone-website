import React from 'react'
import { useNavigate } from 'react-router-dom';
// import {useNavigate} from "react-router-dom"
export default function Login() {
    const navigate = useNavigate();
  return (
    <div className='flex flex-col justify-center items-center mt-20'>
        <div className='mb-[10px]  '>
            <input type="email" placeholder='Email'  className='p-3  text-lg bg-slate-200 rounded-xl'
            />
        </div>
        <div className=''>
            <input type="password" placeholder='Password'  className='p-3  text-lg bg-slate-200 rounded-xl'
            />
        </div>
        <div>
            <button onClick={() => navigate('/home', {replace: true})}>LogIn</button>
        </div>
    </div>
  )
}

