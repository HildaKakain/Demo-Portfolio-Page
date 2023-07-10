import React from 'react'

const Contact = () => {
  return (
    <div name="contact" className='w-full h-screen bg-[#727e9125] flex justify-center items-center p-4'>
      <form method='POST' action='https://getform.io/f/9820ebad-22ab-43e5-8ced-7e5d6887b6ca' className='flex flex-col max-w-[600px] w-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-[#171e36]'>Contact</p>
          <p className='text-[#42485c] p-4'>Submit the form below - kakaindomoye@yahoo.com</p>
        </div>
        <input className=' bg-[#ccd6f6] p-2'  type="text" placeholder='Name' name='name'></input>
        <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='email' name='email'></input>
        <textarea className='bg-[#ccd6f6] p-2' name="message" rows="10" placeholder='Message'></textarea>
        <button className='text-[#42485c] border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>Let's work together</button>
      </form>
    </div>
  )
}

export default Contact