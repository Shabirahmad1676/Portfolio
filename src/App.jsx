import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import WorkIdo from './components/WorkIdo'
import Projects from './components/Projects'
import MyResume from './components/MyResume'
import Contact from './components/Contact'

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
    <hr className='mt-[160px] border-black border-t-2' />
    <Contact/>
    <hr className='mt-[160px] border-black border-t-2' />
    <p>All Right Reserved</p>
    </>
  )
}

export default App