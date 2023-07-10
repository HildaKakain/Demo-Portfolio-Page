import React from 'react';
import {HiArrowNarrowRight} from 'react-icons/hi';
import Navbar from './Navbar';



const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#727e9125]'>

       {/* Container */}
       <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
          <p className='text-pink-600'>Hi, my name is</p>
          <h1 className='text-4xl sm:text-7xl font-bold text-[#171e36]'>Hilda Kakain</h1>
          <h2 className='text-4xl sm:text-7xl font-bold text-[#42485c]'>I'm a Front End Developer.</h2>
          <p className='text-[#42485c] py-4 max-w-[700px]'>I'm a Front End Developer specializing in building responsive designs, web applications
            and bringing them to life.
          </p>
          <div>
            <button className='group text-[#42485c] border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>View Work 
             <span className='group-hover:rotate-90 duration-300'>
            <HiArrowNarrowRight className='ml-3'/>
             </span>
            </button>
          </div>
       </div>
    </div>
  )
}

export default Home