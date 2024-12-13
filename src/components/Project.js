import React from 'react'
import BackgroundImage from '../assests/12.png'
import { RiCalendarScheduleLine } from "react-icons/ri";
import { CiCamera } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";
import { MdDesignServices } from "react-icons/md";
import { LuDollarSign } from "react-icons/lu";
import { FiMessageSquare } from "react-icons/fi";

const Project = () => {
  return (
    <div className='w-screen h-[100vh] relative flex items-center justify-center'>
      <div className='w-full h-full absolute'>
        <img className='w-full h-full object-cover object-center' src={BackgroundImage} alt="" />
      </div>
      <div className='w-[80%] h-[80%] absolute bg-[#323232] backdrop-blur-xl opacity-[60%]'></div>
      <div className='w-[80%] h-[80%] absolute flex flex-col items-center justify-between py-[100px]'>
        <h1 className='text-white text-[60px] font-playfair'>Your Project, Always Within Reach</h1>
        <p className='text-white w-[80%] text-center text-[20px] font-popins'>Watching the progress of your renovation project as it comes to life is exciting with ReNovo, you have access to your personal client portal keeping you connected with your project’s latest updates. Check in and see what’s happening anytime, anywhere with the power of technology.</p>
        <div className='w-[80%] h-[25%] flex justify-between'>
            <div className='w-[15%] flex flex-col items-center justify-between h-full '> <RiCalendarScheduleLine className='text-white text-[50px]' /> <p className='text-white font-popins font-medium text-[18px]'>Schedule</p> </div>
            <div className='w-[15%] flex flex-col items-center justify-between h-full '> <CiCamera  className='text-white text-[50px]' /> <p className='text-white font-popins font-medium text-[18px]'>Photos</p> </div>
            <div className='w-[15%] flex flex-col items-center justify-between h-full '> <MdOutlineEmail className='text-white text-[50px]' /> <p className='text-white font-popins font-medium text-[18px]'>Live Updates</p> </div>
            <div className='w-[15%] flex flex-col items-center justify-between h-full '> <MdDesignServices className='text-white text-[50px]' /> <p className='text-white font-popins font-medium text-[18px]'>Design</p> </div>
            <div className='w-[15%] flex flex-col items-center justify-between h-full '> <LuDollarSign className='text-white text-[50px]' /> <p className='text-white font-popins font-medium text-[18px]'>Financials</p> </div>
            <div className='w-[15%] flex flex-col items-center justify-between h-full '> <FiMessageSquare className='text-white text-[50px]' /> <p className='text-white font-popins font-medium text-[18px]'>Messages</p> </div>
        </div>
      </div>
    </div>
  )
}

export default Project
