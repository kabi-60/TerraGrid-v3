import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function PasswordManager() {
    const [show, setShow] = useState(null);
    const {id}= useParams();
    const [tasks, setTasks] = useState([]);
    const navigate = useNavigate();
    const [category, setCategory] = useState('');    
    const [filter, setFilter] = useState("All"); // Default filter is "All"
    const [currentPage, setCurrentPage] = useState(1);
    const [tasksPerPage] = useState(6); // Number of tasks per page

    useEffect(() => {
        axios.get("http://localhost:3001/password")
          .then(result => setTasks(result.data))
          .catch(err => console.error(err));
    }, []);

    const handleDelete = (id) => {
        axios.delete("http://localhost:3001/password/"+id)
            .then(result => {
                console.log(result);
                setTasks(tasks.filter(task => task._id !== id));
            })
            .catch(err => console.log(err));  
    };
    
    const handleCopyPassword = (password) => {
        navigator.clipboard.writeText(password);
        alert("Password copied to clipboard!");
    };

    const filteredTasks = tasks.filter(task => {
        if (filter === "All") return true;
        if (filter === "personal") return task.category === "personal";
        if (filter === "college") return task.category === "college";
    });

    // Get current tasks
    const indexOfLastTask = currentPage * tasksPerPage;
    const indexOfFirstTask = indexOfLastTask - tasksPerPage;
    const currentTasks = filteredTasks.slice(indexOfFirstTask, indexOfLastTask);

    // Change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);
    const nextPage = () => {
        // Calculate the index of the last task on the current page
        const indexOfLastTask = currentPage * tasksPerPage;
        // If the index of the last task is greater than or equal to the total number of tasks
        if (indexOfLastTask >= filteredTasks.length) {
            // Do not increment the current page
            return;
        }
        // Otherwise, increment the current page
        setCurrentPage(currentPage + 1);
    };
    
    const prevPage = () => setCurrentPage(currentPage - 1);

    return (
        <>
            <div className="">
                
                <div className="sm:px-6 w-full h-screen bg-[#121214]">
                    <div className="px-4 md:px-10 py-4 flex justify-between md:py-3">
                    <div className='text-left '>
        <Link to='/'>
        <p className='text-white text-3xl font-[700]'>Terra<span className='text-indigo-700'>Grid</span><span className='text-6xl font-bold'>.</span></p> 
        </Link>
        </div>
        <div>
     
        </div>
                    </div>
                    <div className="bg-[#18171c] rounded-xl  py-4 md:py-7 px-4 md:px-8 xl:px-10">
                        <div className="sm:flex items-center justify-between">
                            <div className="flex items-center">
                            <a href="javascript:void(0)" onClick={() => setFilter("All")}>
                                <div className={`py-2 px-8 ${filter === "All" ? "bg-indigo-100 text-indigo-700" : "text-white hover:text-indigo-700 hover:bg-indigo-100"} rounded-full uppercase `}>
                                    <p>All</p>
                                </div>
                            </a>
                            <a href="javascript:void(0)" onClick={() => setFilter("college")}>
                                <div className={`py-2 px-8 ${filter === "Pending" ? "bg-indigo-100 text-indigo-700" : "text-white hover:text-indigo-700 hover:bg-indigo-100"} rounded-full uppercase  ml-4 sm:ml-8`}>
                                    <p>College</p>
                                </div>
                            </a>
                            <a href="javascript:void(0)" onClick={() => setFilter("personal")}>
                                <div className={`py-2 px-8 ${filter === "Done" ? "bg-indigo-100 text-indigo-700" : "text-white hover:text-indigo-700 hover:bg-indigo-100"} rounded-full uppercase  ml-4 sm:ml-8`}>
                                    <p>Personal</p>
                                </div>
                            </a>

                            </div>
                         
                        </div>
                        <div className="mt-7 h-[55vh] overflow-  ">
                            <table className="w-full whitespace-nowrap">
                                <thead className="text-center ">
                                    <tr className=" ">
                                        <th></th>
                                        <th className="text-sm text-indigo-600 uppercase">Browser</th>
                                        <th className="text-sm text-indigo-600 uppercase">Link</th>
                                        <th className="text-sm text-indigo-600 uppercase"> Gmail</th>
                                        <th className="text-sm text-indigo-600 uppercase">Password</th>
                                        <th className="text-sm text-indigo-600 uppercase">CreatedAt</th>
                                        <th className="text-sm text-indigo-600 uppercase">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="">
                                    {currentTasks.map((task) => (
                                        <tr className="h-16 border-b " key={task._id}>
                                            <td>
                                                <div className="">
                                                    <div className="rounded-sm w-6 h- flex flex-shrink-0 justify-center items-center relative">
                                                        <div className="text-indigo-600 rounded-sm">
                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                                                <path stroke-linecap="round" stroke-linejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
                                                            </svg>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="flex items-center justify-center ">
                                                    <p className="text-base font-medium leading-none text-gray-300 uppercase mr-2">{task.browser}</p>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} class='' viewBox="0 0 16 16" fill="none">
                                                        <path d="M6.66669 9.33342C6.88394 9.55515 7.14325 9.73131 7.42944 9.85156C7.71562 9.97182 8.02293 10.0338 8.33335 10.0338C8.64378 10.0338 8.95108 9.97182 9.23727 9.85156C9.52345 9.73131 9.78277 9.55515 10 9.33342L12.6667 6.66676C13.1087 6.22473 13.357 5.62521 13.357 5.00009C13.357 4.37497 13.1087 3.77545 12.6667 3.33342C12.2247 2.89139 11.6251 2.64307 11 2.64307C10.3749 2.64307 9.77538 2.89139 9.33335 3.33342L9.00002 3.66676" stroke="#3B82F6" strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M9.33336 6.66665C9.11611 6.44492 8.8568 6.26876 8.57061 6.14851C8.28442 6.02825 7.97712 5.96631 7.66669 5.96631C7.35627 5.96631 7.04897 6.02825 6.76278 6.14851C6.47659 6.26876 6.21728 6.44492 6.00003 6.66665L3.33336 9.33332C2.89133 9.77534 2.64301 10.3749 2.64301 11C2.64301 11.6251 2.89133 12.2246 3.33336 12.6666C3.77539 13.1087 4.37491 13.357 5.00003 13.357C5.62515 13.357 6.22467 13.1087 6.66669 12.6666L7.00003 12.3333" stroke="#3B82F6" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                </div>
                                            </td>
                                            <td className="overflow-hidden">
                                                <div className="flex items-center justify-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-cable text-indigo-600 ml-10 cursor-pointer"><path d="M17 21v-2a1 1 0 0 1-1-1v-1a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1"/><path d="M19 15V6.5a1 1 0 0 0-7 0v11a1 1 0 0 1-7 0V9"/><path d="M21 21v-2h-4"/><path d="M3 5h4V3"/><path d="M7 5a1 1 0 0 1 1 1v1a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a1 1 0 0 1 1-1V3"/></svg>
                                                    {/* <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-hash text-gray-600 cursor-pointer"><line x1="4" x2="20" y1="9" y2="9"/><line x1="4" x2="20" y1="15" y2="15"/><line x1="10" x2="8" y1="3" y2="21"/><line x1="16" x2="14" y1="3" y2="21"/></svg> */}
                                                    <a className="text-sm leading-none text-blue-500 ml-2 w-96" href={task.link}>{task.link}</a>
                                                </div>
                                            </td>
                                            <td className="flex justify-evenly mt-5 ml-10 ">
                                                <div className="flex items-center justify-center">
                                                    <p className="text-sm leading-none text-white ">{task.gmail}</p>
                                                </div>
                                    <svg xmlns="http://www.w3.org/2000/svg"  onClick={() => handleCopyPassword(task.gmail)} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"  class="lucide lucide-copy text-indigo-600 cursor-pointer hover:text-indigo-800"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>
                                            </td>
                                            <td className="">
                                                <div className="flex ml-20">
                                                    <input
                                                        type="password"
                                                        value={task.password}
                                                        className="text-center text-sm leading-none text-white  bg-transparent border-none focus:outline-none"
                                                        readOnly
                                                    />
                                                    <svg xmlns="http://www.w3.org/2000/svg"  onClick={() => handleCopyPassword(task.password)} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"  class="lucide lucide-copy text-indigo-600 cursor-pointer hover:text-indigo-800"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>
                                                </div>
                                            </td>
                                            <td className="">
                                                <td className="">
                                                    <p className="text-sm leading-none text-white ml-2">{new Date(task.createdAt).toLocaleString()}</p>
                                                </td>
                                            </td>
                                            <td className="">
                                                <div className="flex items-center justify-center ml-5">
                                                    <Link to={'/updatepassword/'+task._id} className="mr-2">
                                                        <svg xmlns="http://www.w3.org/2000/svg"width={20} height={20}   viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-indigo-600 hover:text-indigo-800 cursor-pointer lucide lucide-settings-2"><path d="M20 7h-9"/><path d="M14 17H5"/><circle cx="17" cy="17" r="3"/><circle cx="7" cy="7" r="3"/></svg>
                                                    </Link>
                                                    <svg xmlns="http://www.w3.org/2000/svg"width={20} height={20}  onClick={() => handleDelete(task._id)} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class= "text-gray-600 hover:text-red-500 cursor-pointer lucide lucide-trash-2"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/><line x1="10" x2="10" y1="11" y2="17"/><line x1="14" x2="14" y1="11" y2="17"/></svg>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <div className="flex justify-center">
                            <button onClick={prevPage} disabled={currentPage === 1} className="mr-2 px-4 py-1 bg-indigo-600 text-white rounded-full">Prev</button>
                            <button onClick={nextPage} disabled={currentTasks.length < tasksPerPage} className="px-4 py-1 bg-indigo-600 text-white rounded-full">Next</button>
                        </div>
                        <div className="flex justify-end">
                            <Link to='/createpassword' onclick="popuphandler(true)" className=" flex w-24 justify-center px-2 py-2 bg-indigo-700 hover:bg-indigo-600 rounded-full">
                                <p className="text-sm font-medium  text-white"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plus"><path d="M5 12h14"/><path d="M12 5v14"/></svg> </p>
                            </Link>
                        </div>  
                    </div>
                </div>
            </div>
        </>
    );
}

export default PasswordManager;
