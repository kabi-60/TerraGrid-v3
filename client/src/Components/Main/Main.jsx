import React from 'react';
import { Link } from 'react-router-dom';
import feedback from '../PasswordManager/feedback.png';
import done from '../PasswordManager/done.png';
import folder from '../PasswordManager/folder.png';
import github from '../PasswordManager/github.png';
import college from '../PasswordManager/college.png';
import tailwind from '../PasswordManager/tailwind.png';
import light from '../PasswordManager/light.png';
import insta from '../PasswordManager/Instagram.png';
import twitter from '../PasswordManager/Twitter.png';
import whatsapp from '../PasswordManager/WhatsApp.png';
import youtube from '../PasswordManager/YouTube.png';
import snap from '../PasswordManager/Snapchat.png';
import link from '../PasswordManager/LinkedIn.png';
import gmail from '../PasswordManager/gmail.png';
import classroom from '../PasswordManager/classroom.png';
import facebook from '../PasswordManager/facebook.png';
import profile from '../PasswordManager/profile.png';
import SocialMedia from '../Grid/SocialMedia';
import Wifi from '../Grid/Wifi';
import Task from '../Grid/Task';
import Password from '../Grid/Password';
import Github from '../Grid/Github';
import Portal from '../Grid/Portal';
import Pod from '../Grid/Pod';
import UITool from '../Grid/UITool';
import Chatgpt from '../Grid/Chatgpt';
import Tailwind from '../Grid/Tailwind';
import Icons from '../Grid/Icons';
import Tool from '../Grid/Tool';

const Main = () => {
  return (
    <section className="container mx-auto my-auto  bg-[#121214] ">
        <div className='h-screen grid xl:hidden justify-center items-center text-white font-bold text-5xl'>
      
            <div className=''>

            <img src={feedback} alt="" />
            <h1 className='text-center'>Its for Laptop Users</h1>
            </div>
        </div>
      <div className=" xl:block flex h-screen py-5 w-full flex-col items-center justify-center p-6 text-slate-400/0 xl:text-slate-400">
        <div className="grid h-full w-full grid-cols-10 gap-4">
          <Wifi />
          <Task />
          <Password />
          <Github />

          <div className="col-span-4 row-span-2 flex items-center justify-center rounded-3xl bg-indigo-600 shadow-md">
            <h1 className="font-jacquarda text-7xl font-bold text-gray-200">
              TERRA<span className="text-[#121214]">GRID</span>
              <span className="text-[#18171c]">.</span>
            </h1>
          </div>
          <Portal />
          <Pod />
          <UITool />
          <Chatgpt />
          <SocialMedia />
          <Tailwind />
          <Icons />
          <Tool />
          <div className="col-span-4 row-span-1 flex justify-center items-center rounded-3xl bg-indigo-600 shadow-md">
           <p className='text-gray-200'><span className='text-[#121214]'>@2024 </span>All Right Reserverd.</p>
            <a
              href="https://kabi-60.github.io/"
              className="flex items-center text-white font-bold text-md"
            >
              <img src={profile} alt="" className="h-10" /><span className='text-md text-[#121214] mr-2'>Designed by</span>@kabi-60
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Main;
