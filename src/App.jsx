import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import WorkIdo from './components/WorkIdo'

const App = () => {
  return (
    <>
    <Navbar/>
    <Hero/>
    <hr className='mt-[160px] border-black border-t-2' />
    <WorkIdo/>
    </>
  )
}

export default App