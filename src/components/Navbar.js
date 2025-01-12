import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useRef } from 'react'
import { MdOutlineSegment } from "react-icons/md";



const Navbar = () => {

  useGSAP(() => {
    gsap.fromTo('.navbar', { y: '-100%', opacity: 0 }, { y: 0, opacity: 1, duration: 2 })
  })

  const toggleMenuRef = useRef(null)


  function showToggleMenu() {
    

    const toggleMenu = toggleMenuRef.current

    if(toggleMenu){
      toggleMenu.style.display = 'inline-block'
      gsap.fromTo(toggleMenu,{x : '120%',opacity : 0},{x : '99%',opacity : 1,duration : 1})

    }
  }

  function hideToggleMenu(){

    const toggleMenu = toggleMenuRef.current

    if(toggleMenu){
      toggleMenu.style.display = 'hidden'
      gsap.to(toggleMenu,{x : '120%',opacity : 0,duration : 1})

    }
  }


  return (
    <div className='navbar fixed top-0 left-0 z-[999] w-full px-[20px]  flex justify-between items-start text-[36px] h-screen text-white'>
      <div className='w-full h-[100px] z-[999] flex justify-between items-center'>
        <div className="nav-logo font-playfair">Renovo</div>
        <div className='cursor-pointer md:hidden' onClick={showToggleMenu}><MdOutlineSegment /></div>
        <div className="hidden nav-links md:inline-block w-[45%] md:w-[70%] lg:w-[65%] xl:w-[50%] 2xl:w-[45%] font-popins">
          <ul className='flex text-[18px] justify-between items-center' >
            <li className='hover:text-[#aaaaaa] transition-colors duration-[0.60s]'><a href="/">About</a></li>
            <li className='hover:text-[#aaaaaa] transition-colors duration-[0.60s]'><a href="/">Projects</a></li>
            <li className='hover:text-[#aaaaaa] transition-colors duration-[0.60s]'><a href="/">Services</a></li>
            <li className='hover:text-[#aaaaaa] transition-colors duration-[0.60s]'><a href="/">Blog</a></li>
            <li className='hover:text-[#aaaaaa] transition-colors duration-[0.60s]'><a href="/">Contact</a></li>
            <li><a href="/" className='hover:bg-transparent hover:border-[1px] hover:text-white transition duration-[0.60s`] w-[115px] h-[36px] bg-white text-black inline-block flex items-center justify-center rounded-[5px]'>Login</a></li>
          </ul>
        </div>
      </div>
      <div ref={toggleMenuRef} className='toggle-menu pr-[40px] hidden absolute w-[50%] h-full bg-[#262626]'>
        <div className='w-100% h-[50%] relative top-[15%]'>
        <ul className='flex flex-col text-[18px] h-full items-end justify-between' >
            <li className='hover:text-[#aaaaaa] transition-colors duration-[0.60s]'><a href="/">About</a></li>
            <li className='hover:text-[#aaaaaa] transition-colors duration-[0.60s]'><a href="/">Projects</a></li>
            <li className='hover:text-[#aaaaaa] transition-colors duration-[0.60s]'><a href="/">Services</a></li>
            <li className='hover:text-[#aaaaaa] transition-colors duration-[0.60s]'><a href="/">Blog</a></li>
            <li className='hover:text-[#aaaaaa] transition-colors duration-[0.60s]'><a href="/">Contact</a></li>
            <li className='hover:text-[#aaaaaa] transition-colors duration-[0.60s] text-red-900 cursor-pointer' onClick={hideToggleMenu}><p className='pointer-events-none'>Close</p></li>
            <li><a href="/" className='hover:bg-transparent hover:border-[1px] hover:text-white transition duration-[0.60s`] w-[115px] h-[36px] bg-white text-black inline-block flex items-center justify-center rounded-[5px]'>Login</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar
