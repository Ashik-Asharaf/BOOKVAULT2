import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title'

const Cart = () => {
  const {navigate, books, currency, cartItems, updateQuantity}
  = useContext(ShopContext)
  return books && cartItems ? (
    <div>
      <div>
        {/* LEFT SIDE */}
        <div>
          <Title title1={"Cart"} 
          title2={"Overview"} 
          titleStyles={"pb-10"} 
          />

        </div>
      </div>
    </div>
  ) : null}

export default Cart
