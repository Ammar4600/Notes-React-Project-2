import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar'
import { useDispatch, useSelector } from 'react-redux'
import { removetask, updatetask } from '../Redux/FeaturesSlices/ManageTasks';
import toast from 'react-hot-toast';
import { Link, useSearchParams } from 'react-router-dom';


function Notes() {
    const tasks = useSelector((state) => state.TasksManage.value.taskList || []);
    const dispatch = useDispatch();
    const [search, setsearch] = useState("")
    const filtered = tasks.filter((task) => task.title.includes(search));

    const [searchprams, setsearchprams] = useSearchParams();
    const url = searchprams.get('id')
    console.log(url)


    function handledelete(item) {
        dispatch(removetask(item))
        dispatch(updatetask())
    }




    return (
        <div>
            <Navbar />
            <div className=' h-full flex-col flex  items-center justify-center p-9'>
                <div className='flex flex-col gap-5 items-center h-[100vh '>

                    <div className='searchnav flex gap-10'>
                        <input onChange={(e) => setsearch(e.target.value)} value={search} type="search" placeholder='Search Notes here ' className='p-2  px-5 rounded-md w-[49vw] border' />
                        <button className='bg-[#1F57DB] p-2 px-10 text-yellow-50 font-semibold rounded-md'>Search</button>
                    </div>
                    <div className='shado  border w-[60vw]'>
                        <div className="dots border px-5 flex gap-3 font-extrabold text-4xl ">
                            <p className='text-yellow-400'>•</p>
                            <p className='text-green-700'>•</p>
                            <p className='text-red-600'>•</p>
                        </div>

                    </div>

                    <div className=' box_parent h-[50vw] border  w-[60vw] overflow-scroll flex flex-col gap-4'>
                        {filtered && filtered.map((item, idx) => (

                            <div key={idx} className=' box flex border m-2 p-5 px-5 justify-between items-center'>
                                <div className='flex flex-col gap-4'>
                                    <h1 className='text-2xl'>{item.title}</h1>
                                    <p>{item.content}</p>
                                </div>
                                <div className='flex flex-col items-center h-[100%]'>
                                    <div className='flex gap-5 p-4'>
                                        <Link to={`/?id=${item._Id}`}>
                                            <i className="ri-edit-2-line"></i>
                                        </Link>

                                        <i onClick={() => handledelete(item)} className="ri-delete-bin-7-line"></i>
                                        <Link to={`/notes/${item._Id}`} > <i onClick={() => handleview(item)} className="ri-eye-line"></i></Link>
                                        <i onClick={() => { navigator.clipboard.writeText(item.title), toast('Copied to clipboard') }} className="ri-file-copy-line"></i>
                                    </div>
                                    <div className='flex gap-5'>
                                        <i className="ri-calendar-event-line"></i>
                                        <p>{item.date}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Notes
