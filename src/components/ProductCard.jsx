import React from 'react'

const ProductCard = ({product}) => {
  return (
    <div className='h-[280px] w-[200px] bg-gray-100 m-4 rounded-sm flex flex-col items-center p-5'>
        <div className='w-[140px] h-[150px] bg-gray-200 p-3'>
            <img src={product.image} className='h-full w-full object-fill mix-blend-multiply'/>
        </div>
        <div>
            <span className='text-[15px] line-clamp-1 font-semibold mt-2 '>{product.title}</span>
            <span className='text-sm text-gray-500' >price {product.price}$</span>
        </div>
    </div>
  )
}

export default ProductCard
