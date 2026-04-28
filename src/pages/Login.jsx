import React from 'react'

const Login = () => {
  return (
    <div className="login-page">
    <main className="card">
    <div className="badge">AI</div>
    <h1>Login to AI Tutor</h1>
    <p>Enter your details to open the tutor chat. This is a simple front-end login flow using browser storage.</p>

    <form id="loginForm">
      <div className="field">
        <label htmlFor="name">Name</label>
        <input id="name" type="text" placeholder="Enter your name" required />
      </div>

      <div className="field">
        <label htmlFor="email">Email</label>
        <input id="email" type="email" placeholder="Enter your email" required />
      </div>

      <button className="full-width" type="submit">Continue to AI Tutor</button>
      <div className="status" id="status">Ready</div>
    </form>
  </main>
  </div>
  )
}

export default Login
