import React, { useContext, useState } from 'react'
import { ShopContext } from '../context/ShopContext'

const Login = () => {
  const {showUserLogin,setShowUserLogin}=useContext(ShopContext)
  const [state, setState] = useState('login')
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const onSubmitHandler = (event) => {
    event.preventDefault()
  }

  return (
    <div>Login</div>
  )
}

export default Login