import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Slider from '../components/Slider'
import ShowOffer from '../components/ShowOffer'
import axios  from 'axios'
import ProductCard from '../components/ProductCard'

const Home = () => {

   const [allproducts,setAllProducts] =useState(null)
   const URL = 'https://fakestoreapi.com/products'
   
   useEffect(() =>{
     const fetchProducts = async () =>{
        try {
           let response =  await axios.get(URL)
            if(response){setAllProducts(response.data)}else{alert(response)}
        } catch (error) {
           console.log(error)
        }
     }
    
    fetchProducts()
},[])



  return (
    <div>
        <Navbar/>
        <Slider/>
        <ShowOffer/>
        <div className='text-center font-semibold text-2xl mt-11 '>products.</div>
        <div className='flex flex-col items-center'> 
        {allproducts ? 
          allproducts.map((product)=>(
             <ProductCard  product={product}/>
          ))
         :null}
        </div>
    </div>
  )
}

export default Home
