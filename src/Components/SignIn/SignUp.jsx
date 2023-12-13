import React,{useRef} from 'react'
import { json, useNavigate} from 'react-router-dom'

function SignUp({close}) {
    const navigate = useNavigate()
    const name = useRef()
    const email = useRef()
    const password = useRef()

    const handleClick = (() => {
        console.log("hi");
        
        // let user = new Array();
        // if(name.current.value && email.current.value && password.current.value)
        // {
        //     // localStorage.setItem("name",name.current.value)
        //     // localStorage.setItem("email",email.current.value)
        //     // localStorage.setItem("password",password.current.value)
        //     // alert("Account Created Successfully")
        //    


        
        // }
        let user = new Array();
        user = JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")):[]
        if(user.some((v) => {
            return v.email == email
        })){
            alert("Duplicate Data")
        }
        else{
            user.push({
                "name":name,
                "email":email,
                "password":password
            })
            localStorage.setItem("users",JSON.stringify(user));            
            alert("Successfully Registered");
            navigate("/")
        }
    })
  return (
    <div className='bg-[#313131cc] h-[100%] w-[100%] fixed top-0 bottom-0 right-0 left-0 z-10'>
            <span className='text-[20px] bg-white p-2 right-5 absolute rounded-full cursor-pointer
            ' onClick={()=>close(false)}>&times;</span>
        <div className='mt-[100px] flex flex-col justify-center items-center '>
            <div className='mb-[10px]  '>
                <input type="text" placeholder='Name' ref={name} className='p-3 h-[] w-[100%] text-lg'/>
            </div>
            <div className='mb-[10px]  '>
                <input type="email" placeholder='Email' ref={email} className='p-3 h-[] w-[100%] text-lg'/>
            </div>
            <div className='mb-[10px]  '>
                <input type="password" placeholder='Password' ref={password} className='p-3 h-[] w-[100%] text-lg'/>
            </div>
            <button onClick={handleClick} className='h-[30px] w-[10%] bg-blue-800'>SignIn</button>
        </div>
    </div>
  )
}

export default SignUp