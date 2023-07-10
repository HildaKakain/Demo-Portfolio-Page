import React from 'react'
import initials from '../assets/initials.jpg';


const Work = () => {
  return (
    <div name='work' className='w-full md:h-screen text-gray-300 bg-[#727e9125] '>
     <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
      <div className='pb-8'> 
        <p className='text-4xl text-[#171e36] font-bold inline border-b-4 border-pink-600'>Work</p>
        <p className='text-[#42485c] py-4'>check out some of my recent works</p>
      </div>

        {/* container */}
      <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

        {/* Grid items */}
        <div style={{backgroundImage: `url(${initials})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

          {/* Hover Effects */}  
           <div className='opacity-0 group-hover:opacity-100'>
            <span className='text-2xl font-bold text-white tracking-wider'>
           Todo App
            </span>
            <div className='pt-8 text-center'>
             <a href='/'>
              <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Live Demo</button>
             </a>
            </div>
           </div>
        </div>
          {/* Grid items */}
          <div style={{backgroundImage: `url(${initials})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

{/* Hover Effects */}  
 <div className='opacity-0 group-hover:opacity-100'>
  <span className='text-2xl font-bold text-white tracking-wider'>
Login App
  </span>
  <div className='pt-8 text-center'>
   <a href='/'>
    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Live Demo</button>
   </a>
  </div>
 </div>
</div>
  {/* Grid items */}
  <div style={{backgroundImage: `url(${initials})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

{/* Hover Effects */}  
 <div className='opacity-0 group-hover:opacity-100'>
  <span className='text-2xl font-bold text-white tracking-wider'>
Hotel Site 
  </span>
  <div className='pt-8 text-center'>
   <a href='/'>
    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Live Demo</button>
   </a>
  </div>
 </div>
</div>
  {/* Grid items */}
  <div style={{backgroundImage: `url(${initials})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

{/* Hover Effects */}  
 <div className='opacity-0 group-hover:opacity-100'>
  <span className='text-2xl font-bold text-white tracking-wider'>
Dashboard
  </span>
  <div className='pt-8 text-center'>
   <a href='/'>
    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Live Demo</button>
   </a>
  </div>
 </div>
</div>
  {/* Grid items */}
  <div style={{backgroundImage: `url(${initials})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

{/* Hover Effects */}  
 <div className='opacity-0 group-hover:opacity-100'>
  <span className='text-2xl font-bold text-white tracking-wider'>
Cart Page
  </span>
  <div className='pt-8 text-center'>
   <a href='/'>
    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Live Demo</button>
   </a>
  </div>
 </div>
</div>
 {/* Grid items */}
 <div style={{backgroundImage: `url(${initials})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

{/* Hover Effects */}  
 <div className='opacity-0 group-hover:opacity-100'>
  <span className='text-2xl font-bold text-white tracking-wider'>
React JS Application
  </span>
  <div className='pt-8 text-center'>
   <a href='/'>
    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Live Demo</button>
   </a>
  </div>
 </div>
</div>



      </div>

     </div>
    </div>
  )
}

export default Work;