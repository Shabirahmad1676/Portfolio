import React, { useState } from 'react'
import { LuSunMoon } from "react-icons/lu";
const Navbar = () => {
  return (
    <div className='border-b sticky top-0 border-[#9ca3af] bg-[#202327] z-40 '>
    <div className='flex justify-between items-center p-3 flex-col lg:flex-row  h-[70px]  max-w-[1180px] lg:gap-5   mx-auto'>
      <div className='flex items-center rounded-lg gap-2 '>
        {/* <img src="/public/port.png" alt="portfolio" className='h-14' /> */}
        <img class="w-10 h-10 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500" src="/public/port.png " alt="Bordered avatar"/>
        {/* <span class="top-2 left-9 absolute  w-3.5 h-3.5 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full"></span> */}
      <h1 className='font-bold drop-shadow-lg text-3xl  text-[#ff014f]'>Shabir <span className='text-yellow-50'>Dev</span> </h1>
      </div>
      <ul className='flex items-center font-serif font-semibold text-[#9ca3af] justify-evenly gap-4'>
        <li className='hover:border-b-2 border-[#ff014f] cursor-pointer transition-all duration-500 ease-in-out'>Home</li>
        <li className='hover:border-b-2 border-[#ff014f] cursor-pointer transition-all duration-500 delay-150 ease-in-out'>Contact</li>
        <li className='hover:border-b-2 border-[#ff014f] cursor-pointer transition-all duration-500 delay-150 ease-linear'>Resume</li>
        <li className='hover:border-b-2 border-[#ff014f] cursor-pointer transition-all duration-500 delay-150 ease-linear'>About Us</li>
        <li className='hover:border-b-2 border-[#ff014f] cursor-pointer transition-all duration-500 delay-150 ease-linear'>Projects</li>
      </ul>
      <div className='text-white'>
      <LuSunMoon />
      </div>
    </div>
    </div>
  )
}

export default Navbar