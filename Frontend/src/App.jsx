import React from 'react'
import { Route, Routes } from 'react-router'
import Home from './Pages/Home'
import Register from './Pages/Register'
import Login from './Pages/Login'
import Protected from './Service/protected'

function App() {
  return (
    <Routes>  
      <Route path='/' element={<Protected> <Home /></Protected>} />
      <Route path='/register' element={<Register />} />
      <Route path='/login' element={<Login />} />
    </Routes>
  )
}

export default App