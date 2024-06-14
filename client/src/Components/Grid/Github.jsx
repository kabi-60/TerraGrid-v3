import React from 'react'
import github from '../PasswordManager/github.png'

const Github = () => {
  return (
    <a href='https://github.com/' className=" col-span-2 row-span-2 grid cursor-auto justify-center rounded-3xl  bg-indigo-600 text-center shadow-md">
            <div className=" flex items-center justify-center ">
              <img src={github} alt="" className="h-48" />
            </div>
            <h1 className="font-mono text-lg text-gray-200">GitHub</h1>
          </a>
  )
}

export default Github