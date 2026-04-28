import { useState } from 'react'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'

function App() {
  const [isAutheticated, setIsAuthenticated] = useState(false);

  return (
    <>
      {!isAutheticated ? (
        <Login />
      ) : <Dashboard />}

    </>
  )
}

export default App
