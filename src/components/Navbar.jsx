import React, {useState} from 'react';
import {FaBars, FaTimes, FaGithub, FaLinkedin} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import {BsFillPersonLinesFill} from 'react-icons/bs'
import {Link} from 'react-scroll'


const Navbar = () => {

    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)


  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#727e9125] text-[#171e36]'>
        <div className='brand-name'>
            <h3 className='text-[#666] cursor-pointer'>H.D.K</h3>
        </div>

        {/* menu */}
        
            <ul className='md:flex text-[#666] space-x-4 hidden cursor-pointer'>
                <li>
                <Link to="home" smooth={true} duration={500}>
                Home
               </Link>
                </li>
                <li>
                <Link to="about" smooth={true} duration={500}>
                About
               </Link>
                </li>
                <li>
                <Link to="skills" smooth={true} duration={500}>
                Skills
               </Link>
                </li>
                <li>
                <Link to="work" smooth={true} duration={500}>
                Work
               </Link>
                </li>
                <li>
                <Link to="contact" smooth={true} duration={500}>
                Contact
               </Link>
                </li>
            </ul>
       

        {/* Hamburger */}
        <div onClick={handleClick} className='md:hidden z-10'>
            {!nav ? <FaBars /> : <FaTimes />}
        </div>

        {/* Mobile menu */}
        <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] cursor-pointer text-[#666] flex flex-col justify-center items-center space-x-4'}>
              <li  className='py-6 text-4xl'>
              <Link onClick={handleClick} to="home" smooth={true} duration={500}>
                Home
               </Link>
              </li>
              <li className='py-6 text-4xl'>
              <Link onClick={handleClick} to="about" smooth={true} duration={500}>
                About
               </Link>
              </li>
              <li className='py-6 text-4xl'>
              <Link onClick={handleClick} to="home" smooth={true} duration={500}>
                Skills
               </Link>
              </li>
              <li className='py-6 text-4xl'>
              <Link onClick={handleClick} to="work" smooth={true} duration={500}>
                Work
               </Link>
              </li>
              <li className='py-6 text-4xl'>
              <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
                Contact
               </Link>
              </li>
        </ul>

        {/* Socials icon */}
        <div className='hidden lg:flex fixed flex-col top-[35%] left-0 items-center'>
            <ul>
                <li className='w-[140px] h-[40px] flex justify-between items-center ml-[-110px] hover:ml-[-1px] duration-300 bg-blue-600'>
                    <a  className='flex justify-between items-center w-full text-white'
                    href='/'>
                        Linkedin <FaLinkedin size={30} />
                    </a>
                </li>

                <li className='w-[140px] h-[40px] flex justify-between items-center ml-[-110px] hover:ml-[-1px] duration-300 bg-[#333333]'>
                    <a  className='flex justify-between items-center w-full text-white'
                    href='/'>
                        Github <FaGithub size={30} />
                    </a>
                </li>

                <li className='w-[140px] h-[40px] flex justify-between items-center ml-[-110px] hover:ml-[-1px] duration-300 bg-[#4e0f46]'>
                    <a  className='flex justify-between items-center w-full text-white'
                    href='/'>
                        Email <HiOutlineMail size={30} />
                    </a>
                </li>

                <li className='w-[140px] h-[40px] flex justify-between items-center ml-[-110px] hover:ml-[-1px] duration-300 bg-[#e99259]'>
                    <a  className='flex justify-between items-center w-full text-white'
                    href='/'>
                        Resume <BsFillPersonLinesFill size={30} />
                    </a>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar;