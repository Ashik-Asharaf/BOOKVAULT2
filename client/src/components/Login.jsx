import React, { useContext, useState } from 'react'
import { ShopContext } from '../context/ShopContext'

const Login = () => {
  const {showUserlogin,setShowUserlogin,navigate,}=useContext(ShopContext)
  const [state, setState] = useState('login')
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const onSubmitHandler = (event) => {
    event.preventDefault()
  }

  return (
    <div onClick={()=>setShowUserlogin(false)} className='fixed top-0 left-0 bottom-0 right-0 z-40 flex items-center text-sm text-gray-600 bg-black/50'>
      <form onSubmit={onSubmitHandler} onClick={(e)=>e.stopPropagation()}  className='flex flex-col gap-4 m-auto p-8 rounded-lg shadow-xl bg-white items-start py-12 sm:w-[352px] border border-gray-200'>
        <h3 className='bold-18 mx-auto mb-3'>
          <span className='text-secondary capitalize text-2xl'>User </span>
          <span  className='Capitalize text-2xl'>{state === "login" ? "Login" : "Registration"}</span>
        </h3>
        {state === "register" && (
          <div className='w-full'>
            <p className='medium-14'>Name</p>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} className='border border-gray-200 rounded w-full p-2 mt-1 outline-black/80' required />
          </div>
        )}
        <div className='w-full'>
            <p className='medium-14'>Email</p>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className='border border-gray-200 rounded w-full p-2 mt-1 outline-black/80' required />
          </div>
          <div className='w-full'>
            <p className='medium-14'>Password</p>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className='border border-gray-200 rounded w-full p-2 mt-1 outline-black/80' required />
          </div>

        {state === "register" ? (
          <p>
          Already have an account?
          <span onClick={() => setState("Login")} className='text-secondary cursor-pointer '>Login</span>
          </p>
        ) : (
          <p>
          Create an account?
          <span onClick={() => setState("register")} className='text-secondary cursor-pointer '>{" "}click here</span>
          </p>
        )}
        <button type='submit' className='btn-primary w-full mt-3 bg-secondary text-white h-8 rounded-lg'>{state === "register" ? "Create Account" : "Login"}</button>

        </form>
      </div>
  )
}

export default Login