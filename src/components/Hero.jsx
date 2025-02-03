import React from 'react';
import Typewriter from 'typewriter-effect';
import { FaReact } from "react-icons/fa";
import { IoLogoNodejs } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { BiLogoTailwindCss } from "react-icons/bi";
import { BiLogoGmail } from "react-icons/bi";
import { FaLinkedinIn } from "react-icons/fa6";




const Hero = () => {
  return (
    <div className='flex text-white items-center  justify-between mt-[70px]  max-w-[1180px] m-3'>
      <div className='text-start pl-4 w-[60%]'>
        <span className='text-[#c4cfde] text-2xl'>SHOWCASING MY <span className='underline font-mono text-[]'>JOURNEY</span> IN CODING</span>
        <h1 className='text-[60px] font-bold'>
          Hi, I am <span className='text-[#ff014f]'>Shabir Ahmad</span>
        </h1>
        <h1 className='text-3xl font-bold text-[#ff014f]'>
          <Typewriter
            options={{
              strings: ['Web Developer.', 'Computer Science Student.', 'Problem Solver.'],
              autoStart: true,
              loop: true,
              deleteSpeed: 10,
              delay:23,
              cursor: '|',
            }}
          />
        </h1>
        <p className='mt-6'>As a passionate developer, I craft engaging digital experiences with clean, efficient code. My focus is on delivering innovative solutions that bring ideas to life, ensuring every interaction feels seamless and impactful.</p>
      <div className='flex  gap-4'>
      <div className='mt-4 pr-[110px]'>
          <p>FIND ME IN</p>
          <div className='mt-4 flex gap-4'>
            
            <div className='bg-blue-500 transition delay-150 duration-300 ease-in-out hover:text-[#ff014f] hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 ring-2 p-5 rounded'><FaGithub /></div>
            <div className='bg-blue-500 transition p-5 rounded delay-150 hover:text-[#ff014f]  duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 ring-2'><BiLogoGmail />
            </div>
            <div className=' bg-blue-500 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 shadow-lg p-5 hover:text-[#ff014f] ring-2 rounded'><FaLinkedinIn />
            </div>
          </div>
        </div>
        <div className='mt-4'>
          <p>HANDS ON PRACTISE</p>
          <div className='mt-4 flex gap-4'>
            <div className='bg-blue-500 hover:animate-pulse shadow-md hover:text-[#ff014f]  hover:shadow-teal-500 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 p-5 rounded'>
              <FaReact />
            </div>
            <div className='bg-blue-500 hover:animate-pulse shadow-md hover:text-[#ff014f]  hover:shadow-teal-500 transition p-5 rounded delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500'><IoLogoNodejs /></div>
            <div className=' bg-blue-500 hover:animate-pulse transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 shadow-md hover:text-[#ff014f]  hover:shadow-teal-500 p-5 rounded'><BiLogoTailwindCss /></div>
          </div>
        </div>
      </div>
        
      </div>
      <div className='hidden lg:block'>
        <img src="/public/port.png" alt="my_img" 
        
         className='h-[400px] w-[300px] hover:drop-shadow-[5px_5px_10px_#796565] rounded-[80%] mr-3 ring-[#ff014f] ring-2 ' />
      </div>
    </div>
    
  );
};

export default Hero;