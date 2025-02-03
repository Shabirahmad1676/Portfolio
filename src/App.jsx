import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import WorkIdo from './components/WorkIdo'
import Projects from './components/Projects'
import MyResume from './components/MyResume'

const App = () => {
  return (
    <>
    <Navbar/>
    <Hero/>
    <hr className='mt-[160px] border-black border-t-2' />
    <WorkIdo/> 
    <hr className='mt-[160px] border-black border-t-2' />
    <Projects/>
    <hr className='mt-[160px] border-black border-t-2' />
    <MyResume/>
    </>
  )
}

export default App