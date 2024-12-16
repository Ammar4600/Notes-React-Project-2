import React from 'react'
import { useDispatch } from 'react-redux'
import { Log_out } from '../Redux/FeaturesSlices/Login'

import {  Link } from 'react-router-dom';

function Navbar() {
  const dispatch = useDispatch()
  function handleclick() {
    dispatch(Log_out("s"))
  }
  return (
    <div className=' bg-[#207AD6] flex justify-between py-2 px-10 text-yellow-50 font-semibold'>
        <div className='flex gap-5 items-center '>
            <img className="w-14 h-14 object-cover rounded-full " src="/public/logo2.png" alt="" />
           <Link className='hover:text-yellow-300 transition-all duration-300' to="/">Home</Link>
           <Link className='hover:text-yellow-300 transition-all duration-300' to="/notes">Notes</Link>
        </div>
        <div className='flex gap-5 ite'>
            <img src="https://plus.unsplash.com/premium_photo-1689539137236-b68e436248de?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8fDA%3D" alt="pic" className="w-12 h-12 object-cover rounded-full border-2 border-gray-200 shadow-lg" />
            <button onClick={handleclick}  class=" logout px-4  bg-red-600 text-white rounded-md border border-transparent hover:bg-red-500 transition duration-150">Logout</button>
        </div>
    </div>
  )
}

export default Navbar
