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
      <div className='flex  justify-between items-center p-2'>
      {Tabs.map((tab,index)=>(
        <div
        onClick={()=>setActiveTab(index)}
        style={{boxShadow: "0px 10px 30px rgba(65, 62, 62, 0.5)"}}
         className='hover:bg-gradient-to-r from-gray-500 to-gray-900  rounded-lg shadow w-[180px] text-center text-white font-semibold text-2xl py-2'>
          {tab.name}
        </div>
      ))}
      </div>
      <div>
        <ActiveTabComponent />
      </div>
    </div>
  )
}

export default MyResume