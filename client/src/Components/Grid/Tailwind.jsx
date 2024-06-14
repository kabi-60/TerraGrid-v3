import React from 'react'
import tailwind from '../PasswordManager/tailwind.png'
const Tailwind = () => {
  return (
    <a href='https://tailwindcss.com/' className="col-span-2 row-span-1  flex items-center justify-center  rounded-3xl bg-indigo-600 py-4 shadow-md">
    <img src={tailwind} alt="" className="mr-2 h-5 " />
    <h1 className="font-mono text-lg  text-gray-200">Tailwind Css</h1>
  </a>
  )
}

export default Tailwind