import React, { useContext, useEffect, useState } from 'react' // <-- Added useState import
import Title from '../components/Title'
import Item from '../components/Item'
import { ShopContext } from '../context/ShopContext'
import { useParams } from 'react-router-dom'

const CategoryShop = () => {
  const { books, searchQuery } = useContext(ShopContext)
  const [filteredBooks, setFilteredBooks] = useState([])
  const [currPage, setCurrPage] = useState(1)
  const itemPerPage = 10;
  const { category } = useParams();
 

  useEffect(() => {
    let result = books;
    //Filter by category from URL

    if(category){
      result = result.filter((book) => book.category.toLowerCase() === category.toLocaleLowerCase());
    }

    if (searchQuery.length > 0) {
      setFilteredBooks(
      (result = result.filter((book) =>
          book.name.toLowerCase().includes(searchQuery.toLowerCase())
        ))
      )
    } 
      setFilteredBooks(result);
    
    setCurrPage(1) // Reset to first page on new search
  }, [searchQuery, books, category])

  const totalPages = Math.ceil(
    filteredBooks.filter((b) => b.inStock).length / itemPerPage
  )


  useEffect(() => {
    window.scrollTo({top: 0,  behaviour : 'smooth'})
  },[currPage])

  return (
    <div className='max-padd-container py-16 pt-28'>
      <Title
        title1={category}
        title2={'Books'}
        titleStyles={'pb-10'}
      />
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6'>
        {filteredBooks.length > 0 ? (
          filteredBooks
            .filter((book) => book.inStock)
            .slice((currPage - 1) * itemPerPage, currPage * itemPerPage)
            .map((book) => (
              <Item key={book._id} book={book} />
            ))
        ) : (
          <h4 className='h4'>Oops! Nothing matched your search</h4>
        )}
      </div>
      {/* PAGINATION */}
      <div className='flexCenter flex-wrap mt-14 gap-2 sm:gap-4 mb-10 bold-20'>
        <button
          disabled={currPage === 1}
          onClick={() => setCurrPage(prev => prev - 1)}
          className={`btn-dark bold-15 !py-3 !px-7 ${currPage === 1 ? "opacity-50 cursor-not-allowed" : ""}`}
        >
          Previous
        </button>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => setCurrPage(index + 1)}
            className={`btn-light bold-15 !py-3 !px-7 ${currPage === index + 1 ? " bg-secondary text-white" : ""}`}
          >
            {index + 1}
          </button>
        ))}
        <button
          disabled={currPage === totalPages}
          onClick={() => setCurrPage(prev => prev + 1)}
          className={`btn-white bold-15 bg-tertiary !py-3 !px-7 ${currPage === totalPages ? "opacity-50 cursor-not-allowed" : ""}`}
        >
          Next
        </button>
      </div>
    </div>
  )
}

export default CategoryShop