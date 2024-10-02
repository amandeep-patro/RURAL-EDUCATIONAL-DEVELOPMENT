import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import LoginPage from './pages/LoginPage'
import SigninPage from './pages/SigninPage'
import './App.css'


function App() {
  
  return (
    <>
      <div className='font-mono px-6'>
        <SigninPage></SigninPage>
      </div>
    </>
  )
}

export default App
