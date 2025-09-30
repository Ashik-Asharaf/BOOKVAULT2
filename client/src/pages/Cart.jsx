import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title'
import { FaMinus, FaPlus } from 'react-icons/fa6'
import CartTotal from '../components/CartTotal'

const Cart = () => {
  const {navigate, books, currency, cartItems, updateQuantity}
  = useContext(ShopContext)
  return books && cartItems ? (
    <div className='max-padd-container py-16 pt-28'>
      <div className='flex flex-col xl:flex-row gap-20 xl:gap-28'>
        {/* LEFT SIDE */}
        <div className='flex flex-[2] flex-col gap-3'>
          <Title title1={"Cart"} 
          title2={"Overview"} 
          titleStyles={"pb-5"} 
          />
          <div className='grid grid-cols-[6fr_1fr_2fr] text-base font-medium bg-primary p-2 rounded-lg' >
            <h5 className="h5 text-left">Product Details</h5>
            <h5 className="h5 text-center">SubTotal</h5>
            <h5 className="h5 text-center">Action</h5>
          </div>
          {books.map((book)=>{
            const quantity = cartItems[book._id]
            if(quantity > 0){
              return (
                <div key={book._id} className='grid grid-cols-[6fr_1fr_2fr] items-center bg-primary p-2 rounded-lg'>
                  <div className='flex items-center md:gap-6 gap-3'>
                    <div className='flex bg-primary'>
                      <img src={book.image} alt="bookImage" className='w-12 rounded-lg' />
                    </div>
                    <div className="flex flex-col">
                      <h5 className="h5 hidden sm:block line-clamp-1">{book.name}</h5>
                      <div className='mt-2 flex justify-start'>
                        <div className='flex items-center ring-1 ring-slate-900/5 p-0.5 rounded-full overflow-hidden bg-white'>
                          <button onClick={()=>updateQuantity(book._id, quantity - 1)} className='p-1.5 bg-primary rounded-full cursor-pointer'>
                            <FaMinus className='text-x5' />
                          </button>
                          <p className="px-2">{quantity}</p>
                          <button onClick={()=>updateQuantity(book._id, quantity + 1)} className='p-1.5 bg-primary rounded-full cursor-pointer'>
                            <FaPlus className='text-x5' />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className='text-center font-semibold'>{currency} {(book.offerPrice * quantity)}</p>
                  <button onClick={()=>updateQuantity(book._id, 0)} className='cursor-pointer mx-auto bold-14 text-secondary' >delete</button>
                </div>
          )}
          return null
          })}
        </div>
         {/* RIGHT SIDE */}
         <div className='flex flex-1 flex-col '>
            <div className='max-w-[379px] bg-primary p-5 py-10 max-md:mt-16 rounded-xl'>
              <CartTotal/>
            </div>
         </div>
      </div>
    </div>
  ) : null}

export default Cart
