import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import LoginPage from './pages/LoginPage'
import SigninPage from './pages/SigninPage'
import Home from './pages/Home'
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import './App.css'


function App() {
  
  return (  
    <>
      <div className='font-mono px-6'>
        <BrowserRouter>
          <Routes>
            <Route path='/home' element={<Home/>}></Route>
            <Route path='/login' element={<LoginPage/>}></Route>
            <Route path='/signup' element={<SigninPage/>}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
