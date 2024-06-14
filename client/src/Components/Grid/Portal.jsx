import React from 'react'
import college from '../PasswordManager/college.png'

const Portal = () => {
  return (
    <a href='https://skcet530.examly.io/login' className="cursor-pointer col-span-2 row-span-1 grid justify-center rounded-3xl   bg-indigo-600 text-center shadow-md">
    <div className=" flex items-center justify-center">
      <img src={college} alt="" className="h-48" />
    </div>
    <h1 className="font-mono text-lg text-gray-200">SKCET</h1>
  </a>
  )
}

export default Portal