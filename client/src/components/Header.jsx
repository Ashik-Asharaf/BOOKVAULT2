import React, { useState } from 'react'
import { Link,useLocation, useNavigate } from 'react-router-dom'
import logoImg from '../assets/logo.png'
import userImg from '../assets/user.png'
import {FaBars,FaBarsStaggered} from 'react-icons/fa6'
import { FaSearch } from 'react-icons/fa'
import {RiUserLine} from 'react-icons/ri'
// import {BsHeart} from 'react-icons/bs'
// import {FiShoppingCart} from 'react-icons/fi'
import Navbar from './Navbar';
import Cart from './../pages/Cart';

const Header = () => {

  const[menuOpened,setMenuOpened] = useState(false)
  const [showSearch, setShowSearch] = useState(false)
  const [user, setUser] = useState(true)
  const navigate = useNavigate()

  const toggleMenu = () => {
    setMenuOpened(prev=>!prev)
  }

  return (
    <header className='absolute top-0 left-0 right-0 max-padd-container flexBetween gap-4 py-2'>
      {/* logo */}
      <div className='flex flex-1'>
    <Link to={'/'} className="bold-22  x1:bold-28 flex item-end gap-1" >
    <img src={logoImg} alt=""  className='hidden sm:block h-9'/>
    <div  className="sm:relative top-1.5" >BookVault<span className='text-secondary'>a.</span></div>
    </Link>
      </div>
      {/* NAVBAR FOR DESKTOP & MOBILE */}
      <div className='flex-1'>
        <Navbar setMenuOpened ={setMenuOpened} containerStyles={`${menuOpened ? 
          "flex item-start flex-col gap-y-8 fixed top-16 right-6 p-5 bg-white rounded-x1 shadow-md w-52 ring-1 ring-slate-900/5 z-50":
           "hidden lg:flex gap-x-5 x1:gap-x-7 medium-15 ring-1 ring-1 ring-slate-900/15 rounded-full p-1 bg-primary"}`} />
      </div>
      
        <div className="flex sm:flex-1 items-center">
            {/* SEARCHBAR */}
            <div className='relative'> 
              {/* Toggle input */}
              <div>
                <input type="text" placeholder='Search book...'/>
              </div>
              {/* toggle button */}
              <div>
              <FaSearch className='text-x1'/>
              </div>
        </div>
        {/* MENU TOGGLE */}
        <>
        {menuOpened ? (
        <FaBarsStaggered onClick={toggleMenu} 
        className='lg:hidden cursor-pointer text-xl'/> 
       ):(
        <FaBars onClick={toggleMenu}
         className='lg:hidden cursor-pointer text-xl'/>
       )}
        </>
        {/* CART */}
        <Link to={'/cart'} className='flex relative'>
        <div>
          Cart <span>0</span>
        </div>
        </Link>
        {/* USER PROFILE */}
        <div>
          <div>
            {user ? (
              <div className='flex gap-2'>
                <img src={userImg} alt="" height={44} width={44} />
              </div>
            ):(
              <button className='btn-light flexCenter'>Login <RiUserLine className='text-xl' /></button>
            )}
          </div>
          {/* DROPDOWN */}
          {user && 
          (<ul>
            <li onClick={()=>navigate('/my-orders')} className="p-2 rounded-md hover:bg-primary cursor-pointer">Orders</li>
            <li  className="p-2 rounded-md hover:bg-primary cursor-pointer">Logout</li>
   
          </ul>)
          }
        </div>
      </div>
    </header>
  )
}

export default Header