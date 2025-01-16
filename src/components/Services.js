import React, { useEffect, useRef } from 'react'
import './style.css'
import backgroundImage from '../assests/4.png'
import planImage from '../assests/5.png'
import designImage from '../assests/6.png'
import buildImage from '../assests/7.png'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger)

const Services = () => {

  const serviceRef = useRef(null)
  const serviceElem = gsap.utils.selector(serviceRef)

    useEffect(()=>{
      const h1 = document.querySelector('h5.low-service')
  
      if(h1){
        const h1Text = h1.textContent.split('')
    
        let clutter = ''
        
        h1Text.forEach((elem)=>{
         clutter += `<span>${elem}</span>`
        })
      
        h1.innerHTML = clutter
      }
  
  
    },{})

    useEffect(()=>{
      const h1 = document.querySelector('h1.high-service')
  
      if(h1){
        const h1Text = h1.textContent.split('')
    
        let clutter = ''
        
        h1Text.forEach((elem)=>{
         clutter += `<span>${elem}</span>`
        })
      
        h1.innerHTML = clutter
      }
  
  
    },{})

  useEffect(()=>{

    gsap.fromTo(
      serviceElem('.plan'),
      {y : '50%', opacity : 0},
      {y : 0, opacity : 1, duration : 1.5, stagger : 0.15, scrollTrigger : {
        trigger : serviceElem('.plan'),
        start : 'top 80%',
      }}
    )

    gsap.fromTo(
      'h5.low-service span',
      {y : '50%', opacity : 0},
      {y : 0, opacity : '80%', duration : 1.5, stagger : 0.15, scrollTrigger : {
        trigger : 'h5.low-service span',
        start : 'top 80%',
      }}
    )

    gsap.fromTo(
      'h1.high-service span',
      {y : '50%', opacity : 0},
      {y : 0, opacity : '80%', duration : 1.5, stagger : 0.15, scrollTrigger : {
        trigger : 'h1.high-service span',
        start : 'top 80%',
      }}
    )

    gsap.fromTo(
      serviceElem('p.description'),
      {y : '50%', opacity : 0},
      {y : 0, opacity : 1, duration : 1.5, scrollTrigger : {
        trigger : serviceElem('p.description'),
        start : 'top 80%',
      }}
    )

    gsap.fromTo(
      serviceElem('a'),
      {x : '50%', opacity : 0},
      {x : 0, opacity : 1, duration : 1.5, scrollTrigger : {
        trigger : serviceElem('a'),
        start : 'top 80%',
      }}
    )

  },[])



  return (
    <div ref={serviceRef} className='relative w-screen h-[150vh] md:h-[140vh] xl:h-[130vh]'>
      <img src={backgroundImage} className='w-full h-full absolute top-[0%] right-[0%] object-cover object-center' />
      <h5 className='low-service absolute text-white text-[90px] right-[20%] opacity-[10%] font-playfair sm:right-[26%] lg:right-[20%] xl:text-[95px]'>Services</h5>
      <h1 className='high-service absolute text-white text-[90px] right-[18%] top-[5%] font-playfair sm:right-[24%] lg:right-[18%] xl:text-[95px]'>Services</h1>
      <div className='w-[85%] h-[65%] absolute top-[18%] left-[5%] flex flex-col justify-between md:h-[80%] xl:w-[65%] xl:h-[65%] xl:flex-row xl:top-[30%] xl:left-[5%]'>
        <div className='plan w-full relative h-[32%] overflow-hidden bg-zinc-800 md:w-[49%] md:h-[49%] xl:w-[32%] xl:h-full'>
            <div className='w-full h-[70%] overflow-hidden'><img src={planImage} className='w-full h-full object-cover object-center'/></div>
            <div className='absolute w-full h-[55%] bg-black opacity-[70%] backdrop-blur bottom-[0%]'></div>
            <div className='absolute bottom-[0%] font-popins w-full h-[55%] text-white p-[10px] xl:flex xl:p-[5px] xl:flex-col xl:justify-between xl:h-[40%] xl:overflow-hidden xl:bottom-[10%]'>
                <h4 className='text-[15px] lg:text-[20px] xl:text-[24px]'>01</h4>
                <h1 className='text-[22px] absolute top-[3%] left-[8%] font-semibold md:left-[11%] lg:top-[4%] xl:text-[32px] xl:relative xl:left-[0px] xl:top-[0px] xl:text-[32px]'>Plan</h1>
                <p className='text-justify text-[10px] absolute bottom-[10%] w-[95%] sm:text-[11.5px] md:text-[13px] lg:text-[14px] lg:bottom-[20%] xl:relative xl:bottom-0 xl:text-[13px]'>We understand that timelines and budgets are top of mind when considering a home renovation. That’s why our expert team works with you to find the best plan that matches your needs and budgets. In addition, we map out all the important paperwork from permits to board approvals to ensure a smooth process moving forward</p>
            </div>
        </div>
        <div className='plan w-full relative h-[32%] overflow-hidden bg-zinc-800  md:w-[49%] md:absolute md:right-[0%] md:h-[49%] xl:relative xl:w-[32%] xl:h-full'>
            <div className='w-full h-[70%] overflow-hidden'><img src={designImage} className='w-full h-full object-cover object-center'/></div>
            <div className='absolute w-full h-[55%] bg-black opacity-[70%] backdrop-blur bottom-[0%]'></div>
            <div className='absolute bottom-[0%] font-popins w-full h-[55%] text-white p-[10px] xl:flex xl:p-[5px] xl:flex-col xl:justify-between xl:h-[40%] xl:overflow-hidden xl:bottom-[10%]'>
                <h4 className='text-[15px] lg:text-[20px] xl:text-[24px]'>02</h4>
                <h1 className='text-[22px] absolute top-[3%] left-[8%] font-semibold md:left-[11%] lg:top-[4%] xl:text-[32px] xl:relative xl:left-[0px] xl:top-[0px] xl:text-[32px]'>Design</h1>
                <p className='text-justify text-[10px] absolute bottom-[10%] w-[95%] sm:text-[11.5px] md:text-[13px] lg:text-[14px] xl:relative xl:bottom-0 xl:text-[13px]'>Our in-house interior designers work with you to achieve a luxury design that’s tailored to your personal preferences, at no additional cost. With a keen eye for aesthetics and design principles, our talented designers help you create your dream space. They guide you to make design decisions that inspire you, all while sticking to your budget.</p>
            </div>
        </div>
        <div className='plan w-full relative h-[32%] overflow-hidden bg-zinc-800 md:w-[49%] md:h-[49%] xl:w-[32%] xl:h-full'>
            <div className='w-full h-[70%] overflow-hidden'><img src={buildImage} className='w-full h-full object-cover object-center'/></div>
            <div className='absolute w-full h-[55%] bg-black opacity-[70%] backdrop-blur bottom-[0%]'></div>
            <div className='absolute bottom-[6%] font-popins w-full h-[50%] text-white p-[10px] xl:flex xl:p-[5px] xl:flex-col xl:justify-between xl:h-[40%] xl:overflow-hidden xl:bottom-[10%]'>
                <h4 className='text-[15px] lg:text-[20px] xl:text-[24px]'>03</h4>
                <h1 className='text-[22px] absolute top-[3%] left-[8%] font-semibold md:left-[11%] lg:top-[4%] xl:relative xl:left-0 xl:top-0 xl:text-[32px]'>Build</h1>
                <p className='text-justify text-[10px] absolute bottom-[10%] w-[95%] sm:text-[11.5px] md:text-[13px] lg:text-[14px] xl:relative xl:bottom-0 xl:text-[13px]'>When you work with KASALTO, you have an experienced project manager overseeing all phases of your renovation project. Our PM’s are educated in construction-related fields like civil engineering and architecture which makes them truly qualified to lead your project.</p>
            </div>
        </div>
      </div>
      <div className='absolute w-[90%] h-[12%] top-[85%] right-[5%] flex flex-col justify-between sm:h-[10%] md:h-[15%] md:top-[70%] md:w-[45%] xl:w-[20%] xl:h-[25%] xl:top-[45%] xl:right-[5%]'>
      <p className='description text-white text-justify text-[12px] w-[94%] sm:text-[11.5px] md:absolute md:top-[0%] md:w-[95%] md:right-[2%] md:text-[13px] lg:text-[14px] lg:w-full'>Our team of skilled professionals specializes in transforming your home or office into a functional and aesthetically pleasing environment. From complete renovations to minor updates, we offer a wide range of services tailored to your unique needs.</p>
      <a href="/" className='inline-block rounded-[5px] w-[100px] h-[35px] flex justify-center items-center bg-white text-black text-[13px] font-popins font-semibold md:absolute md:bottom-[0%] xl:w-[150px] xl:h-[35px] xl:text-[15px]'>Learn More</a>
      </div>


      {/* Default Classes */}

      {/* <img src={backgroundImage} className='w-full h-full absolute top-[0%] right-[0%] object-cover object-center' />
      <h5 className='low-service absolute text-white text-[95px] right-[20%] opacity-[10%] font-playfair'>Services</h5>
      <h1 className='high-service absolute text-white text-[95px] right-[18%] top-[5%] font-playfair'>Services</h1>
      <div className='w-[60%] h-[65%] absolute top-[30%] left-[5%] flex justify-between'>
        <div className='plan w-[32%] relative h-full'>
            <div className='w-full h-[70%] overflow-hidden'><img src={planImage}/></div>
            <div className='absolute w-full h-[55%] bg-black opacity-[70%] backdrop-blur bottom-[0%]'></div>
            <div className='absolute bottom-[0%] font-popins w-full h-[55%] flex flex-col justify-between text-white p-2'>
                <h4 className='text-[24px]'>01</h4>
                <h1 className='text-[32px] font-semibold'>Plan</h1>
                <p className='text-justify text-[15px]'>We understand that timelines and budgets are top of mind when considering a home renovation. That’s why our expert team works with you to find the best plan that matches your needs and budgets. In addition, we map out all the important paperwork from permits to board approvals to ensure a smooth process moving forward</p>
            </div>
        </div>
        <div className='plan w-[32%] relative h-full'>
            <div className='w-full h-[70%] overflow-hidden'><img src={designImage}/></div>
            <div className='absolute w-full h-[55%] bg-black opacity-[70%] backdrop-blur bottom-[0%]'></div>
            <div className='absolute bottom-[0%] font-popins w-full h-[55%] flex flex-col justify-between text-white p-2'>
                <h4 className='text-[24px]'>02</h4>
                <h1 className='text-[32px] font-semibold'>Design</h1>
                <p className='text-justify text-[15px]'>Our in-house interior designers work with you to achieve a luxury design that’s tailored to your personal preferences, at no additional cost. With a keen eye for aesthetics and design principles, our talented designers help you create your dream space. They guide you to make design decisions that inspire you, all while sticking to your budget.</p>
            </div>
        </div>
        <div className='plan w-[32%] relative h-full'>
            <div className='w-full h-[70%] overflow-hidden'><img src={buildImage}/></div>
            <div className='absolute w-full h-[55%] bg-black opacity-[70%] backdrop-blur bottom-[0%]'></div>
            <div className='absolute bottom-[6%] font-popins w-full h-[50%] flex flex-col justify-between text-white p-2'>
                <h4 className='text-[24px]'>03</h4>
                <h1 className='text-[32px] font-semibold'>Build</h1>
                <p className='text-justify text-[15px]'>When you work with KASALTO, you have an experienced project manager overseeing all phases of your renovation project. Our PM’s are educated in construction-related fields like civil engineering and architecture which makes them truly qualified to lead your project.</p>
            </div>
        </div>
      </div>
      <div className='hidden absolute w-[20%] h-[30%] top-[45%] right-[10%] flex flex-col justify-between'>
      <p className='description text-white text-justify '>Our team of skilled professionals specializes in transforming your home or office into a functional and aesthetically pleasing environment. From complete renovations to minor updates, we offer a wide range of services tailored to your unique needs.</p>
      <a href="/" className='inline-block rounded-[5px] w-[150px] h-[35px] flex justify-center items-center bg-white text-black font-popins font-semibold'>Learn More</a>
      </div> */}

    </div>
  )
}

export default Services
