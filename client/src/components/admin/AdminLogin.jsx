import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../../context/ShopContext'

const AdminLogin = () => {
const {isAdmin,setIsAdmin,navigate}=useContext(ShopContext)
const [email, setEmail] = useState("")
const [password, setPassword] = useState("")
const onsubmitHandler=(event)=>{
event.preventDefault()
setIsAdmin(true) //
}

useEffect(()=>{
  if(isAdmin){
    navigate('/admin')
  }
},[isAdmin])    

  return !isAdmin && <div className='fixed top-0 left-0 bottom-0 right-0 z-40 flex items-center text-sm text-gray-600 '>
    <form onSubmit={onsubmitHandler} className='flex flex-col gap-4 m-auto p-8 rounded-lg shadow-xl bg-white items-start py-12 sm:w-[352px] border border-gray-200 text-[80%]'>
     <h3 className='bold-18 mx-auto mb-3'>
        <span className='text-secondary capitalize text-2xl'>Admin </span>
        <span  className='Capitalize text-2xl'>Login</span>
    </h3>
        <div className='w-full'>
            <p className='medium-14'>Email</p>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} 
            className='border border-gray-200 rounded w-full p-2 mt-1 outline-black/80' required />
        </div>
        <div className='w-full'>
            <p className='medium-14'>Password</p>
             <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} 
            className='border border-gray-200 rounded w-full p-2 mt-1 outline-black/80' required />
          </div>
        <button type='submit' className='btn-primary w-full mt-3 bg-secondary text-white h-8 rounded-lg'>
            Login
        </button>

    </form>
    </div>
  
}

export default AdminLogin