import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const Task = () => {
    const [tasks, setTasks] = useState([]);
    const { id } = useParams(); 
    const [content, setContent] = useState('');
    const navigate = useNavigate();
    const [searchVisible, setSearchVisible] = useState(false);

    // Fetch tomorrow's tasks when component mounts
    useEffect(() => {
        axios.get("http://localhost:3001/get")
            .then(result => setTasks(result.data))
            .catch(err => console.log(err));
    }, []);

    // Submit tomorrow's task
    const submit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:3001/add", { content })
            .then(result => {
                console.log(result);
                navigate('/today');
                toggleSearch();
                window.location.reload();
            })
            .catch(err => console.log(err));
    };


    // Delete tomorrow's task
    const handleDelete = (taskId) => {
        axios.delete(`http://localhost:3001/delete/${taskId}`)
            .then(result => {
                console.log(result);
                setTasks(tasks.filter(task => task._id !== taskId));
                window.location.reload();
            })
            .catch(err => console.log(err));  
    };

    // Toggle line-through style on task content
    const toggleLineThrough = (index) => {
        const updatedTasks = [...tasks];
        updatedTasks[index].completed = !updatedTasks[index].completed;
        setTasks(updatedTasks);
    };

    const toggleSearch = () => {
        setSearchVisible(!searchVisible);
    };

    return (
        <div className='h-[45%]  relative'>
         
            <div className=''>
                <div id="tasks" className="my-6 ">
                    {tasks.map((task, index) => (
                        <div
                            key={index}
                            className={`flex justify-between items-center bg-[#2d2b34] mb-3 rounded-md  py-4 px-5   ${task.completed ? '' : ''}`}
                        >
                            <div className="inline-flex items-center space-x-2">
                                <div className='check' onClick={() => toggleLineThrough(index)}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 text-indigo-600">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>

                                </div>
                                <div className=''>
                                    <p className={`text-xl  text-center  text-white font-semibold ${task.completed ? 'line-through opacity-50' : ''}`}>{task.content}</p>
                                </div>
                            </div>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" onClick={() => handleDelete(task._id)} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-indigo-600 hover:text-indigo-700 hover:cursor-pointer">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                </svg>
                            </div>
                        </div>
                    ))}
            </div>
            <div className="text-end space-x-2 absolute -bottom-40 right-0  ">
                    <button className="p-2  rounded-full inline-flex space-x-1 items-center text-white bg-indigo-600 hover:bg-indigo-700" onClick={toggleSearch}>
                       
                        <span className="text-sm font-medium px-5 py-1 ">Add Task</span>
                    </button>
                </div>
            </div>

            <div className={`fixed inset-0 bg-black bg-opacity-50 z-50 ${searchVisible ? '' : 'hidden'}`}>
                <div className='flex items-center justify-center h-full'>
                    <div className="flex flex-col items-center bg-[#18171c] p-8 rounded-lg shadow-lg w-96">
                        <h1 className='text-white text-2xl mb-4'>Type Your Task Here</h1>
                        <input 
                            type="search" 
                            onChange={(e) => setContent(e.target.value)} 
                            className="w-full px-4 py-3 text-lg text-white bg-[#2d2b34] focus:outline-none rounded-full mb-4" 
                            placeholder="Enter the task" 
                            required={true} 
                            minLength={8} 
                        />
                        <button 
                            type="submit" 
                            onClick={submit} 
                            className="w-full py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full font-semibold focus:outline-none"
                        >
                            Add Task
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Task;
