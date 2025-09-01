import React, { useContext } from 'react'
import {TbShoppingBagPlus} from 'react-icons/tb'
import { ShopContext } from '../context/ShopContext'

const Item = ({book,fromHero}) => {

  const {navigate,currency} = useContext(ShopContext)

  return book? (
    <div>
      {/* IMAGE */}
      <div>
        <img src={book.image} alt="book.name" 
        className='rounded-lg'/>
      </div>
      {/* INFO */}
      <div>
        <div>
          <h4>{book.name}</h4>
          <p>{currency}{book.offerPrice}.00</p>
        </div>
        <div>
          <p>{book.description}</p>
          <button><TbShoppingBagPlus className="text-x1" /></button>
        </div>
      </div>
    </div>
  ):(
    <div className='p-5 text-red-600 text-sm rounded-md'>No book found...</div>
  )
}

export default Item