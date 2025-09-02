import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title'
import { TbShoppingBagPlus } from 'react-icons/tb'
import featuredBooksImg from '../assets/featured-books.png'

const FeaturedBooks = () => {

    const {books,currency}= useContext(ShopContext)
    const book = books[21] //Get the 21 index Book

  return (
    <section className='max-padd-container max-sm:bg-primary'>
      {/* CONTAINER */}
      <div className='sm:px-10 flex sm:bg-primary py-16 rounded-2xl '>
        {/* LEFT SIDE */}
        <div>
             <Title title1={"Featured"} title2={"Books"} titleStyles={"pb-8"} para={"Explore our Featured Books, a curated collection of must-reads chosen for their impact and popularity."} /> 
            {/* BOOK CARD */}
            <div className='flex gap-3 sm:gap-8 sm:bg-white sm:p-4 rounded-2xl max-w-sm sm:max-w-lg md:max-w-xl lg:max-w-2xl w-full scale-[0.95] '>
                <div className='min-w-[140px] sm:min-w-[180px]'>
                    <img src={book?.image} alt={book?.name}  className='h-52 sm:h-74 w-32 sm:w-60 object-cover'/>
                </div>
                <div className='flex flex-col justify-between flex-1'>
                    <div className='space-y-1'>
                        <h3 className='text-base sm:text-xl font-semibold text-gray-800 line-clamp-1'>{book?.name}</h3>
                        <p className='text-xs sm:text-sm '>{book?.category}</p>
                    </div>
                    <div className='flex items-center gap-3 sm:mt-2'>
                        <h4 className='text-base sm:text-lg font-bold text-secondary'>{currency}{book?.offerPrice}.00</h4>
                        <p className='text-xs sm:text-sm  line-through mt-1'>{currency}{book?.price}.00</p>
                        <span className='hidden sm:flex bg-green-100 text-green-700 text-xs font-semibold px-2 py-1 rounded-full'>Save {currency}130.00</span>
                    </div>
                    <div className='grid grid-cols-2 gap-2 sm:gap-4 mt-2 text-sm  text-gray-600'>
                        <p><span className='font-medium '>Published:</span>2023</p>
                        <p><span className='font-medium '>Pages:</span>300</p>
                        <p><span className='font-medium '>Language:</span>English</p>
                        <p><span className='font-medium '>Stock:</span>In Stock</p>
                    </div>
                    <p className='mt-1 sm:mt-4  text-xs sm:text-sm line-clamp-2'>{book?.description}</p>
                    <button className='btn-secondary max-sm:text-xs mt-1 sm:mt-5 w-fit px-4 sm:px-5 py-2 flex items-center gap-2 text-xs sm:text-sm font-medium'>
                        <TbShoppingBagPlus className='text-lg'/>Add to Cart
                    </button>
                </div>
            </div>
        </div>
        {/* RIGHT SIDE */}
        <div className='hidden xl:flex flex-1 bg-center bg-cover bg-no-repeat scale-[1.13] mr-5 ' style={{ backgroundImage: `url(${featuredBooksImg})` }}>
            <div className='' />
        </div>
      </div>
    </section>
  )
}

export default FeaturedBooks
