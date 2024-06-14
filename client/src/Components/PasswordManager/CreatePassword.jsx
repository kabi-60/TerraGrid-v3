import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { Select, Option } from "@material-tailwind/react";
import './style.css'

const CreatePassword = () => {

    const [browser, setBrowser] = useState('');
    const [link, setLink] = useState('');
    const [gmail, setgmail] = useState('');
    const [password, setpassword] = useState('');
    const [create, setCreate] = useState('');
    const [category, setCategory] = useState(''); 
    const navigate = useNavigate();

    const submit = (e) => {
        e.preventDefault();
    
        // Check if any of the input fields are empty
        if (!browser || !link || !gmail || !password) {
            alert("Please fill in all fields");
            return;
        }
    
        axios.post("http://localhost:3001/password", { browser, link, gmail, password, category })
        .then(result => {
            console.log(result);
            navigate('/passwordmanager');
            toggleSearch();
            window.location.reload();
        })
        .catch(err => console.log(err));
    
    };

    const exit = (e) => {
        e.preventDefault();
        navigate('/passwordmanager');
    }

    return (
        <div class="min-h-screen bg-[#121214] py-6 flex flex-col justify-center sm:py-12">
            <div class="relative py-3 sm:max-w-xl sm:mx-auto">
                <div class="relative px-4 py-10 bg-[#18171c] mx-8 md:mx-0 shadow rounded-3xl sm:p-10">
                    <div class="max-w-md mx-auto">
                        <div class="flex items-center space-x-5">
                            <div class="h-14 w-14 bg-[#2d2b34] rounded-full flex flex-shrink-0 justify-center items-center text-indigo-500 text-2xl font-mono">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-code-xml">
                                    <path d="m18 16 4-4-4-4"/>
                                    <path d="m6 8-4 4 4 4"/>
                                    <path d="m14.5 4-5 16"/>
                                </svg>
                            </div>
                            <div class="block pl-2 font-semibold text-xl self-start text-indigo-500">
                                <h2 class="leading-relaxed">Create a Password Manager</h2>
                                <p class="text-sm text-white font-normal leading-relaxed">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                            </div>
                        </div>
                        <div class="divide-y divide-gray-200">
                            <div class="py-8 text-base leading-6 space-y-4 text-white sm:text-lg sm:leading-7">
                                <div class="flex flex-col">
                                    <label class="leading-loose">Website</label>
                                    <input type="text" onChange={(e)=>setBrowser(e.target.value)} class="bg-[#2d2b34] px-4 py-2 w-full sm:text-sm rounded-md focus:outline-none text-white" placeholder="Website Name"/>
                                </div>
                                <div class="flex flex-col">
                                    <label class="leading-loose">Link</label>
                                    <input type="text" onChange={(e)=>setLink(e.target.value)} class="bg-[#2d2b34] px-4 py-2 w-full sm:text-sm rounded-md focus:outline-none text-white" placeholder="Enter the Url"/>
                                </div>
                                <div class="flex flex-col">
                                    <label class="leading-loose">Gmail</label>
                                    <input type="text" onChange={(e)=>setgmail(e.target.value)} class="bg-[#2d2b34] px-4 py-2 w-full sm:text-sm rounded-md focus:outline-none text-white" placeholder="Enter the Gmail"/>
                                </div>
                                <div class="flex flex-col">
                                    <label class="leading-loose">Password</label>
                                    <input type="password" onChange={(e)=>setpassword(e.target.value)} class="bg-[#2d2b34] px-4 py-2 w-full sm:text-sm rounded-md focus:outline-none text-white" placeholder="Enter the Password"/>
                                </div>
                             
                                <div class="flex flex-col relative">
    <label class="leading-loose">Category</label>
    <div className="relative">
        <select
            value={category}
            onChange={(e) => setCategory(e.target.value)} // Corrected function name
            className="bg-[#2d2b34] text-gray-400 px-4 py-2 pr-10 w-full sm:text-sm text-left  rounded-md focus:outline-none"
        >

            <option value="" className='bg-[#2d2b34]'>Select the category</option> 
            <option value="college" className='bg-[#2d2b34]'>college</option> 
            <option value="personal" className='bg-[#2d2b34]'>personal</option> 
        </select>
    </div>
</div>






                            </div>
                            <div class="pt-4 flex items-center space-x-4">
                                <button onClick={exit} class="flex justify-center items-center w-full text-white bg-[#2d2b34] px-4 py-3 rounded-md focus:outline-none">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-log-out w-6 h-6 mr-3">
                                        <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
                                        <polyline points="16 17 21 12 16 7"/>
                                        <line x1="21" x2="9" y1="12" y2="12"/>
                                    </svg>
                                    Cancel
                                </button>
                                <button onClick={submit} class="bg-indigo-700 flex justify-center items-center w-full text-white px-4 py-3 rounded-md focus:outline-none">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-square-pen w-6 h-6 mr-3">
                                        <path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
                                        <path d="M18.375 2.625a2.121 2.121 0 1 1 3 3L12 15l-4 1 1-4Z"/>
                                    </svg>
                                    Create
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreatePassword
