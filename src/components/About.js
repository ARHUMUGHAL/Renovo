import React from 'react'
import firstImage from '../assests/2.png'
import secondImage from '../assests/3.png'

const About = () => {
  return (
    <div className='relative w-screen h-[120vh] overflow-hidden'>
      <div className='absolute top-[15%] left-[3%] w-[22%] h-[500px] bg-white overflow-hidded'>
        <img src={firstImage} alt="" />
      </div>
      <h1 className='absolute top-[20%] left-[20%] text-white opacity-[5%] text-[120px] font-playfair'>ABOUT US</h1>
      <h1 className='absolute top-[25%] left-[22%] text-white text-[120px] font-playfair'>ABOUT US</h1>
      <p className='absolute top-[48%] left-[28%] text-white w-[28%] font-popins'>Hi! We are a trusted renovation company with over 10 years of experience. Our mission is to bring your renovation dreams to life, delivering quality and customer satisfaction at every step.</p>
      <div className='absolute top-[35%] flex flex-col justify-between right-[10%] w-[20%] h-[300px]'>
      <p className='text-white'>We lead a small professional team that will be with you from the idea to the final implementation of the space. Just share your dreams with us. KASALTO will do the rest. Tell us how you see your dream space, we will offer several options for concepts and make an audit of the layout. The designer has knowledge of materials and a professional view of space and color simple by virtue of work experience.</p>
      <a href="/" className='text-white'>Learn More...</a>
      </div>
      <div className='w-[30%] h-[280px] bg-white absolute top-[75%] right-[10%] overflow-hidden'>
        <img src={secondImage} alt="" />
      </div>
    </div>
  )
}

export default About
