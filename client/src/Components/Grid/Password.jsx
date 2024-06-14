import React from 'react'
import { Link } from 'react-router-dom'
import folder from '../PasswordManager/folder.png'
const Password = () => {
  return (
    <div className="col-span-4 row-span-3  flex items-center justify-center rounded-3xl  bg-indigo-600 shadow-md">
    <Link to="/passwordmanager " className="grid-cols-2a grid">
    
      <img src={folder} alt="" className="h-64" />
      <div>
        <p className="mt-2 text-center font-mono text-2xl text-gray-200 ">
          Password Manager
        </p>
      </div>
    </Link>
    <div></div>
  </div>
  )
}

export default Password