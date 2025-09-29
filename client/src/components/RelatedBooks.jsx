import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext';
import Title from './Title';
import {Swiper, SwiperSlide } from 'swiper/react';
import Item from './Item';
import { Autoplay } from 'swiper/modules';
import NewArrivals from './NewArrivals';

const RelatedBooks = ({book, id}) => {
  const [relatedBooks, setRelatedBooks] = useState([])
  const {books} = useContext(ShopContext)

  useEffect(()=>{
    if(books.length > 0){
      let booksCopy = books.slice()
      booksCopy = booksCopy.filter((item)=>item.category === book.category && id !== item._id)
      setRelatedBooks(booksCopy.slice(0, 6))
    }
  },[books])

  return (
     <section className='max-padd-container py-16'>
       <Title title1={"Related"}
        title2={"Books"}
        titleStyles={"pb-10"} 
        paraStyles={"Stay ahead with our latest collection of related books, featuring fresh releases and trending titles. Explore the newest stories, ideas, and voices added just for you."} /> 
    {/* CONTAINER */}
    
     {
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
                    1200: {
                      slidesPerView: 5,
                        spaceBetween: 30,
                    }
                    }}
                modules={[Autoplay]}
                className="min-h-[333px] "
                    >
                        {
                            relatedBooks.map((book)=>(
                                <SwiperSlide key={book.id}>
                                    <Item book={book}  />
                                </SwiperSlide>
                            ))
                        }
                </Swiper>
                }
    </section>
  )
}

export default RelatedBooks


