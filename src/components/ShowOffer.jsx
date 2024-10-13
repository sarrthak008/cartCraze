import React from 'react'
import IMG1 from '../assets/main/woman.png'
import WATCH  from '../assets/main/watch.png'
import BAG from '../assets/main/bag.png'

const ShowOffer = () => {
  return (
    <div>
        <div className='h-[95vh]  w-full sm:flex sm:h-48 sm:items-center sm:justify-center sm:gap-7 sm:mb-10' >
            <div className='h-2/4 w-full flex justify-between bg-gradient-to-tr from-yellow-100 via-blue-100 to-gray-100 sm:h-full sm:w-[50%] sm:rounded-sm'>
                <div className='w-3/4 h-full truncate'>
                   <img src={IMG1} className='h-full w-full object-fill'></img>
                </div>
                <div className='flex flex-col justify-evenly'>
                     <span className='text-4xl font-semibold'>woman cloth</span>
                     <span className='text-sm text-gray-400'>upto 40-50% off</span>
                     <button className='border border-black rounded-3xl text-center mt-2 mr-4 py-0 px-3 border-1 font-semibold hover:bg-blue-600 hover:text-white transition'>view</button>
               </div>
            </div>
            <div className='w-full h-2/4  mt-6 flex flex-col gap-4 sm:h-full sm:w-[45%] sm:mt-0'>
                 <div className='h-2/4 w-full bg-gray-300 truncate flex sm:h-[45%]'>
                     <div className='h-full w-2/4 '>
                       <img src={WATCH} className='h-full w-full object-cover'></img>
                     </div>
                     <div className='h-full  ml-5 flex-col flex  justify-center'>
                         <span className='bg-blue-600 w-fit text-white px-1 rounded-sm text-[11px]'>20% off</span>
                         <span className='text-2xl text-white font-serif font-semibold'>Watch</span>
                         <span className='text-md text-gray-100 cursor-pointer'>shop now<i class="ri-arrow-right-s-line"></i></span>
                     </div>
                </div>

                
                <div className='h-2/4 w-full bg-pink-700 truncate flex flex-row-reverse'>
                     <div className='h-full w-2/4'>
                       <img src={BAG} className='h-full w-full object-cover'></img>
                     </div>
                     <div className='h-full  mr-5 flex-col flex  justify-center'>
                         <span className='bg-blue-600 w-fit text-white px-1 rounded-sm text-[11px]'>40% off</span>
                         <span className='text-2xl text-white font-serif font-semibold'>Bag</span>
                         <span className='text-md text-gray-100 cursor-pointer'>shop now<i class="ri-arrow-right-s-line"></i></span>
                     </div>
                </div>
            </div>
         </div>
    </div>
  )
}

export default ShowOffer
