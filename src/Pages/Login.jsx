import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Log_in } from '../Redux/FeaturesSlices/Login';
import { loadUserTasks } from '../Redux/FeaturesSlices/ManageTasks';
import toast from 'react-hot-toast';

function Login() {
  const [email ,setemail] = useState("");
  const [password ,setpassword] = useState("");
  const dispatch = useDispatch();

 function handlesubmit(e) {
  e.preventDefault()
  const data ={
    'email':email,
    'password':password,
  }
  dispatch(Log_in(data));
  dispatch( loadUserTasks())
  setemail("")
  setpassword("")
  
 }
  return (
    <div className='h-screen w-screen  bg-[#F3F5F7] flex justify-center items-center'>
      <div className="shadowbox bg-[#58B6E9] absolute  -rotate-6 p-5 rounded-md w-[420px] h-[420px]">
        </div>
        <div className='realbox bg-[#FFFFFF] rotate-0 rounded-md p-24 flex flex-col gap-12 shadow-2xl'> 
            <h1 className='text-3xl font-bold text-blue-950'>Login</h1>
            <form  className='flex flex-col gap-3'>
                <input onChange={(e)=> setemail(e.target.value)} value={email} className='p-2 rounded-md border' type="email" placeholder='Email Address' />
                <input onChange={(e)=> setpassword(e.target.value)} value={password} className='p-2 rounded-md border' type="password" placeholder='Password' />
                <button onClick={handlesubmit} className=' w-[40%] bg-[#08B7D6] text-yellow-50 p-2 rounded-md border'>Submit</button>
            </form>
      </div>
    </div>
  )
}

export default Login
