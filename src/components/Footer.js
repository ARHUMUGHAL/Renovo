import React from 'react'
import BackgroundImage from '../assests/18.png'
import { AiOutlineMail } from "react-icons/ai";
import { SlSocialFacebook } from "react-icons/sl";
import { SiInstagram } from "react-icons/si";
import { SlSocialYoutube } from "react-icons/sl";
import { TiSocialLinkedin } from "react-icons/ti";
import { BsTwitterX } from "react-icons/bs";

const Footer = () => {
  return (
    <div className='w-screen h-[80vh] relative'>
      <img src={BackgroundImage} className='w-full h-full object-cover absolute'/>
      <div className='w-[30%] h-[25%] absolute top-[20%] left-[5%] flex flex-col justify-between'>
        <h2 className='font-playfair text-white text-[40px]'>Begin a Fresh Journey</h2>
        <p className='text-white font-popins'>Join our newsletter to stay up to date!</p>
        <div className='w-full h-[40%] py-2 flex items-center border-b-2'>
            <AiOutlineMail className='text-white text-[30px]' />
            <input type="text" placeholder='Email Address' className='w-full text-white font-popins px-5 bg-transparent h-full outline-0' />
        </div>
      </div>
      <div className='w-[10%] h-[40%] flex flex-col justify-between absolute right-[40%] top-[20%] text-white font-popins '>
        <h3 className='font-semibold'>Pages</h3>
        <p>About US</p>
        <p>Services</p>
        <p>How It Works</p>
        <p>Projects</p>
        <p>Blog</p>
        <p>FAQs</p>
      </div>

      <div className='w-[25%] text-right h-[40%] flex flex-col justify-between absolute right-[5%] top-[20%] text-white font-popins '>
        <h3 className='font-medium text-[25px]'>License number </h3>
        <p>NY- 624690</p>
        <p>NJ- 13VH13212400</p>
        <p>FL- CBC1267423</p>
        <p>Westchester Country- WC-37416-H24</p>
        <p>Southampton- L006804</p>
        <p>CT- HIC.0672343</p>
        <div className='w-full h-[50px] flex justify-end items-center text-[25px]'>
        <SlSocialFacebook className='mx-2' />
        <SiInstagram  className='mx-2'/>
        <TiSocialLinkedin className='mx-2' />
        <SlSocialYoutube className='mx-2' />
        <BsTwitterX className='mx-2' />
        </div>
      </div>

      <div className='w-full h-[20%] absolute bottom-[5%] flex items-center justify-center'>
        <p className='text-white font-popins '>All Rights Reserved 2024 | @Developed by CodeCraftArhum</p>
      </div>
    </div>
  )
}

export default Footer
