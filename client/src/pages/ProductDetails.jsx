import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import { TbHeart,  TbShoppingBagPlus, TbStarFilled, TbStarHalfFilled } from 'react-icons/tb';
import { FaTruck } from 'react-icons/fa';

const ProductDetails = () => {
  const {books,currency}= useContext(ShopContext)
  const {id} = useParams();

  const book = books.find((b) => b._id === id)
  const [image,setImage] = useState(null)

  useEffect(()=>{
    if(book){
      setImage(book.image[0])
    }
  },[book])

  return (
    book && (
    <div className='max-padd-container py-16 pt-28'>
      <p>
        <Link to={'/'}>Home</Link>/
        <Link to={'/shop'}>Shop</Link>/
        <Link to={`/shop/${book.category}`}>{book.category}</Link>/
        <span>{book.name}</span>

      </p>
      {/* BOOK DATA */}
      <div className='flex gap-10 flex-col xl:flex-row my-6'>
        {/* IMAGE */}
        <div className='flex gap-2 max-w-[433px] rounded-xl '>
          <div className='flex-1 flexCenter flex-col gap-[7px] flex-wrap'>
            {book.image.map((item, index)=>(
              <div key={index}>
                <img onClick={()=>setImage(item)} src={item} alt="bookImage" className='rounded-lg overflow-hidden' />
              </div>
            ))}
          </div>
          <div>
            <img src={image} alt="bookImg" className='rounded-lg overflow-hidden'/>
          </div>
        </div>
        {/* INFO */}
        <div className=' pt-5 px-5 py-3 w-full bg-primary rounded-xl'>
          <h3 className="h3 leading-none">{book.name}</h3>
          <div className='flex items-center gap-x-2 pt-2'>
            <div className='flex gap-x-2 text-yellow-400'>
              <TbStarFilled/>
              <TbStarFilled/>
              <TbStarFilled/>
              <TbStarFilled/>
              <TbStarHalfFilled/>
            </div>
            <p className='medium-22'>(22)</p>
          </div>
          <div className='h4 flex items-baseline gap-4 my-2'>
            <h3 className='h3 line-through text-secondary'>{currency}{book.price}.00</h3>
            <h4 className="h4">{currency}{book.offerPrice}.00</h4>
          </div>
          <p className='max-w-[555px]'>{book.description}</p>
          <div className='flex items-center gap-x-4 mt-6'>
            <button className='btn-dark sm:w-1/2 flexCenter gap-x-2 capitalize !rounded-md'>Add to cart <TbShoppingBagPlus/></button>
            <button className='btn-secondary !rounded-md'><TbHeart className='text-xl'/></button>
          </div>
          <div className='flex items-center gap-x-2 mt-3'>  
          < FaTruck  className='text-lg'/>Free delivery on all orders above {currency}500.00
          </div>
          <hr className='my-3 w-2/3'/>
          <div className='mt-2 flex flex-col gap-1 text-gray-30 text-[14px] '>
            <p>Authenticy You Can Trust</p>
            <p>Enjoy Cashon Delivery for Your Convenience</p>
            <p>Easy Returns and Exchange Within 7 Days</p>
          </div>
        </div>
      </div>
    </div>
    )
  )
}

export default ProductDetails
