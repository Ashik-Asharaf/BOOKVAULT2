import React, { createContext, use, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { dummyBooks } from '../assets/data'

export const ShopContext = createContext()



const ShopContextProvider = ({children}) => {

    const navigate = useNavigate()
    const [books,setBooks] = useState([])
    const [user, setUser] = useState('dummyuser')
    const [searchQuery, setSearchQuery] = useState("")
    const currency = import.meta.env.VITE_CURRENCY
    const [cartItems, setCartItems] = useState({}) //{itemId: quantity}
    const [method, setMethod] = useState("COD") //COD or ONLINE
    const [showUserlogin, setShowUserlogin] = useState("")
    const delivery_charges = 50 // 50 rs
//fetch all books

const fetchBooks= ()=> {
    setBooks(dummyBooks)
}


//Adding Books to Cart
const addToCart = (itemId) => {
    const cartData = {...cartItems}//use shallow copy

    if(cartData[itemId]){
        cartData[itemId] += 1
    }else{
        cartData[itemId] = 1
    }

    setCartItems(cartData)
    
}

//Getting total cart Items
const getCartCount = () => {
    let totalCount = 0
    for(const itemId in cartItems){
        try {
            if (cartItems[itemId] > 0) {
                totalCount += cartItems[itemId]
            }
        } catch (error) {
            console.log(error)
        }
    }
    return totalCount
}

// Update the quantity of items

const updateQuantity = (itemId, quantity) => {
    const cartData = {...cartItems} //shallow copy
    cartData[itemId] = quantity
    setCartItems(cartData) 
}

//Get total cart amount
const getCartAmount = () => {
    let totalAmount = 0
    for(const itemId in cartItems){
        if(cartItems[itemId] > 0){
            let itemInfo = books.find((book)=> book.id === itemId)
            if(itemInfo){
                totalAmount += cartItems[itemId] * itemInfo.offerPrice
            }
        }
    }
    return totalAmount
}
useEffect(()=>{
    fetchBooks()
},[])


    const value={books,navigate,user,setUser,currency,
        searchQuery,setSearchQuery,cartItems,setCartItems,
        addToCart,getCartCount,updateQuantity,getCartAmount,
        method,setMethod, delivery_charges, showUserlogin,
        setShowUserlogin} 

  return (
    <ShopContext.Provider  value={value}>
        {children}
    </ShopContext.Provider>
  )
}

export default ShopContextProvider