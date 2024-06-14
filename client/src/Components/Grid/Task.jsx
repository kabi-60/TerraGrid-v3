import React from 'react'
import { Link } from 'react-router-dom'
import feedback from '../PasswordManager/feedback.png'
import done from '../PasswordManager/done.png'

const Task = () => {
  return (
    <div className="col-span-5 row-span-1 flex items-center justify-center rounded-3xl  bg-indigo-600   shadow-md">
    <Link to="/taskmanager" className="flex justify-between">
      <img src={feedback} alt="" className="h-32" />
      <img src={done} alt="" className="h-32" />
      <h1 className="text-semibold flex items-center font-mono text-2xl text-gray-200">
        Post Your Task->{' '}
      </h1>
      <img src={done} alt="" className="h-32" />
    </Link>
  </div>
  )
}

export default Task