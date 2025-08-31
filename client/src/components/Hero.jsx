import { Link } from 'react-router-dom'
import bghero from "../assets/bg-hero.png"
import bg from "../assets/bg.png"
import { FaArrowRight } from 'react-icons/fa6'
import React, { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
// import required modules
import { Autoplay } from 'swiper/modules';
import { dummyBooks as books } from '../assets/data';



const Hero = () => {
    const [popularBooks, setPopularBooks] = useState([])

    //Getting Popular Books
    useEffect(() => {
        const data=books.filter((item)=>item.popular)
        setPopularBooks(data.slice(0,6))
    },[books])
    
    useEffect(() => {
        console.log(popularBooks)
    }, [popularBooks])


  return (
    <section className="max-padd-container">
      <div className="flex">
        {/* LEFT SIDE */}
        <div>
            <h3>Explore Books You'll Love</h3>
            <h1>Find Your Next Book</h1>
            <h2>Upto 40% Off This Week</h2>
            <p>Discover and explore a wide collection
               of books across genres, from timeless 
               classics to the latest releases. Our 
               website makes it easy to find, read, and 
               enjoy stories that inspire, entertain, and inform.</p>
               {/* BUTTON */}
            <div>
                <Link to={'/shop'} >
                <FaArrowRight/>
                </Link>
            </div>
        </div>
      </div>
      {/* RIGHT SIDE */}
      <div>
        <div>
            {/* CONTAINER */}
            <div>
                {
                    <Swiper 
                autoplay={{
                    delay:4000,
                    disableOnInteraction: false,
                }}
                breakpoints={{
                    355: {
                      slidesPerView: 1,
                        spaceBetween: 10,
                    }
                    }}
                modules={[Autoplay]}
                className="min-h-[399px] max-w-64"
                    >
                        {

                        }
                </Swiper>
                }
            </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
