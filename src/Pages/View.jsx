import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useParams, useSearchParams } from 'react-router-dom'
import Navbar from '../Components/Navbar';

const View = () => {
  const tasks = useSelector((state) => state.TasksManage.value.taskList || []);
  const [data ,setdata] = useState("");
  const prams = useParams();


  useEffect(()=>{
    const index = tasks.findIndex((e)=> e._Id == prams.id)
   setdata(tasks[index])
  },[tasks])

  return (
  <div>
    <Navbar />
  
    <div className=' h-full flex justify-center p-9'>
    <div className='flex flex-col gap-5 items-center h-[100vh '>
      <div className='flex gap-10 vpart1'>
        <input disabled value={data.title ? data.title : '' }  type="text" placeholder='Title' className='p-2  border px-5 bg-slate-100 rounded-md w-[49vw]' />
      </div>
      <div className=' bg-slate-100 part2 border w-[60vw]'>
        <div className="dots border px-5 flex gap-3 font-extrabold text-4xl ">
          <p className='text-yellow-400'>•</p>
          <p className='text-green-700'>•</p>
          <p className='text-red-600'>•</p>
        </div>
        <textarea disabled value={data.content ? data.content : ''} className='px-5 py-2 w-[100%] h-[30vw] ' placeholder='Write your content here'></textarea>
      </div>
    </div>
    </div>
  </div>
  )
}

export default View
