import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#727e9125] text-[#171e36]'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
         <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'> 
            <div className='sm:text-right pb-8 pl-4'>
              <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
                About
             </p>
              </div>
            <div></div>
            </div>
            <div className='max-w-[1000px] w-full sm:grid grid-cols-2 gap-8 px-4'>
                <div className='sm:text-right text-4xl font-bold text-[#42485c]'>
                <p>Hi, i'm Hilda, nice to meet you, please take a look around.</p>
                </div>
                <div>
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic saepe, ratione magnam maxime 
                    nihil quam magni dolorum accusamus assumenda voluptatum sint nam consequuntur labore reiciendis
                     et praesentium soluta quisquam eaque.</p>
                </div>
            </div>
      </div>
    </div>
  );
};

export default About