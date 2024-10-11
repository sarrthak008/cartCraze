import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
     <div className='h-12 w-lvw bg-slate-100 flex items-center justify-between pl-1 pr-1 md:pl-9 md:pr-9' >
         <div className='text-[1.2em] font-semibold md:text-2xl'>CartCraze.</div>
         <div className='flex gap-4 text-[1.1em] md:gap-7'>
             <span className='cursor-pointer hover:scale-105 hover:text-blue-400'><i class="ri-home-2-fill"></i></span>
             <span className='cursor-pointer hover:scale-105 hover:text-blue-400'><i class="ri-search-line"></i></span>
             <span className='cursor-pointer hover:scale-105 hover:text-blue-400'><i class="ri-user-fill"></i></span>
             <span className='cursor-pointer hover:scale-105 hover:text-blue-400'><i class="ri-shopping-cart-fill"></i></span>
             <span className='cursor-pointer hover:scale-105 hover:text-blue-400'><i class="ri-sun-fill"></i></span>
         </div>
     </div>
  )
}

export default Navbar
