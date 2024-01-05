import React,{useState,useRef} from 'react'
import { useNavigate,Link } from 'react-router-dom'
import {BASE_URL} from "../../axiosConfig"
import axios from 'axios';

function SignUp({remove}) {
    // const name = useRef()
    // const email = useRef()
    // const password = useRef()

    // const handleClick = () => {
    //     let user = new Array();
    //     if(name.current.value && email.current.value && password.current.value)
    //     user.push({
    //         "name":name.current.value,
    //         "email":email.current.value,
    //         "password":password.current.value
    //     })
    //     localStorage.setItem("data",JSON.stringify(user));
    //     name.current.value = "";
    //     email.current.value = "";
    //     password.current.value = "";
    //     alert("Account Created Successfully");
    //     useNavigate("/");
    // }

    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [message,setMessage] = useState("");

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        setMessage("");
        e.preventDefault();
        axios
            .post(`${BASE_URL}/auth/register/`,{
                email,
                password,
                name
            })
            .then((response) => {
                let data = response.data.data;
                let status_code = response.data.StatusCode;
                if (status_code === 6000){
                    console.log(response.data);
                    localStorage.setItem("user_data",JSON.stringify(data));
                    navigate("login");
                }else {
                    setMessage(response.data.message);
                }
            })
            .catch((error) => {
                console.log(error.response);
                if(error.response.status == 401){
                    setMessage(error.response.data.detail);
                }
            });
    };

  return (
    <div className='bg-[#313131cc] h-[100%] w-[100%] fixed top-0 bottom-0 right-0 left-0 z-10 '>     
        <div className='mt-[80px] flex flex-col pt-4 pb-7 bg-[#fafafa] z-10 max-w-[580px] w-[50%] rounded-xl absolute right-60'>
            <div className='my-4 flex justify-center'>
                <h4 className='text-2xl tracking-wider'>Get <strong>started</strong></h4> 
                <span className='text-[20px] flex justify-center items-center w-7 h-7 bg-[#d0d9de33]  right-5 top-3 absolute rounded-[50%] cursor-pointer
                ' onClick={() => remove(false)}>&times;</span>
            </div>
            {/* <div className='px-10 py-6'>
                <div className='mb-[10px]  '>
                    <input type="text" placeholder='Name' ref={name} className='p-3 w-[100%] text-lg bg-slate-200 rounded-xl'
                />
                </div>
                <div className='mb-[10px]  '>
                    <input type="email" placeholder='Email' ref={email} className='p-3 w-[100%] text-lg bg-slate-200 rounded-xl'
                    />
                </div>
                <div className=''>
                    <input type="password" placeholder='Password' ref={password} className='p-3 w-[100%] text-lg bg-slate-200 rounded-xl'
                    />
                </div>
                <Link to="login">LogIn</Link>
            </div>
            {message && <p>{message}</p>}
            <div className='flex items-center justify-center'>
                <button onClick={handleClick} className='px-14 py-3 rounded-lg  bg-[#d0d9de] '>SignIn</button>
            </div> */}


                <form action="" onSubmit={handleSubmit} className='flex flex-col mx-10'>
                    <div className='mb-[10px]  '>
                        <input type="text" placeholder='Name' onChange={(e) => setName(e.target.value)} value={name} className='p-3 w-[100%] text-lg bg-slate-200 rounded-xl'
                    />
                    </div>
                    <div className='mb-[10px] '>
                        <input type="email" placeholder='Email' onChange={(e) => setEmail(e.target.value)} value={email} className='p-3 w-[100%] text-lg bg-slate-200 rounded-xl'
                        />
                    </div>
                    <div className=''>
                        <input type="password" placeholder='Password' onChange={(e) => setPassword(e.target.value)} value={password} className='p-3 w-[100%] text-lg bg-slate-200 rounded-xl'
                        />
                    </div>
                    <Link to="/login" className='flex justify-end mt-1 text-red-600'>LogIn</Link>
                    {message && <p className='text-sm text-red-600 text-center'>{message}</p>}
                    <div className='flex items-center justify-center'>
                        {/* <button  className='px-14 py-3 rounded-lg  bg-[#d0d9de] '>SignIn</button> */}
                        <Link to="/login">Sign In</Link>
                    </div>
                </form>
        </div>
    </div>
  )
}
  export default SignUp