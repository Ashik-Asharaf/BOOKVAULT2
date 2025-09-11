import React from 'react'
import { TbArrowBackUp, TbTruckDelivery } from 'react-icons/tb'
import {RiSecurePaymentLine} from "react-icons/ri"

function ProductFeatures() {
  return (
    <div className='mt-12 bg-primary rounded-lg'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 rounded-xl'>
            <div className='flexCenter gap-x-4 p-2 rounded-3xl ml-5'>
                <div className='text-3xl'><TbArrowBackUp className='mb-3 text-yellow-500'/></div>
                <div>
                    <h4 className='h4 capitalize'>Easy Return</h4>
                    <p>Enjoy our Easy Return policy for a hassle-free shopping experience. If a book doesn’t meet your expectations, returning it is simple and quick.</p>
                </div>
            </div>
            <div className='flexCenter gap-x-4 p-2 rounded-3xl'>
                <div className='text-3xl'><TbTruckDelivery className='mb-3 text-red-500'/></div>
                <div>
                    <h4 className='h4 capitalize'>Fast Delivery</h4>
                    <p>Experience Fast Delivery with your favorite books arriving at your doorstep in no time. We ensure quick, reliable shipping so you can start reading sooner.</p>
                </div>
            </div>
             <div className='flexCenter gap-x-4 p-2 rounded-3xl'>
                <div className='text-3xl'><RiSecurePaymentLine className='mb-3 text-blue-500'/></div>
                <div>
                    <h4 className='h4 capitalize'>Secure Payment</h4>
                    <p>Shop with confidence through our Secure Payment system. Your transactions are protected with advanced encryption for a safe and smooth checkout.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProductFeatures