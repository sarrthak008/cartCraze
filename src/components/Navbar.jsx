import React, { useState } from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {


   const [nav,setnav] = useState(false)


  return (
     <div className='h-12 w-screen bg-slate-100 flex items-center justify-between pl-1 pr-1 md:pl-9 md:pr-9 ' >
         <div className='text-[1.2em] font-semibold md:text-2xl'>CartCraze.</div>
         <div className='flex  text-[1.1em] gap-7'>
            <span><i class="ri-menu-4-fill  md:hidden cursor-pointer sm:hidden text-[1.2em] hover:text-blue-400"  onClick={()=>{setnav(true)}}></i></span>
            <span className='cursor-pointer max-w-500:hidden  hover:text-blue-400' ><i class="ri-home-line"></i></span>
            <span  className='cursor-pointer max-w-500:hidden  hover:text-blue-400'><i class="ri-search-line"></i></span>
            <span  className='cursor-pointer max-w-500:hidden  hover:text-blue-400'><i class="ri-user-line"></i></span>
            <span  className='cursor-pointer max-w-500:hidden  hover:text-blue-400'><i class="ri-shopping-cart-line"></i></span>
        </div>
         {nav ? <div className=' top-0 right-0 h-lvh absolute w-48 bg-slate-100 md:hidden text-[1.1em] transition ease-in-out duration-150'>
           <div className='flex flex-col items-center justify-center h-screen w-full'>
           <span className='block w-full text-center mb-6 cursor-pointer  hover:text-blue-400' ><i class="ri-home-line"></i> home</span>
           <span  className='block w-full text-center mb-6 cursor-pointer  hover:text-blue-400'><i class="ri-search-line"></i> search</span>
           <span  className='block w-full text-center mb-6 cursor-pointer  hover:text-blue-400'><i class="ri-user-line"></i> account</span>
           <span  className='block w-full text-center cursor-pointer  hover:text-blue-400'><i class="ri-shopping-cart-line"></i> cart</span>
           <span className='fixed top-1 right-0 cursor-pointer text-2xl hover:text-red-600' onClick={()=>{setnav(false)}}><i class="ri-close-fill"></i></span>
          </div>
       </div>:null}
     </div>
  )
}

export default Navbar
