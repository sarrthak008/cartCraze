import React, { useState } from 'react'

import  pink from '../assets/tshirt/pink.png'
import  red from '../assets/tshirt/red.png'
import  white from '../assets/tshirt/white.png'
import  blue from '../assets/tshirt/blue.png'



const Slider = () => {

 const [shirtscr ,setShirtSrc] = useState(pink)

   const changeShirt =(color)=>{
     setShirtSrc(color)
   }

  return (
    <div className='min-h-96 w-full flex items-center flex-col mt-20 relative py-5 sm:flex-row-reverse sm:justify-evenly sm:h-72 relative '>
       <div className='h-72 w-60 sm:h-full sm:w-2/4'>
          <div className='h-4/6'>
              <img src={shirtscr} className='h-full w-full object-contain '></img>
          </div>
          <div className='w-full h-10 mt-7 flex justify-evenly sm:justify-center sm:gap-10'>
              <span className='h-[31px] w-[31px] shadow-md shadow-gray-500 bg-red-600 rounded-full cursor-pointer' onClick={()=>{changeShirt(red)}}></span>
              <span className='h-[31px] w-[31px] shadow-md shadow-gray-500 bg-blue-600 rounded-full cursor-pointer'  onClick={()=>{changeShirt(blue)}}></span>
              <span className='h-[31px] w-[31px] shadow-md shadow-gray-500 bg-white rounded-full cursor-pointer'  onClick={()=>{changeShirt(white)}}></span>
              <span className='h-[31px] w-[31px] shadow-md shadow-gray-500 bg-pink-500 rounded-full cursor-pointer'  onClick={()=>{changeShirt(pink)}}></span>
          </div>
       </div>
       <div className='text-center'>
         <h1 className='font-bold text-3xl sm:text-5xl'>MENS FASHION</h1>
         <span className='text-[1.1em] text-gray-500 text-center sm:text-xl'>get up to 30-70% off</span>
         <button className='block m-auto border py-1 px-7  sm:mt-10  bg-blue-500 rounded mt-3 shadow-gray-950 shadow-lg border-blue-500 text-white font-semibold hover:-translate-y-1 transition-all relative'>view more <span className='h-[15px] w-[15px] rounded-full bg-blue-800 block absolute -top-1 -right-1 animate-ping'></span></button>
       </div>
    </div>
  )
}

export default Slider
