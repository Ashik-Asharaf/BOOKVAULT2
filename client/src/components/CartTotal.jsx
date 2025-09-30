import React, { useContext, useState } from 'react'
import { ShopContext } from '../context/ShopContext';
import { dummyAddress } from '../assets/data';

const CartTotal = () => {
   const {navigate, books, currency, cartItems, setCartItems, method,setMethod,getCartCount ,delivery_charges, user, }
    = useContext(ShopContext);

    const [addresses, setAddresses] = useState(dummyAddress); // array of address objects
    const [showAddress, setShowAddress] = useState(false);
    const [selectedAddress, setSelectedAddress] = useState(dummyAddress[0]); // address object

    const getCartAmount = () => {
      let total = 0;
      Object.keys(cartItems).forEach(id => {
        const book = books.find(b => b._id === id);
        if (book && cartItems[id] > 0) {
          total += book.offerPrice * cartItems[id];
        }
      });
      return total;
    };

  return (
    <div>
       <h3 className='bold-22'>
        Order Details
        <span className=' bold-14 text-secondary'>&nbsp;
          ({getCartCount()})Items</span>
        </h3>
        <hr className="border-gray-300 my-5" />
        {/* PAYMENT & ADDRESS */}
        <div className='mb-5'>
          <div className='my-5'>
            <h4 className='h4 mb-5'>Where to ship your order?</h4>
            <div className='relative flex fustify-between items-start mt-2'>
              <p>
                {selectedAddress
                  ? `${selectedAddress.street}, ${selectedAddress.city}, ${selectedAddress.state}, ${selectedAddress.country}`
                  : "No Address Found !!"}
              </p>
              <button onClick={()=>setShowAddress(!showAddress)} className='text-secondary medium-14 hover:underline cursor-pointer ml-2 '>
  Change
</button>
              {showAddress && (
                <div className='absolute top-10 py-1 bg-white ring-1 ring-slate-900/10 text-sm w-full'>
                  {addresses.map((address, index) => (
                    <p
                      key={index}
                      onClick={() => {
                        setSelectedAddress(address);
                        setShowAddress(false);
                      }}
                      className='p-2 cursor-pointer hover:bg-gray-100 medium-14'
                    >
                      {address.street},{address.city},{address.state},{address.country}
                    </p>
                  ))}
                  <p onClick={() => navigate("/address-form")} 
                  className='p-2 text-center cursor-pointer hover:bg-tertiary'>
                    Add Address</p>
                </div>
              )}
            </div>
          </div>
        <hr className="border-gray-300 my-5" />
            <div className='my-5'>
              <h4 className="h4 mb-5">Payment Method?</h4>
              <div className='flex gap-3'>
                <div onClick={()=>setMethod("COD")}
                  className={`${method === "COD" ? "btn-secondary": "btn-white"} !py-1 text-xs cursor-pointer`} >
                    Cash on Delivery
                </div>
                <div onClick={()=>setMethod("stripe")}
                  className={`${method === "stripe" ? "btn-secondary": "btn-white"} !py-1 text-xs cursor-pointer`}>
                  Stripe
                </div>
              </div>
            </div>
            <hr className="border-gray-300 my-5" />
        </div>
        <div className='mt-4 space-y-2'>
          <div className='flex justify-between'>
            <h5 className='h5'>Price</h5>
            <p>{currency} {getCartAmount()}</p>
          </div>

          <div className='flex justify-between'>
            <h5 className='h5'>Tax(2%)</h5>
            <p>{currency} {(getCartAmount() * 2)/100}</p>
          </div>

          <div className='flex justify-between '>
            <h5 className='h5'>Shipping Fee</h5>
            <p> {getCartAmount() === 0 ? "₹0.00" : `${currency} ${delivery_charges}.00`}</p>
          </div>

          <div className='flex justify-between text-lg font-medium mt-4'>
            <h5 className='h5'>Total Amount:</h5>
            <p className='bold-18'> {getCartAmount() === 0 ? "₹0.00" : getCartAmount() + delivery_charges + (getCartAmount() * 2)/100  }</p>
          </div>
        </div>
        <button className='btn-dark w-full mt-8 rounded-md'>
          Proceed to Order</button>
    </div>
  )
}

export default CartTotal