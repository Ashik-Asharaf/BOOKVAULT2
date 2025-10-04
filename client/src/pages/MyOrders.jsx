import React, { use, useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { dummyOrders } from '../assets/data'
import Title from '../components/Title'

const MyOrders = () => {
  const{currency,user}=useContext(ShopContext)  

  return (
    <div className='max-padd-container py-16 pt-20'>
       <Title
       title1={"My"}
        title2={"Orders"}
        titleStyle={"pb-10"}
       />
       {dummyOrders.map((order)=>(
        <div key={order._id} className='bg-primary p-2 mt-3 rounded-lg shadow-md'>
          {/* BOOK LIST */}
          <div className='flex flex-col lg:flex-row gap-4 mb-3'>
            {order.items.map((item,index)=>(
              <div key={index} className='flex gap-x-3'>
                <div className='flexCenter rounded-lg aspect-square object-contain'>
                  <img src={item.book.image[0]} alt="OrderImg" className='max-h-20 max-w-32 aspect-square object-contain' />
                </div>
                <div className='w-full block'>
                  <h5 className='h5 capitalize line-clamp-1'>{item.book.name}</h5>
                  <div className='flex flex-wrap gap-3 max-sm:gap-y-5 mt-1'>
                    <div className='flex items-center gap-x-2'>
                      <h5 className='medium-14'>Price:</h5>
                      <p>{currency}{item.book.offerPrice}</p>
                    </div>
                    <div className='flex items-center gap-x-2'>
                      <h5 className='medium-14'>Quantity:</h5>
                      <p>{item.quantity}</p>
                    </div>

                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* ORDER SUMMARY */}
          <div className='flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 border-t pt-3 border-gray-300'> 
            <div className='flex flex-col gap-2'>
              <div className='flex items-center gap-x-2'>
                <h5 className='medium-14' >Order Id:</h5>
                <p className='text-gray-400 text-xs break-all'>{order._id}</p>
              </div>
              <div className='flex gap-1'>
                <div className='flex items-center gap-x-2'>
                      <h5 className='medium-14'>Payment Status:</h5>
                      <p>{order.isPaid ? "Done" : "Pending"}</p>
                  </div>
                  <div className='flex items-center gap-x-2'>
                      <h5 className='medium-14'>Method:</h5>
                      <p  className='text-gray-400 text-sm break-all'>{order.paymentMethod}</p>
                  </div>
              </div>
            </div>
            <div>
              <div className='flex gap-4'>
                <div className='flex items-center gap-x-2'>
                      <h5 className='medium-14'>Date:</h5>
                      <p  className='text-gray-400 text-sm break-all'>{new Date(order.createdAt).toDateString()}</p>
                </div>
                <div className='flex items-center gap-x-2'>
                      <h5 className='medium-14'>Amount:</h5>
                      <p  className='text-gray-400 text-sm break-all'>{currency}{order.amount}</p>
                </div>
              </div>
            </div>
            <div className='flex gap-3'>
              <div className='flex items-center gap-x-2'>
                <h5 className='medium-14'>Status:</h5>
                <div className='flex items-center gap-1'>
                  <span className='min-w-2 h-2 rounded-full bg-green-500' />
                  <p>{order.status}</p>
                </div>
              </div>
              <button className='btn-secondary !py-1 !text-xs rounded-sm'>Track Order</button>
            </div>
          </div>
        </div>
       ))}
    </div>
  )
}

export default MyOrders
