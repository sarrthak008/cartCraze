import React, { useState } from 'react'
import { useTheam } from '../contexts/TheamContext'

const Navbar = () => {

  const {theme, setTheme} = useTheam()
  const [navState,setNavState] = useState(false)

  return (
   <>
   <div className='h-10 w-full bg-gray-300 flex items-center justify-between px-2 sm:px-7 z-[10] absolute top-0 left-0'>
      <div className='font-bold text-lg'>CardCraze .</div>
      <div className='font-bold text-xl cursor-pointer hover:scale-[1.1] hover:text-blue-400 sm:hidden' onClick={()=>{setNavState(true)}}><i class="ri-menu-3-fill"></i></div>
      <div className='sm:flex sm:h-full sm:items-center sm:gap-6 hidden'>
         <span className='cursor-pointer hover:text-blue-400'><i class="ri-home-2-line"></i></span>
         <span className='cursor-pointer hover:text-blue-400'><i class="ri-search-2-line"></i></span>
         <span className='cursor-pointer hover:text-blue-400'><i class="ri-user-line"></i></span>
         <span className='cursor-pointer hover:text-blue-400'><i class="ri-shopping-cart-line"></i></span>
      </div>
   </div>
   {navState ? <div className='h-screen w-screen bg-gray-100 flex flex-col absolute top-0 left-0 gap-5 px-6 pt-10  z-20'>
       <div className='font-semibold flex gap-2  h-7 cursor-pointer w-full  hover:bg-violet-100 px-3  rounded '><i class="ri-home-2-line"></i> home</div>
       <div className='font-semibold flex gap-2  h-7 cursor-pointer w-full  hover:bg-violet-100 px-3 rounded'><i class="ri-search-2-line"></i> search</div>
       <div className='font-semibold flex gap-2  h-7 cursor-pointer w-full  hover:bg-violet-100 px-3 rounded'><i class="ri-user-line"></i> account</div>
       <div className='font-semibold flex gap-2  h-7 cursor-pointer w-full  hover:bg-violet-100 px-3 rounded'><i class="ri-shopping-cart-line"></i> my cart</div>
       <div className='cursor-pointer absolute top-0 right-0 mr-3 text-2xl hover:text-red-400' onClick={()=>{setNavState(false)}}><i class="ri-close-fill"></i></div>
   </div>:null}
   </>
  )
}

export default Navbar
