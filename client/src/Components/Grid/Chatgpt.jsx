import React from 'react'
import light from '../PasswordManager/light.png'
const Chatgpt = () => {
  return (
    <a href='https://chatgpt.com/' className="col-span-2 row-span-1  grid   items-center justify-center rounded-3xl bg-indigo-600 shadow-md">
    <img src={light} alt="" className="h-56" />
    <h1 className="text-center font-mono text-lg text-gray-200">
      ChatGPT
    </h1>
  </a>
  )
}

export default Chatgpt