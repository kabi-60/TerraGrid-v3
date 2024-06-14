import React from 'react'
import insta from '../PasswordManager/Instagram.png'
import twitter from '../PasswordManager/Twitter.png'
import whatsapp from '../PasswordManager/WhatsApp.png'
import youtube from '../PasswordManager/YouTube.png'
import snap from '../PasswordManager/Snapchat.png'
import link from '../PasswordManager/LinkedIn.png'
import gmail from '../PasswordManager/gmail.png'
import classroom from '../PasswordManager/classroom.png'
import facebook from '../PasswordManager/facebook.png'


const SocialMedia = () => {
  return (
    <>
    <a className="col-span-4 row-span-1.5 flex items-center justify-center  rounded-3xl   bg-indigo-600 shadow-md">
  <a className='grid grid-cols-4 gap-2 px-20'>
              <a href='https://www.instagram.com/'>
                <img src={insta} alt="" />
              </a>
              <a href='https://in.linkedin.com/'>
                <img src={link} alt="" />
              </a>
              <a href='https://www.youtube.com/'>
                <img src={youtube} alt="" />
              </a>
              <a href='https://web.whatsapp.com/'>
                <img src={whatsapp} alt="" />
              </a>
              <a href='https://mail.google.com/mail/u/0/#inbox'>
                <img src={gmail} alt="" />
              </a>
              <a href='https://twitter.com/i/flow/login'>
                <img src={twitter} alt="" />
              </a>
              <a href='https://classroom.google.com/u/1/'>
                <img src={classroom} alt="" />
              </a>
              <a href='https://www.facebook.com/'>
                <img src={facebook} alt="" />
              </a>

            </a>
            </a>
  
    </>


  )
}

export default SocialMedia