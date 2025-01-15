import React, { useEffect, useRef } from 'react'
import './style.css'
import firstImage from '../assests/2.png'
import secondImage from '../assests/3.png'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger)


const About = () => {

  const aboutRef = useRef(null)
  const aboutElem = gsap.utils.selector(aboutRef)

  useEffect(()=>{
    const h3 = document.querySelector('h3.h3-low-opacity')

    if(h3){
      const h3Text = h3.textContent.split('')
  
      let clutter = ''
      
      h3Text.forEach((elem)=>{
       clutter += `<span>${elem}</span>`
      })
    
      h3.innerHTML = clutter
    }


  },{})

  useEffect(()=>{
    const h3 = document.querySelector('h3.h3-high-opacity')

    if(h3){
      const h3Text = h3.textContent.split('')
  
      let clutter = ''
      
      h3Text.forEach((elem)=>{
       clutter += `<span>${elem}</span>`
      })
    
      h3.innerHTML = clutter
    }


  },{})
  
  

  useEffect(()=>{

    gsap.fromTo(
      aboutElem('.first-image'),
      {x : '-90%', opacity : 0},
      {x : 0 , 
      opacity : 1, 
      duration : 2, 
      scrollTrigger : 
      {trigger : aboutElem('.first-image'), start : 'top 50%' }}
    )

    gsap.fromTo(
      aboutElem('h3.h3-low-opacity span'),{y : '50%', opacity : 0},{y : 0,opacity : 1,duration : 1,stagger:0.15 ,scrollTrigger :{
        trigger : aboutElem('h3.h3-low-opacity span'), start : 'top 50%',
      }}
    )

    gsap.fromTo(
      aboutElem('h3.h3-high-opacity span'),{y : '50%', opacity : 0},{y : 0,opacity : 1,duration : 1,stagger:0.15 ,scrollTrigger :{
        trigger : aboutElem('h3.h3-high-opacity span'), start : 'top 50%',
      }}
    )

    gsap.fromTo(
      aboutElem('p.left-bio'),
      {y : '50%', opacity : 0},
      {y : 0 , 
      opacity : 1, 
      duration : 2, 
      scrollTrigger : 
      {trigger : aboutElem('p.left-bio'), start : 'top 80%' }}
    )

    gsap.fromTo(
      aboutElem('.right-bio'),
      {x : '50%', opacity : 0},
      {x : 0 , 
      opacity : 1, 
      duration : 2, 
      scrollTrigger : 
      {trigger : aboutElem('.right-bio'), start : 'top 80%' }}
    )

    gsap.fromTo(
      aboutElem('.second-image'),
      {y : '50%', opacity : 0},
      {y : 0 , 
      opacity : 1, 
      duration : 2, 
      scrollTrigger : 
      {trigger : aboutElem('.second-image'), start : 'top 80%' }}
    )

  },[])

  return (
    <div ref={aboutRef} className='relative w-screen h-[120vh] overflow-hidden'>
      <div className='first-image absolute top-[15%] left-[3%] w-[90%] h-[300px] bg-white overflow-hidden sm:top-[10%] md:top-[6%] lg:w-[30%] lg:h-[500px] lg:top-[15%]'>
        <img src={firstImage} className='w-full h-full object-cover object-center' />
      </div>
      <h3 className='h3-low-opacity absolute top-[42%] left-[5%] text-white opacity-[15%] text-[80px] font-playfair sm:text-[95px] sm:top-[32%] md:top-[26%] md:text-[100px] lg:left-[25%] lg:top-[12%] xl:text-[120px]'>ABOUT US</h3>
      <h3 className='h3-high-opacity absolute top-[45%] left-[10%] text-white text-[80px] font-playfair sm:text-[95px] sm:top-[35%] md:top-[30%] md:text-[100px] lg:left-[28%] lg:top-[15%] xl:text-[120px]'>ABOUT US</h3>
      <p className='left-bio absolute top-[60%] left-[5%] text-white w-[90%] text-[12px] font-popins sm:top-[55%] sm:text-[15px] md:text-[16px] md:top-[50%] lg:w-[26%] lg:text-[13px] lg:top-[32%] lg:left-[35%] lg:text-justify xl:text-[15px] xl:top-[38%]'>Hi! We are a trusted renovation company with over 10 years of experience. Our mission is to bring your renovation dreams to life, delivering quality and customer satisfaction at every step.</p>
      <div className='right-bio absolute top-[68%] flex flex-col justify-between right-[5%] w-[90%] h-[150px] sm:top-[65%] md:top-[62%] lg:w-[28%] lg:top-[45%] lg:h-[220px]'>
      <p className='text-white text-[12px] sm:text-[15px] md:text-[16px] lg:text-[13px] lg:text-justify xl:text-[15px]'>We lead a small professional team that will be with you from the idea to the final implementation of the space. Just share your dreams with us. KASALTO will do the rest. Tell us how you see your dream space, we will offer several options for concepts and make an audit of the layout. The designer has knowledge of materials and a professional view of space and color simple by virtue of work experience.</p>
      <a href="/" className='text-white'>Learn More...</a>
      </div>
      <div className='second-image w-[50%] h-[200px] bg-white absolute top-[85%] right-[10%] overflow-hidden sm:top-[82%] md:top-[80%] lg:w-[35%] lg:top-[78%] xl:right-[0%] xl:w-[30%]'>
        <img src={secondImage} className='w-full h-full object-cover object-center' />
      </div>
    </div>
  )
}

export default About
