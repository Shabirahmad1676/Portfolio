import React, { useState } from 'react'
import Education from './Education'
import Skills from './Skills'
import Experience from './Experience'

const MyResume = () => {

  const [activeTab, setActiveTab] = useState(0)

  const Tabs = [
    {
      name:'Education',
      component: Education
    },
    {
      name:'Skills',
      component: Skills
    },
    {
      name:'Experience',
      component: Experience
    }
  ]

  const ActiveTabComponent = Tabs[activeTab].component
  return (
    <div  className=' mt-10'>
      <h1 className='mb-10 text-white text-3xl font-bold text-center'>My Resume</h1>
      <div className='flex bg-[#15171acb] rounded  justify-between items-center h-[68px]'>
      {Tabs.map((tab,index)=>(
        <div
        onClick={()=>setActiveTab(index)}
        // style={{boxShadow: "0px 10px 30px 5px rgba(78, 59, 59, 0.5)"}}
         className='rounded hover:bg-[#1c1e20ea] hover:border hover:border-red-700 shadow w-[180px]  text-center text-white font-semibold text-2xl py-4'>
          {tab.name}
        </div>
      ))}
      </div>
      <div className='mt-8 rounded'>
        <ActiveTabComponent />
      </div>
    </div>
  )
}

export default MyResume