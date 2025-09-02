import React, { useContext, useState ,useEffect } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
// import required modules
import { Autoplay } from 'swiper/modules';
import Item from './Item';
import NewArrivals from './NewArrivals';


const PopularBooks = () => {
  
   const [popularBooks, setPopularBooks] = useState([])
      const {books} = useContext(ShopContext)
  
    //Getting Popular Books
      useEffect(() => {
          const data=books.filter((item)=>item.popular)
          setPopularBooks(data.slice(0,6))
      },[books])
  
  return (
    
      <section className='max-padd-container py-16'>
       <Title title1={"Popular"} 
       title2={"Books"} 
       titleStyles={"pb-10"} 
       para={"Browse our Popular Books, loved by readers and trending for their unforgettable stories and timeless appeal."} 
       /> 

       <Swiper 
                autoplay={{
                    delay:4000,
                    disableOnInteraction: false,
                }}
                breakpoints={{
                    355: {
                      slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    600: {
                      slidesPerView: 3,
                        spaceBetween: 30,
                    },
                    900: {
                      slidesPerView: 4,
                        spaceBetween: 30,
                    },
                    
                    }}
                modules={[Autoplay]}
                className="min-h-[333px] "
                    >
                        {
                            popularBooks.map((book)=>(
                                <SwiperSlide key={book.id}>
                                    <Item book={book}  />
                                </SwiperSlide>
                            ))
                        }

                </Swiper>
    {/* CONTAINER */}
    </section>
  )
}

export default PopularBooks
