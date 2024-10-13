import React from 'react'

const ProductCard = ({product}) => {
  return (
    <div className='h-[220px] w-[200px] bg-gray-100 m-4 rounded-sm flex flex-col items-center p-5'>
        <div className='w-[140px] h-[120px] bg-gray-200'>
            <img src={product.image} className='h-full w-full object-fill'/>
        </div>
        <div>
            <span className='text-[15px] line-clamp-1 '>{product.title}</span>
        </div>
    </div>
  )
}

export default ProductCard
