import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/Header'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <div className="App">
      <header className='max-w-[1440px] px-[50px] mx-auto'>
        <Header></Header>
      </header>
      <main className='max-w-[1440px] px-[50px] mx-auto h-[500px]]'>
        <Outlet></Outlet>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  )
}

export default App
