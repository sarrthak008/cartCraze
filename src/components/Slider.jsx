import React from 'react'
import MAIN1 from '../assets/main/main1.png'


const Slider = () => {
  return (
    <div className='w-full h-80 bg-blue-100 truncate flex mt-5 '>
         <div className='h-full w-2/4 bg-red-50'> 
         </div>
         <div className='h-full w-2/4 bg-blue-100 '> 
           <img src={MAIN1} className='h-full drop-shadow-md shadow-emerald-700'></img>
         </div>
    </div>
  )
}

export default Slider
