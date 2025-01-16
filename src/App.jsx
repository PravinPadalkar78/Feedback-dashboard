import { useState } from 'react'
import reactLogo from './assets/react.svg'

import './App.css'
import Header from './Components/Header'
import { Outlet } from 'react-router'


function App() {
  
  return (
    <div className='container'>
    <Header/>
    <div className="center">
    <Outlet/>
    </div>
    </div>
  )
}

export default App
