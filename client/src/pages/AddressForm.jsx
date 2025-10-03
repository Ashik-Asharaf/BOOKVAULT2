import React, { useState } from 'react'
import CartTotal from './../components/CartTotal';
import Title from './../components/Title';
import { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import { data } from 'react-router-dom';

const AddressForm = () => {

  const {navigate,user,  method, setMethod}= useContext(ShopContext);

  const [address, setAddress] = useState({

    firstName: "",
    lastName: "",
    email: "",  
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    phone: ""
  });

  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setAddress((data) => ({
      ...data,
      [name]: value
    }))
    console.log(address);
  }

  const onSubmitHandler =  (e) => {
    e.preventDefault();
  }

  return (
    <div className='max-padd-container py-16 pt-28'>
      {/* Container */}
      <div className='flex flex-col lg:flex-row gap-20 lg:gap-28 items-start'>
        {/* LEFT SIDE */}
        <form 
          onSubmit={onSubmitHandler}
          className='flex flex-[2] flex-col gap-3 text-[95%] w-full lg:w-2/3'
        >
          <Title 
            title1={"Delivery"}
            title2={"Address"}
            titleStyles={"pb-6"}
            para={"Please provide your delivery address details below."}
          />
          <div className='grid grid-cols-2 gap-4'>
            <input 
              onChange={onChangeHandler}
              value={address.firstName}
              type="text" 
              name='firstName'
              placeholder='First Name'
              className='ring-1 ring-slate-900/15 p-2 pl-3 rounded-sm bg-primary outline-none'
            />
            <input 
              onChange={onChangeHandler}
              value={address.lastName}
              type="text" 
              name='lastName'
              placeholder='Last Name'
              className='ring-1 ring-slate-900/15 p-2 pl-3 rounded-sm bg-primary outline-none'
            />
            <input 
              onChange={onChangeHandler}
              value={address.email}
              type="email" 
              name='email'
              placeholder='Email'
              className='ring-1 ring-slate-900/15 p-2 pl-3 rounded-sm bg-primary outline-none'
            />
            <input 
              onChange={onChangeHandler}
              value={address.phone}
              type="tel" 
              name='phone'
              placeholder='Phone Number'
              className='ring-1 ring-slate-900/15 p-2 pl-3 rounded-sm bg-primary outline-none'
            />
            <input 
              onChange={onChangeHandler}
              value={address.street}
              type="text" 
              name='street'
              placeholder='Street'
              className='ring-1 ring-slate-900/15 p-2 pl-3 rounded-sm bg-primary outline-none'
            />
            <input 
              onChange={onChangeHandler}
              value={address.city}
              type="text" 
              name='city'
              placeholder='City'
              className='ring-1 ring-slate-900/15 p-2 pl-3 rounded-sm bg-primary outline-none'
            />
            <input 
              onChange={onChangeHandler}
              value={address.state}
              type="text" 
              name='state'
              placeholder='State'
              className='ring-1 ring-slate-900/15 p-2 pl-3 rounded-sm bg-primary outline-none'
            />
            <input 
              onChange={onChangeHandler}
              value={address.zipcode}
              type="text" 
              name='zipcode'
              placeholder='Zip Code'
              className='ring-1 ring-slate-900/15 p-2 pl-3 rounded-sm bg-primary outline-none'
            />
            <input 
              onChange={onChangeHandler}
              value={address.country}
              type="text" 
              name='country'
              placeholder='Country'
              className='ring-1 ring-slate-900/15 p-2 pl-3 rounded-sm bg-primary outline-none col-span-2'
            />
          </div>
          <button type='submit' className='btn-dark rounded-md w-1/2 mt-4'>
            Add Address
          </button>
        </form>

        {/* RIGHT SIDE */}
        <div className='flex flex-1 flex-col w-full lg:w-1/3'>
          <div className='max-w-[379px] w-full bg-primary p-5 py-10 rounded-xl'>
            <CartTotal method={method} setMethod={setMethod} />            
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddressForm
