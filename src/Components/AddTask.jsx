import React, { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addtask, updatetask } from '../Redux/FeaturesSlices/ManageTasks';
import { useSearchParams } from 'react-router-dom';


function AddTask() {
  const [title, settitle] = useState("");
  const [content, setcontent] = useState("");
  const logeduser = useSelector((state) => state.Login.value);
  const allpaste = useSelector((state) => state.TasksManage.value);
  const formattedDate = new Intl.DateTimeFormat('en-US', { day: 'numeric', month: 'short', year: 'numeric' }).format(new Date());
  const [searchprams, setsearchprams] = useSearchParams();
  const pasteid = searchprams.get('id')

  const dispatch = useDispatch();

  useEffect(() => {
    if (pasteid) {
      const paste = allpaste.taskList.find((e) => e._Id === pasteid);
     if(paste){

       settitle(paste.title);
       setcontent(paste.content);
      }
     
    } else{
      settitle("")
      setcontent('')
    }
   
  }, [pasteid])


  function handleaddtask(e) {
    const datas = {
      email: logeduser.email,
      title: title,
      content: content,
      _Id: pasteid  || Math.random().toString(36),
      date: formattedDate,
    }

    if(!pasteid){
      dispatch(addtask(datas)); 
   
    } else{
      dispatch(updatetask(datas))
    }
    settitle("")
    setcontent('')
  }


  return (
    <div className=' h-full flex justify-center p-9'>
      <div className=' parent flex flex-col gap-5 items-center h-[100vh '>
        <div className='part1 flex gap-10'>
          <input onChange={(e) => settitle(e.target.value)} value={title} type="text" placeholder='Title' className='p-2  px-5 rounded-md w-[49vw]' />
          <button onClick={handleaddtask} className='bg-[#1F57DB] p-2 px-10 text-yellow-50 font-semibold rounded-md'>{pasteid ? 'Update Task' : 'Add Task'}</button>
        </div>
        <div className=' part2 border w-[60vw]'>
          <div className="dots border px-5 flex gap-3 font-extrabold text-4xl ">
            <p className='text-yellow-400'>•</p>
            <p className='text-green-700'>•</p>
            <p className='text-red-600'>•</p>
          </div>
          <textarea onChange={(e) => setcontent(e.target.value)} value={content} className='px-5 py-2 w-[100%] h-[30vw] ' placeholder='Write your content here'></textarea>
        </div>
      </div>
    </div>
  )
}

export default AddTask
