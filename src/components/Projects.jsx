import React from "react";
import { FaGithub } from "react-icons/fa";

const Projects = () => {
  const project = [
    {
      img:'/public/download (1).png',
      icon:<FaGithub/>,
      desc:'Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.'
    },
    {
      img:'/public/download.jpeg',
      icon:<FaGithub/>,
      desc:'Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.'
    },
    {
      img:'/public/ecommerce.jpeg',
      icon:<FaGithub/>,
      desc:'Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.'
    },
    {
      img:'/public/download.png',
      icon:<FaGithub/>,
      desc:'Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.'
    }
  ]
  return (
    <div className="mb-10">
      <h1 className="text-white text-4xl font-bold text-center mt-10 mb-10">
        My Projects
      </h1>
      <div className="p-3 grid grid-flow-row grid-cols-3 gap-6">
      {project.map((pro,index)=>(
          <div className="max-w-sm hover:bg-gradient-to-t from-gray-800 to-gray-900 bg-[#212428] h-[450px] p-6 rounded-   dark:bg-gray-800 " style={{boxShadow: "0px 10px 30px rgba(65, 62, 62, 0.5)"}}>
        
          <div className="rounded-lg transition-transform duration-300 ease-in-out transform hover:scale-105 flex items-center justify-center">
          <img className="rounded-xl hover:shadow-xl " src={pro.img} alt="" />
          </div>
          
          <div className="p-5">
           <div className="flex items-center justify-between">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-[#ff014f] dark:text-white">
                EMS
              </h5>
              {pro.icon}
           </div>
            <p className="font-normal text-white dark:text-gray-400">
              {pro.desc}
            </p>
          </div>
        </div>
      ))}
      </div>
    </div>
  );
};

export default Projects;



