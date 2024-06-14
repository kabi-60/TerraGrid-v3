import React from 'react'
import wifi from '../PasswordManager/wifi.png'

const Wifi = () => {
  return (
    <div className=" col-span-1 row-span-1 flex items-center justify-center  rounded-3xl  border border-indigo-600  bg-indigo-600 text-gray-300  shadow-md hover:bg-indigo-600">
    <a href="http://172.16.58.100:2280/cportal/ip/user_login.php?url=http://172.16.58.100:2280/">
      <img src={wifi} alt="" className="h-28" />
      <h1 className="  text-center font-mono text-lg  text-gray-200">
        Wi-fi
      </h1>
    </a>
  </div>
  )
}

export default Wifi