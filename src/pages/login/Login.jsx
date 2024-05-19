import React from 'react'
import './Login.css'
import { FooterLogin } from '../../components/login/FooterLogin'
import logo from '../../assets/logo without background.png'
import { useState } from 'react'
import { useAuth } from './AuthProvider'
import { useNavigate } from 'react-router-dom'

export function Login() {
  const navigate = useNavigate()

  const [input, setInput] = useState({
    username: '',
    password: '',
  })

  const [mensaje, setMensaje] = useState('')

  const auth = useAuth()
  const handleSubmitEvent = (e) => {
    e.preventDefault()
    if (input.username !== '' && input.password !== '') {
      try {
        auth.loginAction(input)
      } catch (error) {
        setMensaje(error.message)
        // alert('Oops! Credenciales Invalidas')
      }
      return
    }
    alert('Todos los campos son obligatorios')
  }

  const handleInput = (e) => {
    const { name, value } = e.target
    setInput((prev) => ({
      ...prev,
      [name]: value,
    }))
  }
  return (
    <div className="login-container">
      <div className="login-form">
        <div className="login-header">
          <h2>Sign In</h2>
        </div>
        <form onSubmit={handleSubmitEvent}>
          <div className="input-container">
              <input
                name='username'
                type="text"
                onChange={handleInput}
                required
              />
            <label>Username</label>
          </div>
          <div className="input-container">
              <input
                name='password'
                type="password"
                onChange={handleInput}
                required
              />
            <label>Password</label>
          </div>
          <button className="btn-signin">
            Sign In
          </button>
          <div className="login-header2">
            <h2>
            You do not have an account? <a href="register">check in</a> 
            </h2>
          </div>
       </form> 
       </div>
    </div>
)

}


