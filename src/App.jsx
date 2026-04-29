import { useState } from 'react'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import Auth from './utils/auth';

function App() {
  const isAuthenticated = Auth.isAuthenticated()
  console.log(isAuthenticated);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={!isAuthenticated ? <Login /> : <Navigate to="/dashboard" />} />
        {/* Login page */}
        <Route path="/login" element={!isAuthenticated ? <Login /> : <Navigate to="/dashboard" />}
        />
        <Route path="/dashboard" element={isAuthenticated ? <Dashboard /> : <Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
