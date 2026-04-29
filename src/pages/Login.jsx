import React, { useState } from 'react'
import { loginStart, loginFailure, loginSuccess } from '../app/features/authSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import API from '../utils/api'
import Auth from '../utils/auth'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const dispatch = useDispatch();
  const { error, isLoading } = useSelector((state) => state.auth)
  // console.log(user)
  const handleLogin = async () => {
    dispatch(loginStart())
    try {
      const payload = { email,password }
      const end_point = '/auth/login'
      const response = await API.postRequest(end_point, payload)
      const result = response?.data?.data || {}
      if (response?.data?.success) {
        dispatch(loginSuccess({ user: result, token: result.access_token }))
        Auth.authenticateUser(result.access_token)
        navigate('/dashboard')
      }
    } catch (err) {
      dispatch(loginFailure('Invalid credentials'))
    } finally {

    }
  }
  return (
    <div className="login-page">
      <main className="card">
        <div className="badge">AI</div>
        <h1>Login to AI Tutor</h1>
        <p>Enter your details to open the tutor chat. This is a simple front-end login flow using browser storage.</p>

        <form id="loginForm">
          <div className="field">
            <label htmlFor="email">Email</label>
            <input id="email" type="text" placeholder="Enter your email" required onChange={(e) => setEmail(e.target.value)} />
          </div>

          <div className="field">
            <label htmlFor="password">Password</label>
            <input id="password" type="password" placeholder="Enter your password" required onChange={(e) => setPassword(e.target.value)} />
          </div>

          <button className="full-width" type="button" onClick={handleLogin} disabled={isLoading}>{isLoading ? "Processing..." : "Continue to AI Tutor"}</button>
          <div className="status" id="status">Ready</div>
          {error && <div className='alert alert-danger'>{error}</div>}
        </form>
      </main>
    </div>
  )
}

export default Login
