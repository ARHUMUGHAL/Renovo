import React from "react";
import './style.css'
import Image1 from "../assests/1.png";
import { CiFacebook } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { CiYoutube } from "react-icons/ci";
import { useRef } from "react";
import { useEffect } from "react";
import gsap from "gsap";

const Herobox = () => {

  const heroboxRef = useRef(null)
  const heroboxElem = gsap.utils.selector(heroboxRef)

  useEffect(()=>{

    const h1 = document.querySelector('.h1-high-opacity')

    if(h1){
      const h1Text = h1.textContent.split('')
  
  
      var clutter = ''
      h1Text.forEach(function(elem){
        clutter += `<span>${elem}</span>`
      })
      
      h1.innerHTML = clutter
    }


  },[])

  useEffect(()=>{

    const h1 = document.querySelector('.h1-low-opacity')

    if(h1){
      const h1Text = h1.textContent.split('')
  
  
      var clutter = ''
      h1Text.forEach(function(elem){
        clutter += `<span>${elem}</span>`
      })
      
      h1.innerHTML = clutter
    }


  },[])

  useEffect(()=>{

    gsap.fromTo(
      heroboxElem('.herobox-image'),
      {x : '100%', opacity : 0},
      {x : 0, opacity : 1, duration : 2}
    )

    gsap.fromTo(
      heroboxElem('.h2'),
      {x : '-80%', opacity : 0},
      {x : 0, opacity : 1, duration : 2}
    )

    gsap.fromTo('.h1-high-opacity span',{y : '50%',opacity : 0}, {y : 0, opacity : 1,duration : 1, stagger : 0.15})
    gsap.fromTo('.h1-low-opacity span',{y : '50%',opacity : 0}, {y : 0, opacity : 1,duration : 1, stagger : 0.15})

    gsap.fromTo(
      heroboxElem('.bio'),
      {x : '-80%', opacity : 0},
      {x : 0, opacity : 1, duration : 2}
    )

    gsap.fromTo(
      heroboxElem('.white-btn'),
      {y : '80%', opacity : 0},
      {y : 0, opacity : 1, duration : 2}
    )

    
    gsap.fromTo(
      heroboxElem('.blur-box'),
      {y : '80%', opacity : 0},
      {y : 0, opacity : 1, duration : 2}
    )

  })


  return (
    <div ref={heroboxRef} className="herobox w-screen h-[110vh] relative bg-[#202020]">
      <div className="herobox-image absolute right-[-5%] w-[85%] h-full lg:w-[80%]">
        <img src={Image1} className="w-full h-full object-cover" />
      </div>
      <div className="blur-box w-[88vw] h-[35%] flex items-center justify-center absolute top-[60%] right-[40px] md:w-[92vw] lg:w-[68vw] lg:h-[25%] lg:top-[70%] xl:h-[20%]">
        <div className=" bg-[#323232] w-full h-full backdrop-blur-[17px] absolute opacity-[60%]"></div>
        <div className=" w-full p-10 h-full flex flex-col items-center absolute justify-between font-popins lg:flex-row lg:p-5 lg:items-start lg:overflow-hidden">
          <div className="w-full text-white text-[12px] sm:text-[13px] md:text-[15px] lg:w-[30%] lg:text-[14px]">
            <p>
              We specialize in comprehensive home renovations, from design to
              construction, delivering quality materials and expert
              craftsmanship to enhance your home’s value.
            </p>
          </div>

          <div className="w-full h-[50px] font-popins flex flex-col justify-between text-white lg:w-[30%]">
            <h4 className="font-semibold">Craftsmanship</h4>
            <p className="text-[12px] w-[80%] sm:text-[13px] md:text-[15px] lg:text-[14px]">Unmatched attention to detail in every renovation project</p>
          </div>
          <div className="w-full h-[50px] font-popins flex flex-col justify-between text-white lg:w-[30%]">
            <h4 className="font-semibold">Durability</h4>
            <p className="text-[12px] w-[80%] sm:text-[13px] sm:w-[100%] md:text-[15px] lg:text-[14px]">High-Quality materials designed to last through years of wear</p>
          </div>
        </div>
      </div>
      <div className="w-[70%] h-full absolute">
        <h2 className="h2 text-white font-playfair text-[25px] absolute top-[18%] sm:top-[16%] left-[50px] lg:text-[30px] xl:text-[35px] xl:top-[25%]">Home</h2>
        <h1 className="h1-low-opacity text-white font-playfair text-[80px] absolute top-[20%] left-[20px] opacity-10 sm:text-[95px] sm:top-[18%] lg:text-[120px] lg:top-[20%] xl:top-[30%] xl:text-[128px]">Renovation</h1>
        <h1 className="h1-high-opacity text-white font-playfair text-[80px] absolute top-[25%] left-[50px] sm:text-[95px] sm:top-[22%] lg:text-[120px] lg:top-[25%] xl:top-[35%] xl:text-[128px]">Renovation</h1>
        <p className="bio text-white font-popins w-[100%] text-[15px] absolute top-[42%] sm:top-[40%] md:w-[80%] left-[50px] lg:text-[18px] lg:w-[50%] lg:top-[50%] xl:top-[65%] xl:text-[14px] xl:w-[30%]">Transforming your space with expert renovation services that add value and style</p>
        <a className="white-btn inline-block w-[150px] h-[36px] bg-white text-[12px] text-black absolute top-[50%] flex items-center justify-center font-popins rounded-[5px] font-semibold left-[50px] sm:w-[180px] sm:text-[15px] md:w-[200px] md:text-[16px] lg:top-[70%] lg:w-[180px] xl:top-[80%]" href="/">Get a Free Quote</a>
        <div className="w-[180px] hidden h-[50px] items-center justify-between absolute top-[92%] left-[50px] text-white lg:flex">
        <CiFacebook className="text-[30px] "/>
        <CiInstagram className="text-[30px] " />
        <CiLinkedin className="text-[30px] " />
        <CiYoutube className="text-[30px] " />
        </div>
      </div>
    </div>
  );
};

export default Herobox;
