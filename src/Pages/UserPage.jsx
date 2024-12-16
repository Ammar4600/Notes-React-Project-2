import React from 'react'
import Navbar from '../Components/Navbar'
import AddTask from '../Components/AddTask'

function UserPage() {
  return (
    <div className='h-screen w-screen flex flex-col   bg-[#F3F5F7]'>
      <Navbar/>
      <AddTask/>
    </div>
  )
}

export default UserPage
