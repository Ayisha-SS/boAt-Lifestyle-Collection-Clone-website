import React,{useRef, useState} from 'react'
import { useNavigate} from 'react-router-dom'

function SignUp({remove}) {
    const navigate = useNavigate()
    const name = useRef()
    const email = useRef()
    const password = useRef()

    const handleClick = () => {
        let user = new Array();
        if(name.current.value && email.current.value && password.current.value)
        user.push({
            "name":name.current.value,
            "email":email.current.value,
            "password":password.current.value
        })

        localStorage.setItem("data",JSON.stringify(user));
        name.current.value = ""
        email.current.value = ""
        password.current.value = ""
        alert("Account Created Successfully");
        navigate("/")
    }

  return (
    <div className='bg-[#313131cc] h-[100%] w-[100%] fixed top-0 bottom-0 right-0 left-0 z-10 '>     
        <div className='mt-[80px] flex flex-col p-4 bg-[#fafafa] z-10 max-w-[580px] w-[100%] rounded-3xl absolute right-20'>
            <div className='my-4 items-center'>
            <h4 className='text-2xl tracking-wider'>Get <strong>started</strong></h4> 
            <span className='text-[20px] flex justify-center items-center w-7 h-7 bg-[#d0d9de33]  right-5 top-3 absolute rounded-[50%] cursor-pointer
            ' onClick={() => remove(false)}>&times;</span>
            </div>
            <div className='px-10 py-6'>
            <div className='mb-[10px]  '>
                <input type="text" placeholder='Name' ref={name} className='p-3 w-[100%] text-lg bg-slate-200 rounded-xl'
               />
            </div>
            <div className='mb-[10px]  '>
                <input type="email" placeholder='Email' ref={email} className='p-3 w-[100%] text-lg bg-slate-200 rounded-xl'
                />
            </div>
            <div className='mb-[10px]  '>
                <input type="password" placeholder='Password' ref={password} className='p-3 w-[100%] text-lg bg-slate-200 rounded-xl'
                />
            </div>
            <button onClick={handleClick} className='px-14 py-3 rounded-lg  bg-[#d0d9de] '>SignIn</button>
            </div>
        </div>
    </div>
  )
}
  export default SignUp